import {ISelectItemProps, ISelectProps} from 'native-base';
import {IViewProps} from 'native-base/lib/typescript/components/basic/View/types';

export interface MySelectProps {
  defaultSelect?: string;
  select?: MySelectProp;
  selectItem?: MySelectItemProp;
  _webContainer?: Partial<IViewProps>;
  data: any[];
  valueProp?: string;
  labelProp?: string;
  onValueChange?: (itemValue: string) => void;
}

type MySelectProp = ISelectProps;
type MySelectItemProp = ISelectItemProps;
