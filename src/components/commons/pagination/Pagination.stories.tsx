import {ComponentMeta, ComponentStory} from '@storybook/react';
import {View} from 'native-base';
import React from 'react';
import {MyText} from '../my_text';
import {Pagination} from './';

export default {
  title: 'Commons/Pagination',
  component: Pagination,
} as ComponentMeta<typeof Pagination>;
const Template: ComponentStory<typeof Pagination> = args => (
  <Pagination {...args} />
);

interface Product {
  title: string;
  price: number;
  content: string;
  id: number;
  createdAt: Date;
  updatedAt: Date;
}
export const SamplePagination = Template.bind({});
SamplePagination.args = {
  render: (item: Product) => (
    <View width={'100%'}>
      <MyText type="warning">{`${item.id} ${item.title} $${item.price}`}</MyText>
    </View>
  ),
  isScroll: true,
  position: 'bottom',
  queryString: {pageSize: 40, sortedBy: 'name'},
};
