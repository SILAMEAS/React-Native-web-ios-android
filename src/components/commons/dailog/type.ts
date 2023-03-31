import {IModalProps} from 'native-base';
import {ILinearGradientProps} from 'native-base/lib/typescript/components/primitives/Box/types';
import {
  ResponsiveValue,
  ColorType,
} from 'native-base/lib/typescript/components/types';
import {ReactNode} from 'react';

export declare type SizeDialog = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

export interface DialogProps extends IModalProps {
  body?: string | number | ReactNode | ReactNode[];
  header?: string | number | ReactNode | ReactNode[];
  buttons: JSX.Element | JSX.Element[];
  size?: SizeDialog;
  isOpen: boolean;
  onClose?: () => void;
  headerBackgroundColor?: ResponsiveValue<ColorType | ILinearGradientProps>;
  bodyBackgroundColor?: ResponsiveValue<ColorType | ILinearGradientProps>;
  footerBackgroundColor?: ResponsiveValue<ColorType | ILinearGradientProps>;
}
//ResponsiveValue<ColorType | ILinearGradientProps>
export interface DialogHook {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  onToggle: () => void;
}
