import {
  SignatureFormat,
  SignatureLevel,
  SignatureType,
  SigningProcess,
} from '@utils/classes/interfaces/APIInterface';

export interface type_Session {
  id: number;
  status: number;
  ttl: number;
  date: string;
  expires: string;
  actors: [];
  documents: [];
  scenarios: [];
}
export interface Type_actor {
  id?: number;
  date?: string;
  aid?: number;
  name?: string;
  type?: number;
  roles?: string[];
  'adm-id'?: string;
  'first-name'?: string;
  country?: string;
  login?: string;
  email?: string;
  mobile?: string;
  'manifest-data'?: {};
  'user-data'?: {};
}
export interface type_File {
  did: number;
  status: number;
  abstract: string;
  'file-name': string;
  date: string;
  expires: string;
  title: string;
}
export interface type_approve_doc {
  otp: string;
  signatures: [
    {
      actor: string;
      document: string;
      tag: string;
      signatureId: string;
    },
  ];
  threadId: string;
}
export interface type_cgu {
  actor: string;
  authority: string;
  'download-url': string;
  session: string;
  token: string;
  version: string;
}
export interface type_certificate {
  date: string;
  expires: string;
  url: string;
}
export interface type_signature {
  signatures: [
    {tag: string; signatureId: string; actor: string; document: string},
  ];
  threadId: string;
  token: string;
}
///==============NEW
export interface type_forSign {
  Actor: string | undefined;
  Document: string | undefined;
  IdSession: string | undefined;
  Certificate: string | undefined;
}
export interface TypeScenario {
  documents?: string[];
  steps: Step[];
  level: SignatureLevel;
  format: SignatureFormat;
}
export interface Step {
  process: SigningProcess;
  steps: string[];
  cardinality: number | 'one' | 'all';
  signatureType?: SignatureType;
}
export interface Type3Doc {
  IsSimple: boolean;
  IsManifest: boolean;
  IsOnTheFly: boolean;
}
