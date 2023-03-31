import {IAlertProps} from 'native-base';

declare type Status = 'error' | 'success' | 'warning' | 'info';
declare type Variant =
  | 'subtle'
  | 'solid'
  | 'left-accent'
  | 'top-accent'
  | 'outline'
  | 'outline-light';
export interface MyToastProps extends IAlertProps {
  id?: number;
  title?: string;
  description?: string;
  isClosable?: boolean;
  status?: Status;
  variant?: Variant;
}

export interface IToastData {
  title?: string;
  status?: Status;
  variant?: Variant;
  description?: string;
  isClosable?: boolean;
}
