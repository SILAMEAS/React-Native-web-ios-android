import {ComponentMeta, ComponentStory} from '@storybook/react';
import {View} from 'native-base';
import React from 'react';
import {MyRadioButton} from './';

export default {
  title: 'Commons/RadioButton',
  component: MyRadioButton,
} as ComponentMeta<typeof MyRadioButton>;

const Template: ComponentStory<typeof MyRadioButton> = args => (
  <View width={'100%'} height={'500px'}>
    <MyRadioButton {...args} />
  </View>
);

export const RadioButtonWithSelectedValue = Template.bind({});
RadioButtonWithSelectedValue.args = {
  data: [
    {
      text: 'Male',
      value: 'male',
      isSelected: false,
    },
    {
      text: 'Female',
      value: 'female',
    },
    {
      text: 'Other',
      value: 'other',
      isSelected: true,
    },
  ],
};

export const RadioButtonWithDefaultValue = Template.bind({});
RadioButtonWithDefaultValue.args = {
  data: [
    {
      text: 'Male',
      value: 'male',
    },
    {
      text: 'Female',
      value: 'female',
    },
    {
      text: 'Other',
      value: 'other',
    },
  ],
  defaultValue: 'male',
};
