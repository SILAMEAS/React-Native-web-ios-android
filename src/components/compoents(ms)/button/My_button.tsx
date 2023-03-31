import {Button, Text} from 'native-base';
import React from 'react';

interface typeAll {
  bg?: string;
  px?: number;
  py?: number;
  rounded?: string;
  color?: string;
  text?: string;
}
const MyButton = ({
  bg = 'blue.500',
  px = 4,
  py = 2,
  rounded = 'lg',
  color = 'white',
  text = 'button',
}: typeAll) => {
  return (
    <Button bg={bg} px={px} py={py} rounded={rounded}>
      <Text color={color}>{text}</Text>
    </Button>
  );
};

export default MyButton;
