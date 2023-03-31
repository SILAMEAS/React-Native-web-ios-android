import React from 'react';
import {Box, Text} from 'native-base';
import {Layout} from '@components/layout';
import {useNavigation} from '@src/navigation';

function Home() {
  const navigation = useNavigation();
  return (
    <Layout navigation={navigation}>
      <Box bg={'white'} h={'100%'}>
        <Text>helodddddddd</Text>
      </Box>
    </Layout>
  );
}

export default Home;
