import {APIServer} from '@src/utils/classes/APIService';
import {
  APIHeaders,
  RequestHeaders,
} from '@utils/classes/interfaces/APIInterface';
import {Resp, Verb} from '@utils/classes/interfaces/APIConstants';
import {API_VERSION} from '@src/config/env';

export class ActorService extends APIServer {
  constructor(baseUrl: string, authentication?: APIHeaders | undefined) {
    super(baseUrl, authentication);
  }

  public async getActor<T>(
    sessionId?: number,
    actorId?: number,
    url?: string,
    header?: RequestHeaders,
    timeOut?: number,
  ): Promise<T | undefined> {
    console.log('📗: get Actor');
    if (!sessionId && !actorId && !url) {
      throw new Error(
        "ActorService.getActor 'sessionId && actorId' & 'url' has to have either of these",
      );
    } else if ((!sessionId || !actorId) && !url) {
      throw new Error(
        "ActorService.getActor if provide ids 'sessionId && actorId' has to have both of these",
      );
    } else {
      const completeUrl =
        sessionId && actorId
          ? `/api/v${API_VERSION}/${sessionId}/actor/${actorId}`
          : url!;

      const data = await this.ngrequest<T>(
        completeUrl,
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
  }

  public async deleteActor<T>(
    sessionId?: number,
    actorId?: number,
    url?: string,
    header?: RequestHeaders,
    timeOut?: number,
  ): Promise<T | undefined> {
    console.log('📗: Delete Actor');
    if (!sessionId && !actorId && !url) {
      throw new Error(
        "ActorService.deleteActor 'sessionId && actorId' & 'url' has to have either of these",
      );
    }
    if (!sessionId && !actorId) {
      throw new Error(
        "ActorService.deleteActor if provide ids 'sessionId && actorId' has to have both of these",
      );
    }

    const completeUrl =
      sessionId && actorId
        ? `/api/v${API_VERSION}/${sessionId}/actor/${actorId}`
        : url!;
    const data = await this.ngrequest<T>(
      completeUrl,
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
    console.log(data);
    return !data ? undefined : (data as T);
  }
}
