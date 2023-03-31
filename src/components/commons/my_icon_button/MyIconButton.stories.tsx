import {ComponentMeta, ComponentStory} from '@storybook/react';
import {HamburgerIcon} from 'native-base';
import React from 'react';
import {MyIconButton} from './';

export default {
  title: 'Commons/IconButton',
  component: MyIconButton,
} as ComponentMeta<typeof MyIconButton>;

const Template: ComponentStory<typeof MyIconButton> = args => (
  <MyIconButton {...args} />
);

export const IconButtonDefault = Template.bind({});
IconButtonDefault.args = {
  icon: <HamburgerIcon color="white" />,
  width: '40px',
  height: '40px',
};
