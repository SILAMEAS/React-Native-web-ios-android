import {Box} from 'native-base';
import React from 'react';
import {Platform, StyleSheet} from 'react-native';

interface Props {
  uri?: string;
  width?: string | number;
  height?: string | number;
}
const ViewPdf = ({uri, width, height}: Props) => {
  const pdfUrl =
    uri ?? 'http://samples.leanpub.com/thereactnativebook-sample.pdf';
  const source = {
    uri: pdfUrl,
    cache: true,
  };
  if (Platform.OS !== 'web') {
    const Pdf = require('react-native-pdf').default;
    return (
      <Box width={width} height={height}>
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
          onPressLink={(_uri: any) => {
            console.log(`Link pressed: ${_uri}`);
          }}
          style={styles.pdf}
        />
      </Box>
    );
  }
  return <></>;
};

export default ViewPdf;

const styles = StyleSheet.create({
  textLayer: {
    backgroundColor: 'red',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  pdf: {
    // flex: 1,
    width: '100%',
    height: '100%',
  },
});
