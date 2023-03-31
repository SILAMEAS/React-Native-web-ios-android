import {
  APIHeaders,
  RequestHeaders,
} from '@utils/classes/interfaces/APIInterface';
import {APIServer} from '@utils/classes/APIService';
import {Resp, Verb} from '@utils/classes/interfaces/APIConstants';
import {API_VERSION} from '@src/config/env';
import {CreateSessionBody} from '.';
import {QueryString} from '@src/services/type';
import {SessionQueryString} from '@src/services/sessions/type';
import {urlFormat} from '../utils';
export class SessionsService extends APIServer {
  constructor(baseUrl: string, authentication?: APIHeaders | undefined) {
    super(baseUrl, authentication);
  }

  public async getSessions<T>(
    queryString: QueryString<SessionQueryString>,
    header?: RequestHeaders,
    timeOut?: number,
  ): Promise<T | undefined> {
    console.log('📗: Getting session');
    const url = urlFormat(`/api/v${API_VERSION}/sessions`, queryString);
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
    // console.log(data);
    return !data ? undefined : (data as T);
  }

  public async createSession<T>(
    body: CreateSessionBody,
    header?: RequestHeaders,
    timeOut?: number,
  ): Promise<T | undefined> {
    console.log('📗: create session');
    const data = await this.ngrequest<T>(
      `/api/v${API_VERSION}/sessions`,
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
}
