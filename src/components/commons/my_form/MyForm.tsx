import {$ok} from '@src/utils/commons';
import {FormControl, View} from 'native-base';
import React from 'react';
import {Controller, FieldValues, SubmitHandler, useForm} from 'react-hook-form';
import {Platform} from 'react-native';
import {MyFormProps} from '.';
import {FilePicker} from '../file_picker';
import {LoadingButton} from '../loading_btn';
import {MyInputField} from '../my_input_field';
import {MyRadioButton} from '../my_radio_button';
import {MySelect} from '../my_select';
import {MyText} from '../my_text';

export const MyForm = (props: MyFormProps) => {
  const {
    control,
    handleSubmit,
    formState: {errors, isSubmitting},
  } = useForm();

  return (
    <View
      width={props.form.width}
      height={props.form.height}
      display={'flex'}
      flexDir={'column'}
      justifyContent={'space-between'}
      alignItems="center"
    >
      {$ok(props) && props.input.length > 0 ? (
        props.input.map((val, index) => (
          <FormControl
            isRequired={val.isRequired}
            isInvalid={val.name in errors}
            key={`${index + 1}`}
            height={
              val.type !== 'file'
                ? 60
                : val.type === 'file' && Platform.OS === 'web'
                ? 500
                : 250
            }
            mb={props.form.space}
          >
            {$ok(val.label) ? (
              <FormControl.Label>{val.label}</FormControl.Label>
            ) : (
              <></>
            )}
            <Controller
              control={control}
              render={({field: {onBlur, onChange, value}}) =>
                val.type === 'text' ||
                val.type === 'password' ||
                val.type === undefined ? (
                  <MyInputField
                    height={Platform.OS !== 'web' ? '10' : '12'}
                    borderWidth={0}
                    borderColor={
                      $ok(errors[val.name]?.message) ? 'danger.500' : ''
                    }
                    onBlur={onBlur}
                    placeholder={
                      $ok(val.placeholder) ? val.placeholder : 'John'
                    }
                    onChangeText={(text: string) => onChange(text)}
                    value={value}
                    color={val.color}
                    placeholderTextColor={val.placeholderTextColor}
                    type={val.type ?? 'text'}
                    keyboardType={val.keyboardType ?? 'default'}
                    variant={val.variant}
                    secureTextEntry={val.secureTextEntry}
                    leftElement={val.leftElement}
                    rightElement={val.rightElement}
                  />
                ) : val.type === 'select' ? (
                  <MySelect
                    data={val.selectData!}
                    labelProp="text"
                    valueProp="value"
                    onValueChange={itemValue =>
                      val.onSelectChange && val.onSelectChange(itemValue)
                    }
                    defaultSelect={val.defaultValue}
                  />
                ) : val.type === 'file' ? (
                  <View height={'90%'} width={'100%'}>
                    <FilePicker
                      onFileChange={(pickerResult, fileBuffer, fileBase64) => {
                        $ok(val.onFileChange) &&
                          val.onFileChange!(
                            pickerResult,
                            fileBuffer,
                            fileBase64,
                          );
                      }}
                    />
                  </View>
                ) : val.type === 'radio' ? (
                  <MyRadioButton
                    data={val.radioData!}
                    onChange={(itemValue, data) => {
                      console.log(data);
                      val.onRadioChange && val.onRadioChange(itemValue, data);
                    }}
                  />
                ) : (
                  <></>
                )
              }
              name={val.name}
              rules={val.rules}
              defaultValue={val.defaultValue}
            />
            {$ok(errors[val.name]?.message) && (
              <MyText
                type="danger"
                fontSize="xs"
                _web={{fontSize: 'md', marginTop: -1}}
                mt={2}
              >
                {errors[val.name]?.message as string}
              </MyText>
            )}
          </FormControl>
        ))
      ) : (
        <></>
      )}
      {props.button.buttons.length > 0 ? (
        <View display={'flex'} flexDir="row">
          {props.button.buttons.map((val, index) => (
            <View key={`${index + (val.space ?? 1)}`} px={val.space ?? 3}>
              <LoadingButton
                type={val.colorScheme}
                mt={4}
                width={40}
                isLoading={isSubmitting}
                onPress={
                  val.type === 'submit'
                    ? handleSubmit(val.onPress as SubmitHandler<FieldValues>)
                    : val.onPress
                }
                text={$ok(val.text) ? val.text : 'Submit'}
              />
            </View>
          ))}
        </View>
      ) : (
        <></>
      )}
    </View>
  );
};
