import {$count, $ok} from '../commons';
import {Nullable} from '../commons/type';
import {Resp} from './interfaces/APIConstants';
import {
  APIHeaders,
  OtherCommonAxiosEvent,
  RequestHeaders,
  ResponseType,
} from './interfaces/APIInterface';
import {NGRequest} from './NGResquest';

export class APIServer extends NGRequest {
  static DEFAULT_TIMEOUT = 8000;

  public readonly authentication?: APIHeaders;
  public constructor(baseURL: string, authentication?: APIHeaders) {
    super(baseURL, {
      timeout: APIServer.DEFAULT_TIMEOUT,
    });

    this.authentication = authentication;
  }

  public async ngrequest<T = any>(
    relativeURL: string,
    method?: string,
    responseType?: ResponseType,
    statuses?: number[],
    body?: Nullable<object>,
    suplHeaders?: RequestHeaders,
    timeout?: number,
    otherCommonAxiosEvent?: OtherCommonAxiosEvent,
  ): Promise<T | null> {
    suplHeaders = $ok(suplHeaders)
      ? {...this.authentication, ...suplHeaders}
      : {...this.authentication};
    statuses = $count(statuses) ? statuses! : [Resp.OK];
    const resp = await this.req(
      relativeURL,
      method,
      responseType,
      body,
      suplHeaders,
      timeout,
      otherCommonAxiosEvent,
    );
    console.log(resp);
    return statuses.includes(resp.status) && $ok(resp.response)
      ? (resp.response as T)
      : null;
  }
}
