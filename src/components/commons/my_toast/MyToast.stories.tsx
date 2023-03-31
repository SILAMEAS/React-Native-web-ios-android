import {ComponentMeta, ComponentStory} from '@storybook/react';
import {useToast} from 'native-base';
import React from 'react';
import {LoadingButton} from '../loading_btn';
import {MyToast} from './';

export default {
  title: 'Commons/Toast',
  component: MyToast,
} as ComponentMeta<typeof MyToast>;
const Template: ComponentStory<typeof MyToast> = args => {
  const toast = useToast();
  return (
    <LoadingButton
      onPress={() =>
        toast.show({
          render: ({id}: {id: number}) => {
            return <MyToast id={id} {...args} />;
          },
        })
      }
      text={args.variant?.toString() ?? ''}
    />
  );
};

export const ToastSolid = Template.bind({});
ToastSolid.args = {
  status: 'error',
  title: 'Account verified',
  variant: 'solid',
  description: 'Thanks for signing up with us.',
  isClosable: true,
};

export const ToastSubtle = Template.bind({});
ToastSubtle.args = {
  title: 'Something went wrong',
  variant: 'subtle',
  description: 'Please create a support ticket from the support page',
};
export const ToastLeftAccent = Template.bind({});
ToastLeftAccent.args = {
  title: 'Network connection restored',
  variant: 'left-accent',
  description:
    'This is to inform you that your network connectivity is restored',
  isClosable: true,
};
export const ToastTopAccent = Template.bind({});
ToastTopAccent.args = {
  title: 'Invalid email address',
  variant: 'top-accent',
  description: 'Please enter a valid email address',
};
export const ToastOutline = Template.bind({});
ToastOutline.args = {
  title: 'Invalid email address',
  variant: 'outline',
  description: 'Please enter a valid email address',
};
