import {SvgView} from '@src/components/svgs';
import {Box, View} from 'native-base';
import React from 'react';
import {Image, Platform} from 'react-native';
import {Training} from '@src/components/svgs';
import TrainingWeb from '@src/assets/logo/training.svg';
import TimeIcon from '@src/assets/logo/timeIcon.png';

import {useRoute} from '@react-navigation/native';
import {MyText} from '@src/components/commons/my_text/MyText';
import {useAppSelector} from '@src/redux/config/hooks';

export function SampleDetailScreen() {
  const {params}: any = useRoute();
  console.log(params);
  const id = (params?.params as {id: number}).id;
  console.log(id);
  const course = useAppSelector(
    state => state.course.filter(i => i.id === id)[0],
  );
  console.log(course);
  return (
    <View px={2.5} height={'100%'}>
      <View width={'100%'} height={'8%'} mt={3}>
        <MyText fontSize={'md'} color={'black'} fontWeight={'semibold'}>
          Basic What is CQRS?
        </MyText>
        <Box height={3} />
        <MyText color="muted.400:alpha.70">By Sokchanith ROS</MyText>
      </View>
      <View
        width={'100%'}
        height={'30%'}
        backgroundColor={'blue.200'}
        borderRadius={15}
        mt={2}
      >
        {Platform.OS === 'web' ? (
          <img src={TrainingWeb} height={250} width={300} />
        ) : (
          <>
            <SvgView xml={Training} height={'100%'} width={'100%'} />
          </>
        )}
      </View>
      <View mt={5}>
        <MyText fontSize={'lg'} color={'black'} fontWeight={'semibold'}>
          Command Query Responsibility Sergregation (CQRS)
        </MyText>
        <MyText fontSize={'md'} color={'muted.500'} fontWeight={'normal'}>
          a pattern that separates read and update operations for a data store.
          Implementing CQRS in your application can maximize its performance,
          scalability, and security.
        </MyText>
      </View>
      <View
        height={'20%'}
        width={'100%'}
        display="flex"
        flexDir="row"
        justifyContent="space-between"
        mt="8"
      >
        <MyText fontSize={'xl'} color={'black'} fontWeight={'bold'}>
          Course Detaikls
        </MyText>
        <View>
          <Image
            source={TimeIcon}
            style={{width: 25, height: 25, tintColor: '#f97316'}}
          />
        </View>
      </View>
    </View>
  );
}
