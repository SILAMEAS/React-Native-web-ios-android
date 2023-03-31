import {Dictionary} from '@src/utils/commons/type';

export interface SessionQueryString {
  ttlmin?: number;
  ttlmax?: number;
  dynttlmin?: number;
  dynttlmax?: number;
  userids?: number[];
  page?: number;
  pageSize?: number;
  expirationstatus?: 'all' | 'expired' | 'valid';
  status_mask?: string;
}

export interface CreateSessionBody {
  'user-data': Dictionary;
  ttl: number;
}
export interface SessionsResponse {
  sessions: string[];
}
