export interface CreateCertificateBody {
  actor: string;
  authority: string;
  token: string;
  ttl: number;
  'supporting-documents'?: SupportingDocuments;
}

export interface SupportingDocuments {
  filename: string;
  url: string;
}
