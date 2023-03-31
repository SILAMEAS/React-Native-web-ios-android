import {MyText} from '@src/components/commons/my_text';
import {Box, View} from 'native-base';
import {IViewProps} from 'native-base/lib/typescript/components/basic/View/types';
import {ColorType} from 'native-base/lib/typescript/components/types';
import React, {PropsWithChildren} from 'react';
import {Image, ImageSourcePropType, ImageStyle, StyleProp} from 'react-native';

interface Props extends PropsWithChildren {
  title: string;
  duration: string;
  mb?: number | string;
  backgroundColor?: ColorType;
  image?: {source: ImageSourcePropType; style?: StyleProp<ImageStyle>};
  _web?: Partial<IViewProps>;
}
const LatestCourses = (props: Props) => {
  return (
    <View
      width={'100%'}
      height={20}
      backgroundColor={props.backgroundColor ?? 'tertiary.300:alpha.5'}
      borderRadius={10}
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      flexDir={'row'}
      mb={props.mb}
      _web={props._web}
    >
      <View width={'15%'}>{props.children}</View>
      <Box width={'6'} />
      <View width={'65%'}>
        <MyText fontSize={'md'} color={'muted.800'} fontWeight="semibold">
          {props.title}
        </MyText>
        <Box height={2} />
        <MyText fontSize={'sm'} color={'muted.600'}>
          {props.duration}
        </MyText>
      </View>
      <View width={'15%'}>
        <Image
          source={props.image?.source ?? require('@src/assets/logo/play.png')}
          style={props.image?.style ?? {width: 50, height: 50}}
        />
      </View>
    </View>
  );
};

export default LatestCourses;
