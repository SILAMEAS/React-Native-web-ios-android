import {ParamListBase} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {PropsWithChildren} from 'react';
import {Header} from '../Header';

interface Props extends PropsWithChildren {
  navigation: StackNavigationProp<ParamListBase, string, undefined>;
}

export const Layout = ({children, navigation}: Props) => {
  return (
    <>
      <Header navigation={navigation} />
      {children}
    </>
  );
};
