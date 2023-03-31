import {Search} from '@src/components/commons/search';
import {Box} from 'native-base';
import React from 'react';

export const ViewSearch = () => {
  return (
    <>
      <Search
        placeHolder="Search me here"
        backgroundColor={'black'}
        iconLeftColor="white"
        iconRightColor={'yellow.400'}
        textColor="white"
        placeHolderTextColor={'muted.400'}
      />
      <Box height={4} />
      <Search
        placeHolder="Search me here"
        backgroundColor={'amber.600'}
        iconLeftColor="white"
        iconRightColor={'white'}
        textColor="white"
        placeHolderTextColor={'white'}
      />
    </>
  );
};
