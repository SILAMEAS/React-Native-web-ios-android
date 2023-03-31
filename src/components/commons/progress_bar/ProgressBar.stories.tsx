import {ComponentMeta, ComponentStory} from '@storybook/react';
import {View} from 'native-base';
import React from 'react';
import {ProgressBar} from './';

export default {
  title: 'Commons/ProgressBar',
  component: ProgressBar,
} as ComponentMeta<typeof ProgressBar>;
const Template: ComponentStory<typeof ProgressBar> = args => (
  <View>
    <ProgressBar {...args} />
  </View>
);
export const LoadingSM = Template.bind({});
LoadingSM.args = {
  step: 50,
  steps: 100,
};
