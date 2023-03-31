import {Resp, Verb} from '@src/utils/classes/interfaces/APIConstants';
import {
  APIHeaders,
  RequestHeaders,
} from '@src/utils/classes/interfaces/APIInterface';
import {APIServer} from '@src/utils/classes/APIService';
import {
  CheckOtpBody,
  ExtendSessionBody,
  ForceToCloseSessionBody,
  GenerateOtpBody,
  ApproveDocumentBody,
  SignDocumentBody,
} from '.';
import {API_VERSION} from '@src/config/env';

export class SessionService extends APIServer {
  constructor(baseUrl: string, authentication?: APIHeaders | undefined) {
    super(baseUrl, authentication);
  }

  public async closeSession<T>(
    urlOrId: string | number,
    body: ForceToCloseSessionBody,
    header?: RequestHeaders,
    timeOut?: number,
  ): Promise<T | undefined> {
    console.log('📗: Close Session');
    const url = this.urlConvertor(
      urlOrId,
      'close',
      "SessionService.closeSession parameter 'urlOrId' has to be either type number string",
    );
    console.log(url);
    const data = await this.ngrequest<{status: number}>(
      url,
      Verb.Put,
      'json',
      [Resp.OK, Resp.Created],
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

  public async getSession<T>(
    urlOrId: string | number,
    header?: RequestHeaders,
    timeOut?: number,
  ): Promise<T | undefined> {
    console.log('📗: get Session');
    const url = this.urlConvertor(
      urlOrId,
      undefined,
      "SessionService.getSession parameter 'urlOrId' has to be either type number string",
    );
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
    console.log(data);
    return !data ? undefined : (data as T);
  }

  public async extendSession<T>(
    urlOrId: string | number,
    body: ExtendSessionBody,
    header?: RequestHeaders,
    timeOut?: number,
  ): Promise<T | undefined> {
    const url = this.urlConvertor(
      urlOrId,
      'extendSession',
      "SessionService.extendSession parameter 'urlOrId' has to be either type number string",
    );
    const data = await this.ngrequest<T>(
      url,
      Verb.Put,
      'json',
      [Resp.OK],
      body,
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

  public async getManifest<T>(
    urlOrId: string | number,
    header?: RequestHeaders,
    timeOut?: number,
  ): Promise<T | undefined> {
    console.log('📗: Get Manifest');
    const url = this.urlConvertor(
      urlOrId,
      'manifest',
      "SessionService.getManifest parameter 'urlOrId' has to be either type number string",
    );
    const data = await this.ngrequest<T>(
      url,
      Verb.Get,
      'json',
      [Resp.Created, Resp.OK],
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

  public async generateOtp<T>(
    urlOrId: string | number,
    body: GenerateOtpBody,
    header?: RequestHeaders,
    timeOut?: number,
  ): Promise<T | undefined> {
    const url = this.urlConvertor(
      urlOrId,
      'generate-opt',
      "SessionService.generateOtp parameter 'urlOrId' has to be either type number string",
    );
    console.log('📗: Generating OTP');

    const data = await this.ngrequest<T>(
      url,
      Verb.Put,
      'json',
      [Resp.OK],
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

  public async checkOtp<T>(
    urlOrId: string | number,
    body: CheckOtpBody,
    header?: RequestHeaders,
    timeOut?: number,
  ): Promise<T | undefined> {
    const url = this.urlConvertor(
      urlOrId,
      'check-opt',
      "SessionService.checkOtp parameter 'urlOrId' has to be either type number string",
    );
    const data = await this.ngrequest<T>(
      url,
      Verb.Put,
      'json',
      [Resp.OK],
      body,
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

  public async approveDocument<T>(
    urlOrId: string | number,
    body: ApproveDocumentBody,
    header?: RequestHeaders,
    timeOut?: number,
  ): Promise<T | undefined> {
    console.log('📗: Approve document');
    const url = this.urlConvertor(
      urlOrId,
      'approve-document',
      "SessionService.approveDocument parameter 'urlOrId' has to be either type number string",
    );
    const data = await this.ngrequest<T>(
      url,
      Verb.Put,
      'json',
      [Resp.OK],
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

  public async signDocument<T>(
    urlOrId: string | number,
    body: SignDocumentBody,
    header?: RequestHeaders,
    timeOut: number = 10000,
  ): Promise<T | undefined> {
    console.log('📗: SignDocument');
    const url = this.urlConvertor(
      urlOrId,
      'sign-documents',
      "SessionService.signDocument parameter 'urlOrId' has to be either type number string",
    );
    const data = await this.ngrequest<T>(
      url,
      Verb.Put,
      'json',
      [Resp.OK, Resp.Created],
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

  private urlConvertor(
    urlOrId: number | string,
    suffixUrl?: string,
    message?: string,
  ): string {
    switch (typeof urlOrId) {
      case 'number':
        return `/api/v${API_VERSION}/session/${urlOrId}${
          suffixUrl ? '/' + suffixUrl : ''
        }`;
      case 'string':
        return urlOrId;
      default:
        throw new Error(message);
    }
  }
}
