import {APIServer} from '@src/utils/classes/APIService';
import {
  APIHeaders,
  RequestHeaders,
} from '@src/utils/classes/interfaces/APIInterface';
import {API_VERSION} from '@src/config/env';
import {Resp, Verb} from '@src/utils/classes/interfaces/APIConstants';
import {encode} from '@src/utils/base64_arraybuffer';

export class DownloadService extends APIServer {
  constructor(baseUrl: string, authentication?: APIHeaders | undefined) {
    super(baseUrl, authentication);
  }
  public async getContentDocumentSession(
    urlOrId: number | string,
    header?: RequestHeaders,
    timeOut?: number,
  ) {
    console.log('📗: Downloading');

    const url = this.urlConvertor(
      urlOrId,
      "DownloadService.getContentDocumentSession parameter 'sessionIdOrUrl' has to be either type number string",
    );
    const buffer = await this.ngrequest(
      url,
      Verb.Get,
      'arraybuffer',
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
    console.log(encode(buffer));
    return encode(buffer);
  }

  private urlConvertor(urlOrId: number | string, message?: string): string {
    switch (typeof urlOrId) {
      case 'number':
        return `/api/v${API_VERSION}/download/${urlOrId}`;
      case 'string':
        return urlOrId;
      default:
        throw new Error(message);
    }
  }
}
