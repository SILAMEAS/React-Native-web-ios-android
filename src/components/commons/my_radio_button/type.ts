import {IRadioGroupProps, IRadioProps, IRadioValue} from 'native-base';
import {ReactNode} from 'react';
import {IViewProps} from 'native-base/lib/typescript/components/basic/View/types';

export interface MyRadioButtonProps {
  radioProps?: MyRadioProps;
  radioGroupProps?: MyRadioGroupProps;
  radioContainerProps?: IViewProps;
  onChange?: ((value: IRadioValue, data: IRadioData[]) => void) | null; //IRadioGroupOnChangeHandler;
  data: IRadioData[];
  renderItem?: (item: IRadioData) => ReactNode;
  defaultValue?: string;
}

export interface IRadioData {
  text: string;
  value: string;
  isSelected?: boolean;
}
type MyRadioProps = IRadioProps;
type MyRadioGroupProps = IRadioGroupProps;
