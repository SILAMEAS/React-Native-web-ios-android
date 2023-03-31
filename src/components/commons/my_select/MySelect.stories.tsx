import {ComponentMeta, ComponentStory} from '@storybook/react';
import {View} from 'native-base';
import React from 'react';
import {MySelect} from './';

export default {
  title: 'Commons/Select',
  component: MySelect,
} as ComponentMeta<typeof MySelect>;

const Template: ComponentStory<typeof MySelect> = args => (
  <View width={'100%'} height={'500px'}>
    <MySelect {...args} />
  </View>
);

export const SelectDefualt = Template.bind({});
SelectDefualt.args = {
  data: [
    {
      id: 1,
      value: '1',
      label: 'Phnom Penh',
    },
    {
      id: 2,
      value: '2',
      label: 'Ta Keo',
    },
    {
      id: 3,
      value: '3',
      label: 'Kampong Chhnang',
    },
  ],
  select: {
    accessibilityLabel: 'Choose provice',
    placeholder: 'Choose provice',
  },
};

export const SelectWithAnyProps = Template.bind({});
SelectWithAnyProps.args = {
  data: [
    {
      id: '1',
      name: 'Phnom Penh',
    },
    {
      id: '2',
      name: 'Ta Keo',
    },
    {
      id: '3',
      name: 'Kampong Chhnang',
    },
  ],
  labelProp: 'name',
  valueProp: 'id',
  select: {
    accessibilityLabel: 'Choose provice',
    placeholder: 'Choose provice',
  },
};
