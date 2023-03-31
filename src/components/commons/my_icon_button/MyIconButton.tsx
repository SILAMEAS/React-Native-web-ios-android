import {Button} from 'native-base';
import React from 'react';
import {MyIconButtonProps} from '.';

export const MyIconButton = ({
  colorScheme = 'primary',
  variant,
  icon,
  size,
  ...props
}: MyIconButtonProps) => {
  return (
    <Button
      size={size}
      variant={variant}
      colorScheme={colorScheme}
      alignItems={'center'}
      {...props}
    >
      {icon}
    </Button>
  );
};
