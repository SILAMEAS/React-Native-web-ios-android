import {Box, View} from 'native-base';
import React from 'react';
import {Platform} from 'react-native';
import Web_pdf from '../web_components/Web_pdf';
// import {Constant} from '../Constant';
// import {Constant} from '../Constant';
interface type {
  data: string;
}
const Moblie_pdf = ({data}: type) => {
  if (Platform.OS == 'web') {
    return <Web_pdf data={data} />;
  }

  const Pdf = require('react-native-pdf').default;
  // const source = {
  //   uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf',
  //   cache: true,
  // };

  const source = {
    uri: 'data:application/pdf;base64,' + data.split('base64,')[1],
  };
  console.log('source');
  console.log(source);
  return (
    <Box safeArea>
      <View h="100%" width={'100%'}>
        <Pdf
          trustAllCerts={false}
          source={source}
          onLoadComplete={(numberOfPages: any) => {
            console.log(`Number of pages: ${numberOfPages}`);
          }}
          onPageChanged={(page: any) => {
            console.log(`Current page: ${page}`);
          }}
          onError={(error: any) => {
            console.log(error);
          }}
          onPressLink={(uri: any) => {
            console.log(`Link pressed: ${uri}`);
          }}
          style={{width: '100%', height: '100%'}}
        />
      </View>
    </Box>
  );
};

export default Moblie_pdf;
