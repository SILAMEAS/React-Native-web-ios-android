import {Dictionary} from '@utils/commons/type';
import {ManifestData} from '@src/services/type';

export interface DocumentSession {
  id: number;
  title: string;
  fileName: string;
  abstract: string;
  genuineFileId: number;
  url: string;
}

export interface CreateDocument {
  'user-data': Dictionary;
  abstract: string;
  'file-name': string;
  title: string;
  upload: string;
  'manifest-data': ManifestData;
}
