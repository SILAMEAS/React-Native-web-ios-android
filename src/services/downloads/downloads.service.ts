import {APIServer} from '@src/utils/classes/APIService';
import {
  APIHeaders,
  RequestHeaders,
} from '@src/utils/classes/interfaces/APIInterface';
import {API_VERSION} from '@src/config/env';
import {Resp, Verb} from '@src/utils/classes/interfaces/APIConstants';

export class DownloadsService extends APIServer {
  constructor(baseUrl: string, authentication?: APIHeaders | undefined) {
    super(baseUrl, authentication);
  }
  public async purgeDocument<T>(
    header?: RequestHeaders,
    timeOut?: number,
  ): Promise<T | undefined> {
    const data = await this.ngrequest<T>(
      `/api/v${API_VERSION}/downloads/purge`,
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
}
