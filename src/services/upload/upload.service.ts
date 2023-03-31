import {APIServer} from '@src/utils/classes/APIService';
import {
  APIHeaders,
  RequestHeaders,
} from '@src/utils/classes/interfaces/APIInterface';
import {Resp, Verb} from '@src/utils/classes/interfaces/APIConstants';
import {API_VERSION} from '@src/config/env';

export class UploadService extends APIServer {
  constructor(baseUrl: string, authentication?: APIHeaders | undefined) {
    super(baseUrl, authentication);
  }

  public async deleteUpload<T>(
    urlOrId: number | string,
    header?: RequestHeaders,
    timeOut?: number,
  ): Promise<T | undefined> {
    const url = this.urlConvertor(
      urlOrId,
      undefined,
      "UploadService.deleteUpload parameter 'urlOrId' has to be either type number string",
    );
    const data = await this.ngrequest<T>(
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
