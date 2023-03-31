import {AxiosProgressEvent} from 'axios';
import {AcceptedLanguages, UserRole} from './APIConstants';

export interface APIHeaders {
  defaultlanguage?: AcceptedLanguages;
  certignarole: UserRole;
  certignahash: string;
  certignauser: string;
}
export declare const NO_BODY: undefined;
export declare const NO_HEADERS: {};
export type RequestHeaders = {
  [key: string]: string | string[] | number;
};
export interface TSResponse {
  status: number;
  response: Buffer | object | string | ReadableStream | null;
  headers: RequestHeaders;
}
export interface TSRequestOptions {
  headers?: RequestHeaders;
  timeout?: number;
  managesCredentials?: boolean;
}

export type ResponseType =
  | 'arraybuffer'
  | 'blob'
  | 'document'
  | 'json'
  | 'text'
  | 'stream';

export interface OtherCommonAxiosEvent {
  onUploadProgress?: (progressEvent: AxiosProgressEvent) => void;
  onDownloadProgress?: (progressEvent: AxiosProgressEvent) => void;
  beforeRedirect?: (
    options: Record<string, any>,
    responseDetails: {headers: Record<string, string>},
  ) => void;
}

export enum SigningProcess {
  Approval = 'approval',
  Sign = 'sign',
  Cosign = 'cosign',
  Countersign = 'countersign',
  OrderedCosign = 'ordered-cosign',
  IndividualSign = 'individual-sign',
  To = 'to',
  Cc = 'cc',
  Legal = 'legal',
  Comm = 'comm',
  Tech = 'tech',
  Head = 'head',
}

export enum SignatureFormat {
  PAdES = 1,
  XAdES = 2,
  CAdES = 3,
}

export enum SignatureLevel {
  B = 1,
  T = 2,
  LT = 3,
  LTA = 4,
}

export enum SignatureLevelTag {
  B = 'B',
  T = 'T',
  LT = 'LT',
  LTA = 'LTA',
}

export enum RoleType {
  Approval,
  Signature,
  Expedition,
}
export enum SignatureType {
  Envelopped = 1,
  Envelopping = 2,
  Detached = 3,
}

export enum CertificateType {
  generate = 'generate',
  server = 'server',
  'test-parameters' = 'test-parameters',
}
