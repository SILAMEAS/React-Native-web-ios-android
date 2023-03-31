import {APIServer} from '@src/utils/classes/APIService';
import {
  APIHeaders,
  RequestHeaders,
} from '@src/utils/classes/interfaces/APIInterface';
import {API_VERSION} from '@src/config/env';
import {Resp, Verb} from '@src/utils/classes/interfaces/APIConstants';
import {CreateActorBody} from '@src/services/actors/type';
import {urlFormat} from '@src/services/utils';
import {QueryString} from '@src/services/type';

export class ActorsService extends APIServer {
  constructor(baseUrl: string, authentication?: APIHeaders | undefined) {
    super(baseUrl, authentication);
  }

  public async getActors<T>(
    sessionId?: number,
    url?: string,
    queryString?: QueryString<{tags: string[] | string}>,
    header?: RequestHeaders,
    timeOut?: number,
  ): Promise<T | undefined> {
    if (!sessionId && !url) {
      throw new Error(
        "ActorService.getActor 'sessionId && url' has to have either of these",
      );
    }
    const completeUrl = sessionId
      ? `/api/v${API_VERSION}/${sessionId}/actors`
      : url!;
    const formatUrl = urlFormat(completeUrl, queryString);
    const data = await this.ngrequest<T>(
      formatUrl,
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

  public async createActor<T>(
    body: CreateActorBody,
    sessionId?: number,
    url?: string,
    header?: RequestHeaders,
    timeOut?: number,
  ): Promise<T | undefined> {
    console.log('📗: Add actor');

    if (!sessionId && !url) {
      throw new Error(
        "ActorService.createActor 'sessionId && url' has to have either of these",
      );
    }

    const completeUrl = sessionId
      ? `/api/v${API_VERSION}/${sessionId}/actors`
      : url!;
    const data = await this.ngrequest<T>(
      completeUrl,
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
