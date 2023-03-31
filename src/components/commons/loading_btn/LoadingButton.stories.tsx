import {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';
import {LoadingButton} from './';

export default {
  title: 'Commons/LoadingButton',
  component: LoadingButton,
} as ComponentMeta<typeof LoadingButton>;

const Template: ComponentStory<typeof LoadingButton> = args => (
  <LoadingButton {...args} />
);

export const LoadingButtonTrue = Template.bind({});
LoadingButtonTrue.args = {
  text: 'Submit',
  isLoading: true,
};

export const LoadingButtonFalse = Template.bind({});
LoadingButtonFalse.args = {
  text: 'Submit',
  isLoading: false,
};
