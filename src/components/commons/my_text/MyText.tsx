import React from 'react';
import {Text} from 'native-base';
import {MyTextProps, typeMap} from './';

export const MyText = ({
  children,
  fontSize = 'sm',
  type = 'dark',
  ...props
}: MyTextProps) => {
  return (
    <Text color={typeMap[type]} fontSize={fontSize} {...props}>
      {children}
    </Text>
  );
};
