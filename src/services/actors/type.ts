import {ManifestData, UserData} from '@src/services/type';

export interface CreateActorBody {
  'user-data': UserData;
  'adm-id': string;
  country: string;
  email: string;
  'first-name': string;
  login: string;
  mobile: string;
  name: string;
  type: number;
  roles: string[];
  'manifest-data': ManifestData;
}
