import {Search} from '@src/components/commons/search';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';

export default {
  title: 'Commons/Search',
  component: Search,
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = args => <Search {...args} />;

export const SimpleSearch = Template.bind({});
SimpleSearch.args = {
  backgroundColor: 'black',
  iconLeftColor: 'white',
  iconRightColor: 'amber.50',
  placeHolder: 'Search any you wish here...',
  textColor: 'white',
  placeHolderTextColor: 'muted.400',
};
