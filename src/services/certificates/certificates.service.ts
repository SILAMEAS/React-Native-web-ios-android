import {APIServer} from '@src/utils/classes/APIService';
import {
  APIHeaders,
  RequestHeaders,
} from '@src/utils/classes/interfaces/APIInterface';
import {Resp, Verb} from '@src/utils/classes/interfaces/APIConstants';
import {API_VERSION} from '@src/config/env';
import {QueryString} from '@src/services/type';
import {urlFormat} from '@src/services/utils';
import {CreateCertificateBody} from '@src/services/certificates/type';

export class CertificatesService extends APIServer {
  constructor(baseUrl: string, authentication?: APIHeaders | undefined) {
    super(baseUrl, authentication);
  }

  public async getCertificates<T>(
    sessionId?: number,
    url?: string,
    queryString?: QueryString<{
      caid: string | number;
      actorids: string[] | number[];
    }>,
    header?: RequestHeaders,
    timeOut?: number,
  ): Promise<T | undefined> {
    if (!sessionId && !url) {
      throw new Error(
        "CertificatesService.getCertificates 'sessionId && url' has to have either one of these",
      );
    }

    const completeUrl = sessionId
      ? `/api/v${API_VERSION}/${sessionId}/certificates`
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

  public async createCertificate<T>(
    body: CreateCertificateBody,
    sessionId?: number,
    url?: string,
    header?: RequestHeaders,
    timeOut?: number,
  ): Promise<T | undefined> {
    console.log('📗: Generate Certificate');
    if (!sessionId && !url) {
      throw new Error(
        "CertificatesService.getCertificates 'sessionId && url' has to have either one of these",
      );
    }

    const completeUrl = sessionId
      ? `/api/v${API_VERSION}/${sessionId}/certificates`
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
