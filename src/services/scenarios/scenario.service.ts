import {APIServer} from '@utils/classes/APIService';
import {
  APIHeaders,
  RequestHeaders,
} from '@utils/classes/interfaces/APIInterface';
import {Resp, Verb} from '@utils/classes/interfaces/APIConstants';
import {API_VERSION} from '@src/config/env';
import {CreateCertificateBody} from '@src/services/scenario';

export class ScenariosService extends APIServer {
  constructor(baseUrl: string, authentication?: APIHeaders | undefined) {
    super(baseUrl, authentication);
  }
  public async getScenarios<T>(
    urlOrId: string | number,
    header?: RequestHeaders,
    timeOut?: number,
  ): Promise<T | undefined> {
    const url = this.urlConvertor(
      urlOrId,
      undefined,
      'ScenarioService.getScenarios urlOrId must be' +
        ' typeof number or string',
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

  public async createScenario<T>(
    body: CreateCertificateBody,
    urlOrId: string | number,
    header?: RequestHeaders,
    timeOut?: number,
  ): Promise<T | undefined> {
    console.log('📗: Create Scenario');
    const url = this.urlConvertor(
      urlOrId,
      undefined,
      'ScenarioService.createScenario urlOrId must be' +
        ' typeof number or string',
    );

    const data = await this.ngrequest<T>(
      url,
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

  private urlConvertor(
    urlOrId: number | string,
    suffixUrl?: string,
    message?: string,
  ): string {
    switch (typeof urlOrId) {
      case 'number':
        return `/api/v${API_VERSION}/session/${urlOrId}/scenarios${
          suffixUrl ? '/' + suffixUrl : ''
        }`;
      case 'string':
        return urlOrId;
      default:
        throw new Error(message);
    }
  }
}
