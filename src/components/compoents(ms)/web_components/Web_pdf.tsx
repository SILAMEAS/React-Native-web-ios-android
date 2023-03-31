import {Box, HStack} from 'native-base';
import React from 'react';
// import {Constant} from '../Constant';
interface Porps {
  data: any;
}

const Web_pdf = ({data}: Porps) => {
  const source = 'data:application/pdf;base64,' + data.split('base64,')[1];
  return (
    <HStack h={'100%'}>
      <Box w={'100%'} bg={'white'} h="100%">
        <embed src={source} height={'100%'} width={'100%'} />
      </Box>
    </HStack>
  );
};

export default Web_pdf;
