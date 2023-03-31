import {IViewProps} from 'native-base/lib/typescript/components/basic/View/types';
import {IInputProps} from 'native-base/lib/typescript/components/primitives/Input/types';

export interface MyInputFieldProps extends IInputProps {
  _webContainer?: Partial<IViewProps>;
  // containerBorderColor?: ColorType;
  // containerWidth?: number | string;
}
