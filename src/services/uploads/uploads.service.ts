import {APIServer} from '@src/utils/classes/APIService';
import {
  APIHeaders,
  RequestHeaders,
} from '@src/utils/classes/interfaces/APIInterface';
import {Resp, Verb} from '@src/utils/classes/interfaces/APIConstants';
import {API_VERSION} from '@src/config/env';
import {QueryString} from '@src/services/type';

export class UploadsService extends APIServer {
  constructor(baseUrl: string, authentication?: APIHeaders | undefined) {
    super(baseUrl, authentication);
  }

  public async getUploads<T>(
    header?: RequestHeaders,
    timeOut?: number,
  ): Promise<T | undefined> {
    const data = await this.ngrequest<T>(
      `/api/v${API_VERSION}/uploads`,
      Verb.Get,
      'json',
      [Resp.OK],
      undefined,
      {
        DefaultLanguage: 'fr',
        Accept: 'application/json',
        Certignarole: 2,
        ...header,
      },
      timeOut,
    );
    return !data ? undefined : (data as T);
  }

  public async upload<T>(
    body: ArrayBuffer,
    header?: RequestHeaders,
    timeOut?: number,
  ): Promise<T | undefined> {
    console.log('📗: Uploading');
    const data = await this.ngrequest<T>(
      `/api/v${API_VERSION}/uploads`,
      Verb.Post,
      'json',
      [Resp.Created],
      body,
      {
        DefaultLanguage: 'fr',
        Accept: 'application/json',
        Certignarole: 2,
        ...header,
      },
      timeOut,
    );
    console.log(data);
    return !data ? undefined : (data as T);
  }

  public async purgeUpload<T>(
    header?: RequestHeaders,
    timeOut?: number,
  ): Promise<T | undefined> {
    const data = await this.ngrequest<T>(
      `/api/v${API_VERSION}/uploads/purge`,
      Verb.Post,
      'json',
      [Resp.OK],
      undefined,
      {
        DefaultLanguage: 'fr',
        Accept: 'application/json',
        Certignarole: 2,
        ...header,
      },
      timeOut,
    );
    return !data ? undefined : (data as T);
  }

  public async getAcceptedExtensions<T>(
    queryString?: QueryString<'all' | 'signing'>,
    header?: RequestHeaders,
    timeOut?: number,
  ): Promise<T | undefined> {
    const data = await this.ngrequest<T>(
      `/api/v${API_VERSION}/uploads/accepted-extensions?type=${
        queryString ?? 'all'
      }`,
      Verb.Get,
      'json',
      [Resp.OK],
      undefined,
      {
        DefaultLanguage: 'fr',
        Accept: 'application/json',
        Certignarole: 2,
        ...header,
      },
      timeOut,
    );
    return !data ? undefined : (data as T);
  }
}
