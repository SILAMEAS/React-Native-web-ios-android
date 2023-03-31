import {NumberRange} from '@src/utils/commons/type';
import {ColorType} from 'native-base/lib/typescript/components/types';
import {Animated, OpaqueColorValue} from 'react-native';
import {MyTextProps} from '../my_text/type';

export interface ProgressBarProps {
  step: NumberRange<0, 101>;
  steps: NumberRange<0, 101>;
  duration?: number;
  width?: number | string;
  height?: number;
  color?:
    | string
    | Animated.Value
    | Animated.AnimatedInterpolation<string | number>
    | OpaqueColorValue;
  backgroundColor?: ColorType;
  textStyle?: MyTextProps;
}
