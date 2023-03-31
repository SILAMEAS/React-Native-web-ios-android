import {
  Avatar,
  Box,
  FormControl,
  HStack,
  Input,
  Pressable,
  ScrollView,
  useBreakpointValue,
  View,
  Modal,
  Button,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import {HeroSectionSampleUI, LatestCourses} from './components';
import {SvgView} from '@src/components/svgs';
import {Training} from '@src/components/svgs';
import TrainingWeb from '@src/assets/logo/training.svg';
import {Platform} from 'react-native';
import PlayIcon from '@src/assets/logo/play.png';
import {WorkFromHome} from '@src/components/svgs';
import {courses, lastestCourses} from './mockData';
import {useTranslation} from 'react-i18next';
import {useDispatch} from 'react-redux';
import {setCourses} from '@src/redux/features/courses/course';
import {NavigatorRoute} from '@src/navigation';
import {Localization} from '@src/i18n/languages';
import {MyText} from '@src/components/commons/my_text';
import {Layout} from '@src/components/layout';
import {Search} from '@src/components/commons/search';
import {LoadingButton} from '@src/components/commons/loading_btn';
import {useNavigation} from '@src/navigation';

const LandingScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {t} = useTranslation();
  const flexDir = useBreakpointValue({
    base: 'column',
    md: 'row',
  });
  const lastestCoursesBreakPoint = useBreakpointValue({
    base: {width: '100%'},
    sm: {width: '100%'},
    md: {width: '48%'},
    lg: {width: '32%'},
  });

  useEffect(() => {
    dispatch(setCourses(courses));
  }, [dispatch]);
  return (
    <Layout navigation={navigation}>
      <View p={4}>
        <View
          display={'flex'}
          flexDir={'row'}
          justifyContent={'space-between'}
          p={4}
        >
          <View>
            <MyText color={'muted.500'} fontSize={'md'}>
              {`${t(Localization('hello'))},`}
            </MyText>
            <Box height={5} />
            <MyText color={'muted.900'} fontSize={'xl'} fontWeight={'bold'}>
              Sharkiri
            </MyText>
          </View>
          <View
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            width={'30%'}
          >
            <Avatar
              width={70}
              height={70}
              source={PlayIcon}
              backgroundColor="white"
            />
          </View>
        </View>
        {/* <Box /> */}
        <Search />
        <Box height={4} />
        <View
          display="flex"
          flexDir={flexDir}
          flexWrap={'wrap'}
          justifyContent="space-between"
        >
          <HeroSectionSampleUI>
            {Platform.OS === 'web' ? (
              <img src={TrainingWeb} height={250} width={300}  alt={''}/>
            ) : (
              <>
                <SvgView xml={Training} height={'100%'} width={'100%'} />
              </>
            )}
          </HeroSectionSampleUI>
        </View>
        <Box height={5} />
        <MyText color={'muted.900'} fontSize={'lg'} fontWeight={'semibold'}>
          {t(Localization('lastSeenCourses'))}
        </MyText>
        <Box height={5} />
        <ScrollView height={'2/6'} width={'100%'}>
          <View
            display={'flex'}
            flexDir={flexDir}
            flexWrap="wrap"
            justifyContent="space-between"
            width={'100%'}
          >
            {lastestCourses.map(data => (
              <Pressable
                _web={lastestCoursesBreakPoint}
                key={data.id}
                onPress={() =>
                  navigation.navigate(NavigatorRoute.SAMPLE_UI.SAMPLE_DETAIL, {
                    screen: NavigatorRoute.SAMPLE_UI.SAMPLE_DETAIL,
                    initial: false,
                    params: {id: data.id},
                  })
                }
              >
                <LatestCourses
                  duration={data.duration}
                  title={data.title}
                  mb="3"
                >
                  {Platform.OS === 'web' ? (
                    <img src={data.leftImage.web} height={80} width={80} />
                  ) : (
                    <SvgView
                      xml={data.leftImage.mobile ?? WorkFromHome}
                      width={80}
                      height={80}
                    />
                  )}
                </LatestCourses>
              </Pressable>
            ))}
          </View>
        </ScrollView>
        {/* <Example /> */}
      </View>
    </Layout>
  );
};

export default LandingScreen;

export function Example() {
  const [modalVisible, setModalVisible] = useState(false);
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  return (
    <>
      <Modal
        isOpen={modalVisible}
        onClose={() => setModalVisible(false)}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
      >
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Contact Us</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Name</FormControl.Label>
              <Input ref={initialRef} />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Email</FormControl.Label>
              <Input />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <LoadingButton
                isLoading={false}
                text="Cancel"
                onPress={() => {
                  setModalVisible(false);
                }}
              />

              <LoadingButton
                isLoading={false}
                text="Save"
                onPress={() => {
                  alert('Hello');
                  setModalVisible(false);
                }}
              />
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <HStack space="4" justifyContent="center" alignItems="center">
        <LoadingButton
          isLoading={false}
          text="Open Modal"
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        />
        <Input
          w="32"
          ref={finalRef}
          placeholder="Enter the OTP"
          _light={{
            placeholderTextColor: 'blueGray.700',
          }}
          _dark={{
            placeholderTextColor: 'blueGray.100',
          }}
        />
      </HStack>
    </>
  );
}
