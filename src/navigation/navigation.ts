import {
  ParamListBase,
  createNavigationContainerRef,
  useNavigation,
} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export const navigation =
  useNavigation<StackNavigationProp<ParamListBase, string, undefined>>();

export const navigationRef = createNavigationContainerRef();
