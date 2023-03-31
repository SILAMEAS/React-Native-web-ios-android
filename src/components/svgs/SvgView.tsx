import React from 'react';
import {SvgXml} from 'react-native-svg';
import {SvgViewProps} from './';

export const SvgView = ({width, height, xml}: SvgViewProps) => {
  return <SvgXml xml={xml} width={width} height={height} />;
};
