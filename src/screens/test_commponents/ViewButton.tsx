import {LoadingButton} from '@src/components/commons/loading_btn';
import {HStack} from 'native-base';
import React from 'react';

export const ViewButton = () => (
  <HStack space={3} display="flex" flexDir={'row'} flexWrap={'wrap'}>
    <LoadingButton text={'primary'} width={40} mb={3} />
    <LoadingButton
      type="danger"
      text={'danger'}
      isLoading={true}
      width={40}
      mb={3}
    />
    <LoadingButton type="dark" text={'dark'} width={40} mb={3} />
    <LoadingButton
      type="info"
      text={'info solid'}
      variant={'solid'}
      isLoading={true}
      width={40}
      mb={3}
    />
    <LoadingButton type="secondary" text={'secondary'} width={40} mb={3} />
    <LoadingButton
      type="success"
      text={'success'}
      isLoading={true}
      width={40}
      mb={3}
    />
    <LoadingButton
      type="warning"
      text={'warning'}
      // isLoading={true}
      width={40}
      mb={3}
    />
    <LoadingButton
      type="white"
      text={'white outline'}
      variant={'outline'}
      isLoading={true}
      width={40}
      mb={3}
    />
  </HStack>
);
