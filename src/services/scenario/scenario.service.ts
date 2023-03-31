import {APIServer} from '@utils/classes/APIService';
import {
  APIHeaders,
  RequestHeaders,
} from '@utils/classes/interfaces/APIInterface';
import {API_VERSION} from '@src/config/env';
import {Resp, Verb} from '@utils/classes/interfaces/APIConstants';
import {
  CancelScenarioBody,
  CreateCertificateBody,
  ManifestDataBody,
  SplitScenarioBody,
} from '@src/services/scenario/type';

export class ScenarioService extends APIServer {
  constructor(baseUrl: string, authentication?: APIHeaders | undefined) {
    super(baseUrl, authentication);
  }

  public async getScenario<T>(
    urlOrId: string | number,
    sessionId?: number,
    header?: RequestHeaders,
    timeOut?: number,
  ): Promise<T | undefined> {
    if (typeof urlOrId === 'number' && !sessionId) {
      throw new Error(
        'ScenarioService.getScenario urlOrId is number, so' +
          ' sessionId must be provide.',
      );
    }
    const url = this.urlConvertor(
      urlOrId,
      sessionId,
      undefined,
      'ScenarioService.getScenario urlOrId must be' +
        ' typeof number or string',
    );

    const data = await this.ngrequest(
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

  public async updateScenario<T>(
    body: CreateCertificateBody,
    urlOrId: string | number,
    sessionId?: number,
    header?: RequestHeaders,
    timeOut?: number,
  ): Promise<T | undefined> {
    if (typeof urlOrId === 'number' && !sessionId) {
      throw new Error(
        'ScenarioService.updateScenario urlOrId is number, so' +
          ' sessionId must be provide.',
      );
    }
    const url = this.urlConvertor(
      urlOrId,
      sessionId,
      undefined,
      'ScenarioService.updateScenario urlOrId must be' +
        ' typeof number or string',
    );

    const data = await this.ngrequest(
      url,
      Verb.Patch,
      'json',
      [Resp.OK],
      body,
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

  public async deleteScenario<T>(
    urlOrId: string | number,
    sessionId?: number,
    header?: RequestHeaders,
    timeOut?: number,
  ): Promise<T | undefined> {
    if (typeof urlOrId === 'number' && !sessionId) {
      throw new Error(
        'ScenarioService.deleteScenario urlOrId is number, so' +
          ' sessionId must be provide.',
      );
    }
    const url = this.urlConvertor(
      urlOrId,
      sessionId,
      undefined,
      'ScenarioService.deleteScenario urlOrId must be' +
        ' typeof number or string',
    );

    const data = await this.ngrequest(
      url,
      Verb.Delete,
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

  //ManifestDataBody
  public async activateScenario<T>(
    body: ManifestDataBody,
    urlOrId: string | number,
    sessionId?: number,
    header?: RequestHeaders,
    timeOut?: number,
  ): Promise<T | undefined> {
    console.log('📗: Active scenario');

    if (typeof urlOrId === 'number' && !sessionId) {
      throw new Error(
        'ScenarioService.activateScenario urlOrId is number, so' +
          ' sessionId must be provide.',
      );
    }
    const url = this.urlConvertor(
      urlOrId,
      sessionId,
      undefined,
      'ScenarioService.activateScenario urlOrId must be' +
        ' typeof number or string',
    );

    const data = await this.ngrequest(
      url,
      Verb.Put,
      'json',
      [Resp.OK],
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

  public async cancelScenario<T>(
    body: CancelScenarioBody,
    urlOrId: string | number,
    sessionId?: number,
    header?: RequestHeaders,
    timeOut?: number,
  ): Promise<T | undefined> {
    if (typeof urlOrId === 'number' && !sessionId) {
      throw new Error(
        'ScenarioService.cancelScenario urlOrId is number, so' +
          ' sessionId must be provide.',
      );
    }
    const url = this.urlConvertor(
      urlOrId,
      sessionId,
      undefined,
      'ScenarioService.cancelScenario urlOrId must be' +
        ' typeof number or string',
    );

    const data = await this.ngrequest(
      url,
      Verb.Put,
      'json',
      [Resp.OK],
      body,
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

  public async splitScenario<T>(
    body: SplitScenarioBody,
    urlOrId: string | number,
    sessionId?: number,
    header?: RequestHeaders,
    timeOut?: number,
  ): Promise<T | undefined> {
    if (typeof urlOrId === 'number' && !sessionId) {
      throw new Error(
        'ScenarioService.splitScenario urlOrId is number, so' +
          ' sessionId must be provide.',
      );
    }
    const url = this.urlConvertor(
      urlOrId,
      sessionId,
      undefined,
      'ScenarioService.splitScenario urlOrId must be' +
        ' typeof number or string',
    );

    const data = await this.ngrequest(
      url,
      Verb.Put,
      'json',
      [Resp.OK],
      body,
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
    sessionId?: number,
    suffixUrl?: string,
    message?: string,
  ): string {
    switch (typeof urlOrId) {
      case 'number':
        return `/api/v${API_VERSION}/session/${sessionId}/scenario/${urlOrId}${
          suffixUrl ? '/' + suffixUrl : ''
        }`;
      case 'string':
        return urlOrId;
      default:
        throw new Error(message);
    }
  }
}
