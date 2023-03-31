import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import {Box, IconButton, Input, Stack, Text} from 'native-base';
import React from 'react'; // , {useState}
import {Control, Controller, FieldError} from 'react-hook-form';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {useTranslation} from 'react-i18next';
import {Localization} from '@src/i18n/languages';
// import {useTranslation} from 'react-i18next';
interface CustomInputType {
  control: Control<any, any>;
  errors: FieldError | undefined;
  base: string;
  md: string;
  _icon: IconDefinition;
  message: string;
  key_id: string;
  _check_password?: string;
  type?: string;
  _nameType: string;
  placeholder: string;
  isEyeOn?: boolean;
  setEyeOn?: React.Dispatch<React.SetStateAction<boolean>>;
}
const MyInput = ({
  control,
  errors,
  base,
  md,
  _icon,
  message,
  key_id,
  _check_password,
  type = 'text',
  placeholder,
  isEyeOn = false,
  setEyeOn,
  _nameType,
}: CustomInputType) => {
  const {t} = useTranslation();
  return (
    <Stack>
      <Controller
        control={control}
        rules={{
          required: message,
          validate: (val: string) => {
            if (type === 'email') {
              const pattern =
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
              const result = val.match(pattern);
              return result
                ? undefined
                : (t(Localization('status', 'invalid')) as string) + ' ' + type;
            }
            if (type === 're_password') {
              console.log(val);
              const pattern =
                /^(?=.*[0-9])(?=.*[a-z])(?=.*_)(?=.*[A-Z]).{8,16}$/;
              const result = val.match(pattern);
              return result ? '' : 'Password is too weak';
            }
            if (type === 'confirm_password') {
              return val !== _check_password
                ? 'The passwords do not match'
                : '';
            }
          },
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <>
            <Text
              color={'black.alpha.50'}
              fontWeight={'medium'}
              fontSize={'xs'}
            >
              {placeholder.charAt(0).toUpperCase() + placeholder.slice(1)}
            </Text>
            <Box borderColor={'gray.500'} borderWidth={0.5} rounded={'xs'}>
              <Input
                fontSize="xs"
                nativeID={key_id}
                onChangeText={onChange}
                onBlur={onBlur}
                maxLength={type === 'phone' ? 15 : undefined}
                value={value}
                onKeyPress={e => {
                  if (type === 'phone') {
                    if (
                      !/[0-9]/.test(e.nativeEvent.key) &&
                      e.nativeEvent.key !== 'Backspace'
                    ) {
                      e.preventDefault();
                    }
                  }
                }}
                variant="unstyled"
                color="black"
                px={2}
                w={{
                  base: base,
                  md: md,
                }}
                keyboardType={type === 'phone' ? 'numeric' : undefined}
                type={
                  (type !== 'password' &&
                    'text' &&
                    type !== 're_password' &&
                    'text' &&
                    type !== 'confirm_password' &&
                    'text') ||
                  isEyeOn
                    ? 'text'
                    : 'password'
                }
                InputRightElement={
                  type === 'password' ? (
                    <IconButton
                      backgroundColor="transparent"
                      onPress={() => {
                        setEyeOn!(!isEyeOn);
                      }}
                    >
                      <FontAwesomeIcon icon={isEyeOn ? _icon : faEyeSlash} />
                    </IconButton>
                  ) : undefined
                }
                placeholder={placeholder}
              />
            </Box>
          </>
        )}
        name={_nameType}
      />
      {errors && (
        <Text fontSize="2xs" pl={2} color="danger.600">
          {errors.message}
        </Text>
      )}
    </Stack>
  );
};
export default MyInput;
