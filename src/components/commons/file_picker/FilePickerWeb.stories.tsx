import {ComponentMeta, ComponentStory} from '@storybook/react';
import {View} from 'native-base';
import React from 'react';
import {FilePicker} from './';

export default {
  title: 'Commons/FilePickerSample/Web',
  component: FilePicker,
} as ComponentMeta<typeof FilePicker>;

const Template: ComponentStory<typeof FilePicker> = args => (
  <View width={'100%'} height={'500px'}>
    <FilePicker {...args} />
  </View>
);

export const FilePickerSample = Template.bind({});
FilePickerSample.args = {};
