import {ComponentMeta, ComponentStory} from '@storybook/react';
import {View} from 'native-base';
import React from 'react';
import {MyInputField} from './';

export default {
  title: 'Commons/InputField',
  component: MyInputField,
} as ComponentMeta<typeof MyInputField>;

const Template: ComponentStory<typeof MyInputField> = args => (
  <View width={'100%'} height={'500px'}>
    <MyInputField {...args} />
  </View>
);

export const FilePicker = Template.bind({});
FilePicker.args = {
  placeholder: 'username',
  fontSize: 'lg',
  p: '1',
  placeholderTextColor: 'black',
};
