import {
  Type3Doc,
  Type_actor,
  type_approve_doc,
  type_certificate,
  type_cgu,
  type_File,
  type_forSign,
  type_Session,
  type_signature,
  TypeScenario,
} from '@src/redux/counter/Type/Type';
import {DocumentSession} from '@src/services/documents';
export interface CounterState {
  value: number;
  Email: string;
  Name: string;
  Password: string;
  DATA: [];
  GetOne: any;
  Num_cal: number;
  AllSession: [];
  DATAofSession: type_Session;
  DATAofFile: type_File;
  DATAofActor: Type_actor;
  DataScenario: any;
  Doc_Approve: type_approve_doc;
  Data_cgu: type_cgu;
  Data_certificate: type_certificate;
  doc_ng: string;
  actor_ng: string;
  cert_ng: string;
  Data_signature: type_signature;
  checkEndOrNot: boolean;
  AllFileUpload: {uploads: string[]};
  ForSign: type_forSign;
  IsSubmitOTP: boolean;
  SourcePDF: string;
  BlurScreen: boolean;
  FileBase64: string;
  FileType: string;
  IsMultipleSign: boolean;
  FileNamePicker: string;
  DocInSession: DocumentSession[];
  LoadingState: boolean;
  ForScenarioProcess: TypeScenario;
  IsScenarioInput: boolean;
  IsServer: boolean;
  DocTye: Type3Doc;
}
