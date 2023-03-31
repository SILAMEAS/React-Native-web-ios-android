import {APIServer} from '@src/utils/classes/APIService';
import {
  APIHeaders,
  RequestHeaders,
} from '@src/utils/classes/interfaces/APIInterface';
import {Resp, Verb} from '@src/utils/classes/interfaces/APIConstants';
import {API_VERSION} from '@src/config/env';

export class DocumentService extends APIServer {
  constructor(baseUrl: string, authentication?: APIHeaders | undefined) {
    super(baseUrl, authentication);
  }

  public async getDocumentById<T>(
    sessionId: number,
    documentId: number,
    header?: RequestHeaders,
    timeOut?: number,
  ): Promise<T | undefined> {
    const data = await this.ngrequest(
      `/api/v${API_VERSION}/session/${sessionId}/document/${documentId}`,
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

  public async getDocumentByUrl<T>(
    url: string,
    header?: RequestHeaders,
    timeOut?: number,
  ): Promise<T | undefined> {
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

  public async deleteDocumentById<T>(
    sessionId: number,
    documentId: number,
    header?: RequestHeaders,
    timeOut?: number,
  ): Promise<T | undefined> {
    const data = await this.ngrequest(
      `/api/v${API_VERSION}/session/${sessionId}/document/${documentId}`,
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

  public async deleteDocumentByUrl<T>(
    url: string,
    header?: RequestHeaders,
    timeOut?: number,
  ): Promise<T | undefined> {
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

  public async getCurrentDocumentById<T>(
    sessionId: number,
    documentId: number,
    header?: RequestHeaders,
    timeOut?: number,
  ): Promise<T | undefined> {
    console.log('📗: Current ID');
    const data = await this.ngrequest(
      `/api/v${API_VERSION}/session/${sessionId}/document/${documentId}/current`,
      Verb.Get,
      'json',
      [Resp.Created],
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

  public async getCurrentDocumentByUrl<T>(
    url: string,
    header?: RequestHeaders,
    timeOut?: number,
  ): Promise<T | undefined> {
    const data = await this.ngrequest(
      url,
      Verb.Get,
      'json',
      [Resp.Created],
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

  public async getGenuineDocumentById<T>(
    sessionId: number,
    documentId: number,
    header?: RequestHeaders,
    timeOut?: number,
  ): Promise<T | undefined> {
    console.log('📗: Genuine' + sessionId + '->' + documentId);
    const data = await this.ngrequest(
      `/api/v${API_VERSION}/session/${sessionId}/document/${documentId}/genuine`,
      Verb.Get,
      'json',
      [Resp.Created],
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

  public async getGenuineDocumentByUrl<T>(
    url: string,
    header?: RequestHeaders,
    timeOut?: number,
  ): Promise<T | undefined> {
    const data = await this.ngrequest(
      url,
      Verb.Get,
      'json',
      [Resp.Created],
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
