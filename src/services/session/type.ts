import {Dictionary} from '@utils/commons/type';

export interface DetailForDownloadFile {
  url: string;
  date: Date;
  expires: Date;
}

export interface ForceToCloseSessionBody {
  'manifest-data': object;
  reason: string;
  force: boolean;
}

export interface ExtendSessionBody {
  ttl: number;
}

export interface GenerateOtpBody {
  documents: string[];
  actor: string;
  length: number;
  numeric: boolean;
  ttl?: 600;
  tag: string;
}

export interface CheckOtpBody {
  actor: string;
  otp: string;
  tag: string;
  delete: boolean;
}

export interface ApproveDocumentBody {
  documents: string[];
  'manifest-data'?: Dictionary;
  actor: string;
  otp: string;
  tag: string;
}

export interface SignDocumentBody {
  'manifest-data'?: Dictionary;
  certificate: string;
  documents: any;
  actor: string;
  otp?: string;
  tag: string;
  signMode: string;
}
export interface SessionResponse {
  url: string;
  expires: Date;
  date: Date;
}
