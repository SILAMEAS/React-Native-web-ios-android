import {
  CertificateType,
  SignatureFormat,
  SignatureLevel,
} from '@src/utils/classes/interfaces/APIInterface';

export interface SignDocumentDevQueryString {
  'file-name': string;
  format: SignatureFormat;
  level: SignatureLevel;
  type1: SignatureFormat;
  certificate: CertificateType;
}
