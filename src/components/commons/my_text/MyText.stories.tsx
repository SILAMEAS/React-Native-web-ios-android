import {MyText} from '@src/components/commons/my_text';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';

export default {
  title: 'Commons/Text Typography',
  component: MyText,
} as ComponentMeta<typeof MyText>;

const Template: ComponentStory<typeof MyText> = args => <MyText {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fontSize: 'md',
  children: 'Hello! My Name is TOP G',
  type: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  fontSize: 'md',
  children: 'Hello! My Name is TOP G',
  type: 'secondary',
};

export const Danger = Template.bind({});
Danger.args = {
  fontSize: 'md',
  children: 'Hello! My Name is TOP G',
  type: 'danger',
};

export const Dark = Template.bind({});
Dark.args = {
  fontSize: 'md',
  children: 'Hello! My Name is TOP G',
  type: 'dark',
};

export const Info = Template.bind({});
Info.args = {
  fontSize: 'md',
  children: 'Hello! My Name is TOP G',
  type: 'info',
};

export const Success = Template.bind({});
Success.args = {
  fontSize: 'md',
  children: 'Hello! My Name is TOP G',
  type: 'success',
};

export const Warning = Template.bind({});
Warning.args = {
  fontSize: 'md',
  children: 'Hello! My Name is TOP G',
  type: 'warning',
};

export const White = Template.bind({});
White.args = {
  fontSize: 'md',
  children: 'Hello! My Name is TOP G',
  type: 'white',
};
