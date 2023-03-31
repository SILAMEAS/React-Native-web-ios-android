import {ColorType} from 'native-base/lib/typescript/components/types';
import {ColorValue} from 'react-native';

export interface SearchProps {
  placeHolder?: string;
  placeHolderTextColor?: ColorValue;
  backgroundColor?: ColorType;
  textColor?: ColorType;
  iconLeftColor?: ColorType;
  iconRightColor?: ColorType;
}
