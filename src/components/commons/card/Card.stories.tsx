import {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';
import {Card} from './';

export default {
  title: 'Commons/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = args => <Card {...args} />;
export const CardDefault = Template.bind({});
CardDefault.args = {};

export const CardWithContentText = Template.bind({});
CardWithContentText.args = {
  contentText:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam unde nostrum molestiae fuga porro laborum veniam repudiandae totam reprehenderit dolor adipisci necessitatibus, eveniet alias consequuntur consequatur praesentium dolorem id quos.',
};
