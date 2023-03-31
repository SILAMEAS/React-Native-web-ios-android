import {APIServer} from '@src/utils/classes/APIService';
import {
  APIHeaders,
  RequestHeaders,
} from '@src/utils/classes/interfaces/APIInterface';
import {CreateDocument, DocumentSession} from '@src/services/documents';
import {API_VERSION} from '@src/config/env';
import {Resp, Verb} from '@src/utils/classes/interfaces/APIConstants';

export class DocumentsService extends APIServer {
  constructor(baseUrl: string, authentication?: APIHeaders | undefined) {
    super(baseUrl, authentication);
  }

  public async getDocumentSessions(
    sessionIdOrUrl: number | string,
    header?: RequestHeaders,
    timeOut?: number,
  ): Promise<DocumentSession[]> {
    const url = this.urlConvertor(
      sessionIdOrUrl,
      "DocumentsService.getDocumentSessions parameter 'sessionIdOrUrl' has to be either type number string",
    );
    const data = await this.ngrequest<DocumentSession[]>(
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
    return !data ? [] : data;
  }

  public async createDocument<T>(
    sessionIdOrUrl: number | string,
    body: CreateDocument,
    header?: RequestHeaders,
    timeOut?: number,
  ): Promise<T | undefined> {
    console.log('📗: Document uploading to session');

    const url = this.urlConvertor(
      sessionIdOrUrl,
      "DocumentsService.createDocument parameter 'sessionIdOrUrl' has to be either type number string",
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

  private urlConvertor(urlOrId: number | string, message?: string): string {
    switch (typeof urlOrId) {
      case 'number':
        return `/api/v${API_VERSION}/session/${urlOrId}/documents`;
      case 'string':
        return urlOrId;
      default:
        throw new Error(message);
    }
  }
}
