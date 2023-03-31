import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import {DocumentSession} from '@src/services/documents';
import {
  Type3Doc,
  type_forSign,
  TypeScenario,
} from '@src/redux/counter/Type/Type';
import {initialState} from '@src/redux/counter/Type/initialState';

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    Set_Num_cal: (state, action) => {
      state.Num_cal = action.payload;
    },
    increment: state => {
      state.value += 1;
    },
    setEmail: (state, action) => {
      state.Email = action.payload;
    },
    setName: (state, action) => {
      state.Name = action.payload;
    },
    setDATA: (state, action) => {
      state.DATA = action.payload;
    },
    setOne: (state, action) => {
      state.GetOne = action.payload;
    },
    setPassword: (state, action) => {
      state.Password = action.payload;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    setAllSession: (state, action) => {
      state.AllSession = action.payload;
    },
    setDATAofSession: (state, action) => {
      state.DATAofSession = action.payload;
    },
    setDATAofFile: (state, action) => {
      state.DATAofFile = action.payload;
    },
    setDATAofActor: (state, action) => {
      state.DATAofActor = action.payload;
    },
    setDataScenario: (state, action) => {
      state.DataScenario = action.payload;
    },
    setDoc_Approve: (state, action) => {
      state.Doc_Approve = action.payload;
    },
    setData_cgu: (state, action) => {
      state.Data_cgu = action.payload;
    },
    setData_certificate: (state, action) => {
      state.Data_certificate = action.payload;
    },

    setDoc_ng: (state, action) => {
      state.doc_ng = action.payload;
    },
    setActor_ng: (state, action) => {
      state.actor_ng = action.payload;
    },
    setCert_ng: (state, action) => {
      state.cert_ng = action.payload;
    },
    setData_signature: (state, action) => {
      state.Data_signature = action.payload;
    },
    setCheck: (state, action) => {
      state.checkEndOrNot = action.payload;
    },
    setAllFileUpload: (state, action) => {
      state.AllFileUpload = action.payload;
    },
    setForSign: (state, action: PayloadAction<type_forSign>) => {
      state.ForSign = action.payload;
    },
    setIsSubmitOTP: (state, action) => {
      state.IsSubmitOTP = action.payload;
    },
    setSourcePDF: (state, action) => {
      state.SourcePDF = action.payload;
    },
    setBlurScreen: (state, action) => {
      state.BlurScreen = action.payload;
    },
    setFileBase64: (state, action) => {
      state.FileBase64 = action.payload;
    },
    setFileType: (state, action) => {
      state.FileType = action.payload;
    },
    setIsMultipleSign: (state, action) => {
      state.IsMultipleSign = action.payload;
    },
    setFileNamePicker: (state, action: PayloadAction<string>) => {
      state.FileNamePicker = action.payload;
    },
    setDocInSession: (state, action: PayloadAction<DocumentSession[]>) => {
      state.DocInSession = action.payload;
    },
    setLoadingState: (state, action: PayloadAction<boolean>) => {
      state.LoadingState = action.payload;
    },
    setForScenarioProcess: (state, action: PayloadAction<TypeScenario>) => {
      state.ForScenarioProcess = action.payload;
    },
    setIsScenarioInput: (state, action: PayloadAction<boolean>) => {
      state.IsScenarioInput = action.payload;
    },
    setIsServer: (state, action: PayloadAction<boolean>) => {
      state.IsServer = action.payload;
    },
    setDocTye: (state, action: PayloadAction<Type3Doc>) => {
      state.DocTye = action.payload;
    },
    logout: () => initialState,
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  incrementByAmount,
  setEmail,
  setName,
  setPassword,
  setDATA,
  setOne,
  Set_Num_cal,
  setAllSession,
  setDATAofSession,
  setDATAofFile,
  setDATAofActor,
  setDataScenario,
  setDoc_Approve,
  setData_cgu,
  setData_certificate,
  setDoc_ng,
  setActor_ng,
  setCert_ng,
  setData_signature,
  setCheck,
  //========================
  setAllFileUpload,
  setForSign,
  setIsSubmitOTP,
  setSourcePDF,
  setBlurScreen,
  setFileType,
  setFileBase64,
  setIsMultipleSign,
  setFileNamePicker,
  setDocInSession,
  setLoadingState,
  setForScenarioProcess,
  setIsScenarioInput,
  setIsServer,
  setDocTye,
  logout,
} = counterSlice.actions;

export default counterSlice.reducer;
