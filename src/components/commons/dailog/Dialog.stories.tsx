import {ViewButton} from '@src/screens/test_commponents/ViewButton';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Center, View} from 'native-base';
import React from 'react';
import {LoadingButton} from '../loading_btn';
import {Dialog, DialogHook, useDialog} from './';

export default {
  title: 'Commons/Dialog',
  component: Dialog,
} as ComponentMeta<typeof Dialog>;

let dialog: DialogHook = {
  isOpen: false,
  onClose: function (): void {
    throw new Error('Function not implemented.');
  },
  onOpen: function (): void {
    throw new Error('Function not implemented.');
  },
  onToggle: function (): void {
    throw new Error('Function not implemented.');
  },
};

const Template: ComponentStory<typeof Dialog> = args => {
  dialog = useDialog();
  return (
    <View height={'70vh'}>
      <Center height={'100%'} bgColor={'black'}>
        <Dialog {...args} />
        <LoadingButton
          text={`Click Me`}
          type={'success'}
          onPress={() => {
            dialog.onOpen();
          }}
        />
      </Center>
    </View>
  );
};

const props = {
  isOpen: dialog.isOpen,
  onClose: dialog.onClose,
  header:
    "This is not just a string or number or ReactNode or ReactNode[] but it's all.",
  buttons: (
    <>
      <LoadingButton
        variant="ghost"
        colorScheme="blueGray"
        onPress={() => {
          dialog.onClose();
        }}
        text={'Cancel'}
      />
      <LoadingButton
        onPress={() => {
          dialog.onClose();
        }}
        text={'Save'}
      />
    </>
  ),
  body: <ViewButton />,
};

export const DialogSample = Template.bind({});
DialogSample.args = {
  size: 'xs',
  ...props,
};

export const DialogSM = Template.bind({});
DialogSM.args = {
  size: 'sm',
  ...props,
};

export const DialogMD = Template.bind({});
DialogMD.args = {
  size: 'md',
  ...props,
};

export const DialogLG = Template.bind({});
DialogLG.args = {
  size: 'lg',
  ...props,
};

export const DialogXL = Template.bind({});
DialogXL.args = {
  size: 'xl',
  ...props,
};

export const DialogFull = Template.bind({});
DialogFull.args = {
  size: 'full',
  ...props,
};
