import {ManifestData, UserData} from '../type';
import {
  SignatureFormat,
  SignatureLevel,
  SignatureType,
} from '@src/utils/classes/interfaces/APIInterface';

export interface CreateCertificateBody {
  documents: string[];
  'user-data'?: UserData;
  format: SignatureFormat;
  level: SignatureLevel;
  steps: Step[];
}

export interface Step {
  process: string;
  steps: string[];
  signatureType?: SignatureType;
  cardinality?: number | 'all' | 'one' | null;
}

export interface ManifestDataBody {
  'manifest-data'?: ManifestData;
}

export interface CancelScenarioBody extends ManifestDataBody {
  reason: string;
}

export interface SplitScenarioBody extends UserData {
  reason: string;
}
