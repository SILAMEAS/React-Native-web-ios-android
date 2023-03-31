// import {Localization} from '@src/i18n/languages';
import {Input, View} from 'native-base';
import React from 'react';
import {MyInputFieldProps} from '.';

export const MyInputField = ({
  value,
  onBlur,
  onChangeText,
  _webContainer,
  ...props
}: MyInputFieldProps) => {
  return (
    <View
      _web={{
        width: '100%',
        ..._webContainer,
      }}
    >
      <Input
        height={'140%'}
        _web={{
          _focus: {
            outlineStyle: 'none',
          },
          _hover: {
            outlineStyle: 'none',
          },
        }}
        onBlur={onBlur}
        onChangeText={onChangeText}
        value={value}
        pt={2}
        {...props}
      />
    </View>
  );
};
