import {LoadingButtonProps} from '../loading_btn';
import {MyTextProps} from '../my_text';

export interface CardProps {
  headerText?: string;
  header?: JSX.Element;
  headerStyle?: MyTextProps;
  uri?: string;
  contentText?: string;
  contentStyle?: MyTextProps;
  content?: JSX.Element;
  button?: JSX.Element;
  leftButtonText?: string;
  rightButtonText?: string;
  leftButtonStyle?: LoadingButtonProps;
  rightButtonStyle?: LoadingButtonProps;
  space?: number;
}
