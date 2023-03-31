import React, {useEffect, useRef} from 'react';
import {Box, View} from 'native-base';
import {Viewer, Template} from '@pdfme/ui';

interface Props {
  uri?: string;
  width?: string | number;
  height?: string | number;
}

const ViewPdfWeb = ({uri, width = '90vw', height = '80vh'}: Props) => {
  const TestPDF = require('@src/assets/files/Web_Service_Signature_Certigna_v2.0.pdf');
  const template: Template = {
    basePdf: uri ?? TestPDF,
    schemas: [],
  };
  const viewRef = useRef<HTMLElement>(null);
  useEffect(() => {
    new Viewer({
      domContainer: viewRef.current!,
      template,
      inputs: [{}],
    });
  }, []);

  return (
    <Box
      alignItems={'center'}
      // style={{margin: 25}}
      width={width}
      height={height}
    >
      <View ref={viewRef} width={'100%'} height={'100%'} />
    </Box>
  );
};

export default ViewPdfWeb;
