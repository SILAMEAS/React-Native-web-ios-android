import Moblie_pdf from '@src/components/compoents(ms)/moblie_componens/Moblie_pdf';
import Web_pdf from '@src/components/compoents(ms)/web_components/Web_pdf';
import {Box} from 'native-base';
import React from 'react';
import {Platform} from 'react-native';
// import Web_pdf from '../../components/compoents(ms)/web/Web_pdf';
// import Moblie_pdf from '../../components/compoents(ms)/moblie_componens/Moblie_pdf';

const View_PDF = ({data}: any) => {
  return (
    <>
      <Box safeArea h={'100%'}>
        {Platform.OS === 'web' ? (
          <Web_pdf data={data} />
        ) : (
          <Moblie_pdf data={data} />
        )}
      </Box>
    </>
  );
};

export default View_PDF;
