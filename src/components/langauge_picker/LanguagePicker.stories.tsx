import {LanguagePicker} from '@src/components/langauge_picker';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {View} from 'native-base';
import React from 'react';

export default {
  title: 'Commons/LanguagePicker',
  component: LanguagePicker,
} as ComponentMeta<typeof LanguagePicker>;

const Template: ComponentStory<typeof LanguagePicker> = () => (
  <View
    width={'100%'}
    height={400}
    display="flex"
    justifyContent={'center'}
    alignItems="center"
  >
    <LanguagePicker />
  </View>
);

export const SimpleLanguagePicker = Template.bind({});
