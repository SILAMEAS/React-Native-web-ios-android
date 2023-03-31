import {
  ParamListBase,
  useNavigation as useNavigationRN,
} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export const useNavigation = (): StackNavigationProp<
  ParamListBase,
  string,
  undefined
> => {
  return useNavigationRN<
    StackNavigationProp<ParamListBase, string, undefined>
  >();
};
