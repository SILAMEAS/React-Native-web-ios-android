import axios, {AxiosInstance} from 'axios';
import {$ok, $timeOut, $toUnsigned} from '../commons';
import {$isNumber} from '../commons/number';
import {Nullable} from '../commons/type';
import {NGError, NGUniqueError} from '../Errors/NGError';
import {Resp} from './interfaces/APIConstants';
import {
  OtherCommonAxiosEvent,
  RequestHeaders,
  TSRequestOptions,
  TSResponse,
  ResponseType,
} from './interfaces/APIInterface';
import {Buffer} from 'buffer';

export function $barerauth(base64token: string): string {
  return `Bearer ${base64token}`;
}

export class NGRequest {
  channel: AxiosInstance;
  token?: string;
  defaultTimeOut: number;
  baseURL?: string;
  commonHeaders: RequestHeaders;

  constructor(baseURL?: string, opt?: TSRequestOptions) {
    this.baseURL = baseURL;
    this.channel = axios.create({
      baseURL: this.baseURL,
      withCredentials: opt?.managesCredentials,
    });
    this.token = undefined;
    this.defaultTimeOut = $ok(opt?.timeout) ? opt?.timeout! : 0;
    this.commonHeaders = $ok(opt?.headers) ? opt?.headers! : {};
  }

  setToken(token?: string): void {
    this.token = $ok(token) ? $barerauth(token!) : undefined;
  }
  async req(
    relativeURL: string,
    method?: string,
    responseType?: ResponseType,
    body?: Nullable<object>,
    supportHeaders?: RequestHeaders,
    timeout?: number,
    otherCommonAxiosEvent?: OtherCommonAxiosEvent,
  ): Promise<TSResponse> {
    const config: any = {
      url: relativeURL,
      method: method,
      responseType: responseType,
      headers: Object.assign(
        Object.assign({}, this.commonHeaders),
        supportHeaders,
      ),
      data: undefined,
      ...otherCommonAxiosEvent,
    };
    if ($ok(this.token)) {
      config.headers.Authorization = this.token!;
    }
    if ($ok(body)) {
      config.data = body;
    }
    if ($ok(timeout) && Number(timeout) <= 0) {
      throw new NGError(
        'NGRequest.req(): if set, timeout parameter should be positive or 0',
      );
    }
    timeout = $toUnsigned(timeout)!;
    if (!timeout) {
      timeout = this.defaultTimeOut;
    }
    let ret: any;
    let status = 0;
    let headers: RequestHeaders = {};
    const timeoutError = NGUniqueError.timeOutError();
    try {
      const response = await $timeOut(
        this.channel(config),
        timeout,
        timeoutError,
      );
      ret =
        responseType === 'arraybuffer'
          ? Buffer.from(response.data)
          : response.data;
      status = response.status;
      headers = response.headers as RequestHeaders;
    } catch (e: any) {
      if (
        e === timeoutError ||
        e.code === 'ECONNABORTED' ||
        e.code === 'ETIMEDOUT'
      ) {
        // AxiosError contains a 'code' field
        ret = null;
        status = Resp.TimeOut;
      } else if ($isNumber(e.statusCode)) {
        ret = null;
        status = e.statusCode;
      } else if ($isNumber(e.status)) {
        ret = null;
        status = e.status;
      } else {
        // all other errors must throw
        throw e;
      }
    }
    return {status: status, response: ret, headers: headers};
  }
}
