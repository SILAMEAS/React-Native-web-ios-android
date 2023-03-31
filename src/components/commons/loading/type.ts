import {ISpinnerProps} from 'native-base';
import {IHStackProps} from 'native-base/lib/typescript/components/primitives/Stack/HStack';
import {ReactNode} from 'react';

export interface LoadingProps {
  containerStyle?: IHStackProps;
  spinnerStyle?: ISpinnerProps;
  heading?: Heading;
}

interface Heading {
  left?: boolean;
  right?: boolean;
  center?: boolean;
  text?: ReactNode | ReactNode[] | string | number;
}
