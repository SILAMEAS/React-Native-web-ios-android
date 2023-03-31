import {ColorType} from 'native-base/lib/typescript/components/types';
import {LoadingButtonProps} from '../loading_btn';
import {MyTextProps} from '../my_text';
import {Slide} from './hooks/useSlide';
interface SlideContent {
  stepName: string;
  child: JSX.Element;
}
export interface SlideProps {
  slideContent: SlideContent[];
  width?: number | string;
  height?: number | string;
  backgroundColor?: ColorType;
  headerStyle?: MyTextProps;
  button?: Button;
  onDone?: (slide?: Slide) => void;
  onNext?: (slide?: Slide) => void;
  onBack?: (slide?: Slide) => void;
}

interface Button {
  leftButton?: LoadingButtonProps;
  rightButton?: LoadingButtonProps;
  lastStepButton?: LoadingButtonProps;
}
