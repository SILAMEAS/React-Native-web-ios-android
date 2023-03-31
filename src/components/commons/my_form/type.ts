import {IRadioValue} from 'native-base';
import {
  ColorType,
  SpaceType,
} from 'native-base/lib/typescript/components/types';
import {RegisterOptions, SubmitHandler, FieldValues} from 'react-hook-form';
import {KeyboardTypeOptions, ColorValue} from 'react-native';
import {IRadioData} from '../my_radio_button';
import {Type} from '../my_text/type';

export interface MyFormProps {
  form: MyFormFromProps;
  input: MyFormInputProps[];
  button: MyFormButtonProps;
}

interface MyFormInputProps {
  isRequired?: boolean;
  label?: string;
  name: string;
  color?: ColorType;
  type?: 'text' | 'password' | 'file' | 'select' | 'radio';
  selectData?: any[]; //this is for type 'select'
  radioData?: IRadioData[]; //this is for type 'radio'
  onSelectChange?: (itemValue: string) => void; //this is for type 'select'
  onFileChange?:
    | ((
        pickerResult: any,
        arrayBuffer: ArrayBuffer | undefined,
        result: string | undefined,
      ) => void)
    | null; //this is for type 'file'
  onRadioChange?: ((itemValue: IRadioValue, data: IRadioData[]) => void) | null; //IRadioGroupOnChangeHandler; //this is for type 'radio'
  keyboardType?: KeyboardTypeOptions;
  placeholderTextColor?: ColorValue;
  defaultValue?: string;
  placeholder?: string;
  rules?: Omit<
    RegisterOptions,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
  variant?: 'outline' | 'rounded' | 'underlined';
  leftElement?: JSX.Element;
  rightElement?: JSX.Element;
  secureTextEntry?: boolean;
}

interface MyFormFromProps {
  width?: number | string;
  height?: number | string;
  space?:
    | 'gutter'
    | '2xs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | SpaceType;
}
interface MyFormButtonProps {
  container?: MyFormButtonContainerProps;
  buttons: MyFormButtonButtonsProps[];
}
interface MyFormButtonContainerProps {}
interface MyFormButtonButtonsProps {
  text: string;
  type: 'submit' | 'button';
  colorScheme?: Type;
  space?: number;
  onPress?: (data: SubmitHandler<FieldValues> | any) => void;
}
