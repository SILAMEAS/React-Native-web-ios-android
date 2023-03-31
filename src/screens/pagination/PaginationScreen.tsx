import {MyText} from '@src/components/commons/my_text';
import {Pagination} from '@src/components/commons/pagination';
import {Layout} from '@src/components/layout';
import {useNavigation} from '@src/navigation';
import {View} from 'native-base';
import React from 'react';

interface Product {
  title: string;
  price: number;
  content: string;
  id: number;
  createdAt: Date;
  updatedAt: Date;
}
export const PaginationScreen = () => {
  const navigation = useNavigation();
  return (
    <Layout navigation={navigation}>
      <View height={'100%'}>
        <Pagination
          render={(item: Product) => (
            <View width={'100%'}>
              <MyText type="warning">{`${item.id} ${item.title} $${item.price}`}</MyText>
            </View>
          )}
          isScroll={true}
          position={'bottom'}
          queryString={{pageSize: 40, sortedBy: 'name', date: 'asdklfsalk'}}
        />
      </View>
    </Layout>
  );
};
