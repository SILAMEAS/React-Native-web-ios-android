import {APIServer} from '@src/utils/classes/APIService';
import {
  APIHeaders,
  RequestHeaders,
} from '@src/utils/classes/interfaces/APIInterface';
import {API_VERSION} from '@src/config/env';
import {Resp, Verb} from '@src/utils/classes/interfaces/APIConstants';
import {QueryString} from '@src/services/type';
import {SignDocumentDevQueryString} from '@src/services/dev/type';
import {urlFormat} from '@src/services/utils';

export class DevService extends APIServer {
  constructor(baseUrl: string, authentication?: APIHeaders | undefined) {
    super(baseUrl, authentication);
  }

  public async ping<T>(
    header?: RequestHeaders,
    timeOut?: number,
  ): Promise<T | undefined> {
    const data = await this.ngrequest<T>(
      `/api/v${API_VERSION}/dev/ping`,
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
  public async checkCertificationGenerationStatus<T>(
    header?: RequestHeaders,
    timeOut?: number,
  ): Promise<T | undefined> {
    const data = await this.ngrequest<T>(
      `/api/v${API_VERSION}/dev/check-certification-generation-status`,
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

  public async signDocument<T>(
    queryString?: QueryString<SignDocumentDevQueryString>,
    header?: RequestHeaders,
    timeOut?: number,
  ): Promise<T | undefined> {
    const url = urlFormat(`/api/v${API_VERSION}/sign-document`, queryString);
    const data = await this.ngrequest<T>(
      url,
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

  public async uploadVerify<T>(
    urlOrId: number | string,
    header?: RequestHeaders,
    timeOut?: number,
  ): Promise<T | undefined> {
    const url = this.urlConvertor(urlOrId);
    const data = await this.ngrequest<T>(
      url,
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

  private urlConvertor(
    urlOrId: number | string,
    suffixUrl?: string,
    message?: string,
  ): string {
    switch (typeof urlOrId) {
      case 'number':
        return `/api/v${API_VERSION}/dev/upload-verif/${urlOrId}${
          suffixUrl ? '/' + suffixUrl : ''
        }`;
      case 'string':
        return urlOrId;
      default:
        throw new Error(message);
    }
  }
}
