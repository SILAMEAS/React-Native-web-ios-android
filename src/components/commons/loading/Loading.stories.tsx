import {ComponentMeta, ComponentStory} from '@storybook/react';
import {View} from 'native-base';
import React from 'react';
import {Loading} from './';

export default {
  title: 'Commons/Loading',
  component: Loading,
} as ComponentMeta<typeof Loading>;
const Template: ComponentStory<typeof Loading> = args => (
  <View>
    <Loading {...args} />
  </View>
);

export const LoadingSM = Template.bind({});
LoadingSM.args = {
  spinnerStyle: {
    size: 'sm',
  },
};

export const LoadingLG = Template.bind({});
LoadingLG.args = {
  spinnerStyle: {
    size: 'lg',
  },
};

export const LoadingLGWithColor = Template.bind({});
LoadingLGWithColor.args = {
  spinnerStyle: {
    size: 'lg',
    color: 'indigo.500',
  },
};

export const LoadingLGWithAccessibilityLabel = Template.bind({});
LoadingLGWithAccessibilityLabel.args = {
  spinnerStyle: {
    size: 'lg',
    color: 'indigo.500',
    accessibilityLabel: 'Loading...',
  },
};

export const LoadingLGWithHeadingLeft = Template.bind({});
LoadingLGWithHeadingLeft.args = {
  spinnerStyle: {
    size: 'lg',
    color: 'indigo.500',
    accessibilityLabel: 'Loading...',
  },
  heading: {
    left: true,
    text: 'Loading...',
  },
};

export const LoadingLGWithHeadingRight = Template.bind({});
LoadingLGWithHeadingRight.args = {
  spinnerStyle: {
    size: 'lg',
    color: 'indigo.500',
    accessibilityLabel: 'Loading...',
  },
  heading: {
    right: true,
    text: 'Loading...',
  },
};
