import {APIServer} from '@src/utils/classes/APIService';
import {
  APIHeaders,
  RequestHeaders,
} from '@src/utils/classes/interfaces/APIInterface';
import {API_VERSION} from '@src/config/env';
import {Resp, Verb} from '@utils/classes/interfaces/APIConstants';

export class CaService extends APIServer {
  constructor(baseUrl: string, authentication?: APIHeaders | undefined) {
    super(baseUrl, authentication);
  }

  public async getCa<T>(
    urlOrId: number | string,
    header?: RequestHeaders,
    timeOut?: number,
  ): Promise<T | undefined> {
    const url = this.urlConvertor(
      urlOrId,
      undefined,
      "CaService.getCa parameter 'urlOrId' has to be either type number string",
    );
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

  public async getGcu<T>(
    urlOrId: number | string,
    header?: RequestHeaders,
    timeOut?: number,
  ): Promise<T | undefined> {
    console.log('📗: Get Gcu');
    const url = this.urlConvertor(
      urlOrId,
      'cgu',
      "CaService.getGcu parameter 'urlOrId' has to be either type number string",
    );
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
    console.log(data);
    return !data ? undefined : (data as T);
  }

  private urlConvertor(
    urlOrId: number | string,
    suffixUrl?: string,
    message?: string,
  ): string {
    switch (typeof urlOrId) {
      case 'number':
        return `/api/v${API_VERSION}/upload/${urlOrId}${
          suffixUrl ? '/' + suffixUrl : ''
        }`;
      case 'string':
        return urlOrId;
      default:
        throw new Error(message);
    }
  }
}
