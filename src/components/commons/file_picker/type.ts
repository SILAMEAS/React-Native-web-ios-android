import {LoadingButtonProps} from '@components/commons/loading_btn';

interface BaseProps {
  onFileChange?: (
    pickerResult: any,
    arrayBuffer: ArrayBuffer | undefined,
    base64: string | undefined,
  ) => void;
  showPreview?: boolean;
  buttonStyle?: LoadingButtonProps;
}

export type FilePickerMobileProps = BaseProps;

export type FilePickerWebProps = BaseProps;
