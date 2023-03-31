import React from 'react';
import {
  Avatar,
  Box,
  Divider,
  HStack,
  IconButton,
  Pressable,
  StatusBar,
  Text,
  useBreakpointValue,
  useDisclose,
  VStack,
} from 'native-base';
import {
  faUser,
  faBars,
  faPencil,
  faClose,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {style} from '@styles/style';
import {LanguagePicker} from './langauge_picker';
import {NavigatorRoute} from '@src/navigation';
import {useTranslation} from 'react-i18next';
import {Localization} from '@src/i18n/languages';
import {Constant_Navigator} from '@src/navigation/Constant_Navigator';
import {COLOR} from '@src/constant/color/Color';
import HeaderCustom from '@components/newUI/headerCustom/HeaderCustom';
import MyActionSheet from '@components/newUI/myActionSheet/MyActionSheet';
export function Header({navigation}: any) {
  const {t} = useTranslation();
  const actionSheet = useDisclose();
  const isNavItem = useBreakpointValue({
    base: false,
    sm: false,
    md: true,
    lg: true,
  });
  return (
    <>
      <StatusBar backgroundColor="#191970" barStyle="light-content" />
      <HStack
        style={[
          style.appBar,
          {
            backgroundColor: Constant_Navigator.DOCUSIGN ? 'white' : '#3700B3',
          },
        ]}
        justifyContent="space-between"
      >
        {Constant_Navigator.DOCUSIGN && !isNavItem ? (
          <IconButton
            onPress={() => {
              navigation.openDrawer();
            }}
            icon={
              <FontAwesomeIcon
                icon={faBars}
                color={Constant_Navigator.DOCUSIGN ? 'black' : 'white'}
              />
            }
            name="menu"
          />
        ) : (
          <></>
        )}
        <HStack alignItems="center">
          {!Constant_Navigator.DOCUSIGN && !isNavItem ? (
            <IconButton
              onPress={() => {
                navigation.openDrawer();
              }}
              icon={
                <FontAwesomeIcon
                  icon={faBars}
                  color={Constant_Navigator.DOCUSIGN ? 'black' : 'white'}
                />
              }
              name="menu"
            />
          ) : (
            <></>
          )}
          <Pressable
            onPress={() => {
              navigation.navigate(NavigatorRoute.HOME);
            }}
          >
            <Text
              color={Constant_Navigator.DOCUSIGN ? 'black' : 'white'}
              fontSize="20"
              fontWeight={Constant_Navigator.DOCUSIGN ? 'semibold' : 'bold'}
            >
              {Constant_Navigator.DOCUSIGN
                ? t(Localization('docusign'))
                : t(Localization('home'))}
            </Text>
          </Pressable>
        </HStack>
        <HStack space={2}>
          {isNavItem ? (
            <>
              <Pressable
                onPress={() => {
                  navigation.navigate(NavigatorRoute.PAGINATION_SCREEN);
                }}
              >
                <Text bold={true} paddingTop={2}>
                  {t(Localization('paginationScreen'))}
                </Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  navigation.navigate(NavigatorRoute.DIALOG_SCREEN);
                }}
              >
                <Text bold={true} paddingTop={2}>
                  {t(Localization('dialogScreen'))}
                </Text>
              </Pressable>

              <Pressable
                onPress={() => {
                  navigation.navigate(NavigatorRoute.SLIDE_SCREEN);
                }}
              >
                <Text bold={true} paddingTop={2}>
                  {t(Localization('slideScreen'))}
                </Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  navigation.navigate(NavigatorRoute.TEST_COMPONENT);
                }}
              >
                <Text bold={true} paddingTop={2}>
                  {t(Localization('testComponents'))}
                </Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  navigation.navigate(NavigatorRoute.SAMPLE_UI.MAIN);
                }}
              >
                <Text bold={true} paddingTop={2}>
                  {t(Localization('sampleUILandingScreen'))}
                </Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  navigation.navigate(NavigatorRoute.TEST_API);
                }}
              >
                <Text bold={true} paddingTop={2}>
                  {t(Localization('testAPIServerRequestScreen'))}
                </Text>
              </Pressable>
            </>
          ) : (
            <></>
          )}
          <IconButton
            onPress={() => {
              // navigation.navigate(Constant_Navigator.PAGE_LOGIN_DOCUSIGN);
              actionSheet.onOpen();
            }}
            icon={
              <FontAwesomeIcon
                icon={faUser}
                color={Constant_Navigator.DOCUSIGN ? 'black' : 'white'}
              />
            }
            name="menu"
          />
          {Constant_Navigator.DOCUSIGN ? <></> : <LanguagePicker />}
        </HStack>
      </HStack>

      <MyActionSheet
        isOpen={actionSheet.isOpen}
        onClose={actionSheet.onClose}
        hActionSheet={'100%'}
        prop={{bg: 'white'}}
        propV={{justifyContent: 'flex-start'}}
        TitleAndIcon={
          <HeaderCustom
            prop={{h: 30}}
            title={
              <Text color={'black'} fontWeight={'bold'} fontSize={'md'}>
                My Profile
              </Text>
            }
            iconRight={
              <Text {...COLOR.Text.gotIt} fontWeight={'semibold'}>
                Edit
              </Text>
            }
            iconLeft={
              <Pressable onPress={actionSheet.onClose}>
                <FontAwesomeIcon icon={faClose} size={20} color={'black'} />
              </Pressable>
            }
          />
        }
        IconList={
          <Box w={'100%'}>
            <VStack
              justifyContent={'center'}
              alignItems={'center'}
              space={2}
              w={'100%'}
            >
              <VStack
                justifyContent={'center'}
                alignItems={'center'}
                w={'100%'}
              >
                <Avatar
                  bg="cyan.500"
                  size={'xl'}
                  source={{
                    uri: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
                  }}
                />
                <Text color={'black'}>meas sila</Text>
                <Text color={'gray.400'}>sila.meas@allweb.com.kh</Text>
              </VStack>
              <HStack space={4}>
                <VStack>
                  <HStack>
                    <Box borderColor={'gray.300'} borderWidth={1} px={3} py={1}>
                      <Text color={'black'}>Meas sila</Text>
                    </Box>

                    <Box borderColor={'gray.300'} borderWidth={1} px={3} py={2}>
                      <FontAwesomeIcon
                        icon={faPencil}
                        size={14}
                        color={COLOR.ButtonColor.plusButton}
                      />
                    </Box>
                  </HStack>
                  <Text fontSize={'xs'}>Signature</Text>
                </VStack>
                <VStack>
                  <HStack>
                    <Box borderColor={'gray.300'} borderWidth={1} px={3} py={1}>
                      <Text color={'black'}>MS</Text>
                    </Box>

                    <Box borderColor={'gray.300'} borderWidth={1} px={3} py={2}>
                      <FontAwesomeIcon
                        icon={faPencil}
                        size={14}
                        color={COLOR.ButtonColor.plusButton}
                      />
                    </Box>
                  </HStack>
                  <Text fontSize={'xs'}>Initials</Text>
                </VStack>
              </HStack>
            </VStack>
            <Divider my={2} w={'100%'} />
            <VStack space={2}>
              <Text color={'black'}>Title</Text>
              <Text color={'black'}>Company</Text>
              <Text color={'black'}>Address 1</Text>
              <Text color={'black'}>Address 2</Text>
              <Text color={'black'}>Country/Region</Text>
              <Text color={'black'}>Region</Text>
              <Text color={'black'}>City</Text>
              <Text color={'black'}>Zip code</Text>
              <Text color={'black'}>Phone</Text>
            </VStack>
          </Box>
        }
      />
    </>
  );
}
