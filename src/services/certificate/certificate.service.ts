import {APIServer} from '@src/utils/classes/APIService';
import {
  APIHeaders,
  RequestHeaders,
} from '@src/utils/classes/interfaces/APIInterface';
import {Resp, Verb} from '@utils/classes/interfaces/APIConstants';
import {API_VERSION} from '@src/config/env';

export class CertificateService extends APIServer {
  constructor(baseUrl: string, authentication?: APIHeaders | undefined) {
    super(baseUrl, authentication);
  }

  public async getCertificate<T>(
    sessionId?: number,
    certificateId?: number,
    url?: string,
    header?: RequestHeaders,
    timeOut?: number,
  ): Promise<T | undefined> {
    if ((sessionId && !certificateId) || (!sessionId && certificateId)) {
      throw new Error(
        'CertificateService.getCertificate if provide ids' +
          " 'sessionId" +
          " && certificateId' has to have both of these",
      );
    }

    if (!sessionId && !certificateId && url) {
      throw new Error(
        'CertificateService.getCertificate if not provide ids' +
          " 'sessionId" +
          " && certificateId'. 'url' must have",
      );
    }

    const completeUrl =
      sessionId && certificateId
        ? `/api/v${API_VERSION}/${sessionId}/certificate/${certificateId}`
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
    return !data ? undefined : (data as T);
  }

  public async deleteCertificate<T>(
    sessionId?: number,
    certificateId?: number,
    url?: string,
    header?: RequestHeaders,
    timeOut?: number,
  ): Promise<T | undefined> {
    if ((sessionId && !certificateId) || (!sessionId && certificateId)) {
      throw new Error(
        'CertificateService.deleteCertificate if provide ids' +
          " 'sessionId" +
          " && actorId' has to have both of these",
      );
    }

    if (!sessionId && !certificateId && url) {
      throw new Error(
        'CertificateService.deleteCertificate if not provide ids' +
          " 'sessionId" +
          " && actorId'. 'url' must have",
      );
    }

    const completeUrl =
      sessionId && certificateId
        ? `/api/v${API_VERSION}/${sessionId}/certificate/${certificateId}`
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
    return !data ? undefined : (data as T);
  }
}
