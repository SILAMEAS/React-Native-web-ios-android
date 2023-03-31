import React, {useState} from 'react';
import {API_URL} from '@src/config/env';
import {APIServer} from '@src/utils/classes/APIService';
import {Verb, Resp} from '@src/utils/classes/interfaces/APIConstants';
import {
  Button,
  Divider,
  Box,
  useBreakpointValue,
  VStack,
  Heading,
  ScrollView,
} from 'native-base';
import {Platform, View} from 'react-native';
// import SvgView from './SVGLogo';
import {Brainstorming} from '@src/components/svgs';
import BrainstormingWeb from '@src/assets/logo/brainstorming.svg';
import {SvgView} from '@components/svgs';
import {MyText} from '@src/components/commons/my_text/MyText';
import {Layout} from '@src/components/layout';
import {LoadingButton} from '@src/components/commons/loading_btn';
import {useNavigation} from '@src/navigation';

export interface PingModel {
  requestId: string;
  apiRole: number;
  user: string;
  role: number;
  requestMethod: string;
  requestUrl: string;
  date: Date;
  ip: string;
  params?: Params;
  headers?: Headers;
  query?: Params;
}

export interface Headers {
  host: string;
  connection: string;
  accept: string;
  'user-agent': string;
  'sec-gpc': string;
  'accept-language': string;
  'sec-fetch-site': string;
  'sec-fetch-mode': string;
  'sec-fetch-dest': string;
  referer: string;
  'accept-encoding': string;
  defaultlanguage: string;
  certignarole: number;
  certignahash: string;
  certignauser: string;
}

export interface Params {}

export interface Session {
  sessions: string[];
}

// Converts JSON strings to/from your types
export class Convert {
  public static toSession(json: string): Session {
    return JSON.parse(json);
  }

  public static sessionToJson(value: Session): string {
    return JSON.stringify(value);
  }
}

export const TestAPiServerRequestScreen = () => {
  console.log('API_URL => ', API_URL);
  const api = new APIServer('http://10.2.50.26:8080', {
    certignahash: 'ySsPUR23',
    certignarole: 2,
    certignauser: 'pps#test',
  });

  const [dataGet, setDataGet] = useState<PingModel | null>();
  const [session, setSession] = useState<Session | null>();

  const post = async () => {
    try {
      const url =
        '/api/v1/dev/sign-document?file-name=hello&format=1&level=1&type1=1&certificate=generate';
      const data = await api.ngrequest(
        url,
        Verb.Post,
        'json',
        [Resp.Accepted],
        undefined,
        undefined,
        undefined,
        {
          onUploadProgress(progressEvent) {
            console.log(progressEvent);
          },
        },
      );
      console.log(data);
    } catch (error: any) {
      console.log(error);
    }
  };

  const postSessions = async () => {
    try {
      const url = '/api/v1/sessions';
      const data = await api.ngrequest(url, Verb.Post, 'json', [Resp.Created], {
        ttl: 900,
      });
      getSessions();
      console.log(data);
    } catch (error: any) {
      console.log(error);
    }
  };

  const put = async () => {
    try {
      const body = {
        'manifest-data': {},
        reason: 'string',
        force: true,
      };
      const url = '/api/v1/session/2/close';
      const data = await api.ngrequest(
        url,
        Verb.Put,
        'json',
        [Resp.OK, Resp.Created],
        body,
      );
      console.log(data);
    } catch (error: any) {
      console.log(error);
    }
  };

  const deleteApi = async () => {
    try {
      const url = '/api/v1/session/2/scenario/1';
      const data = await api.ngrequest(url, Verb.Delete, 'json', [
        Resp.OK,
        Resp.Forbidden,
      ]);
      console.log(data);
    } catch (error: any) {}
  };

  const getPing = async () => {
    alert('Hello');
    try {
      const data = await api.ngrequest('/api/v1/dev/ping', Verb.Get, 'json', [
        Resp.OK,
        Resp.TimeOut,
      ]);
      setDataGet(data);
      console.log(data);
    } catch (error: any) {
      console.log(error);
    }
  };

  const getSessions = async () => {
    try {
      const data = await api.ngrequest<Session>(
        '/api/v1/sessions',
        Verb.Get,
        'json',
        [Resp.OK],
        undefined,
        {
          certignarole: 1,
        },
      );
      console.log(data);
      setSession(data);
    } catch (error: any) {
      console.log(error);
    }
  };
  const navigation = useNavigation();
  return (
    <Layout navigation={navigation}>
      <Box safeArea px={3}>
        <ScrollView h="100%">
          <ScrollView horizontal={true} nestedScrollEnabled={true} style={{}}>
            {Platform.OS === 'web' ? (
              <>
                <img src={BrainstormingWeb} height={250} width={200} />
                <img src={BrainstormingWeb} height={250} width={200} />
                <img src={BrainstormingWeb} height={250} width={200} />
                <img src={BrainstormingWeb} height={250} width={200} />
                <img src={BrainstormingWeb} height={250} width={200} />
              </>
            ) : (
              <>
                <SvgView xml={Brainstorming} height={200} width={150} />
                <SvgView xml={Brainstorming} height={200} width={150} />
                <SvgView xml={Brainstorming} height={200} width={150} />
                <SvgView xml={Brainstorming} height={200} width={150} />
                <SvgView xml={Brainstorming} height={200} width={150} />
                <SvgView xml={Brainstorming} height={200} width={150} />
                <SvgView xml={Brainstorming} height={200} width={150} />
              </>
            )}
          </ScrollView>
          <Button colorScheme="primary" onPress={getPing}>
            Test Get API
          </Button>
          <Divider height={5} bg={'white:alpha.0'} />
          <LoadingButton
            colorScheme="primary"
            onPress={getPing}
            text={'Test Get API from loading button'}
            isLoading={false}
          />

          <MyText padding={'5'} type={'dark'}>
            TestAPiServerRequest
          </MyText>
          <MyText type="success">
            {`${dataGet?.requestId} ${dataGet?.requestUrl}`}
          </MyText>
          <Divider height={5} bg={'white:alpha.0'} />
          <Button colorScheme="green" onPress={post}>
            Test Post API
          </Button>
          <Divider height={5} bg={'white:alpha.0'} />
          <Button colorScheme="yellow" onPress={put}>
            Test Put API
          </Button>
          <Divider height={5} bg={'white:alpha.0'} />
          <Button colorScheme="red" onPress={deleteApi}>
            Test Delete API
          </Button>
          <Divider height={5} bg={'white:alpha.0'} />
          <Button colorScheme="primary" onPress={getSessions}>
            Test Get Sessions
          </Button>
          <Box h={300}>
            <ScrollView p={5} h={300} nestedScrollEnabled={true}>
              {session?.sessions.map((_session, index) => (
                <Box key={index} py={1}>
                  <MyText type="dark">{_session}</MyText>
                </Box>
              ))}
            </ScrollView>
            {/* {session && session.sessions?.length > 0 && (
          <FlatList
            data={session?.sessions}
            renderItem={({item}) => renderItem(item)}
            keyExtractor={item => item}
          />
        )} */}
          </Box>
          <Divider height={5} bg={'white:alpha.0'} />
          <Button colorScheme="green" onPress={postSessions}>
            Create Session
          </Button>
          <Example />
        </ScrollView>
      </Box>
    </Layout>
  );
};
// const renderItem = (item: string) => (
//   <Box py={1}>
//     <Text color={'black'}>{item}</Text>
//   </Box>
// );

const Example = () => {
  const flexDir = useBreakpointValue({
    base: 'column',
    md: 'row',
    lg: 'row',
  });
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <VStack py="8" space={8} alignItems="center" justifyContent="center">
        <Heading>Why us?</Heading>
        <View
          style={{
            flexWrap: 'wrap',
            flexDirection: flexDir,
          }}
        >
          <VStack
            m="3"
            w="140"
            borderRadius="xl"
            p="3"
            bg="cyan.500"
            space={2}
            alignItems="center"
            justifyContent="center"
          >
            {/* <Icon
              as={Foundation}
              name="shield"
              size="sm"
              textAlign="center"
              _dark={{
                color: 'coolGray.800',
              }}
            /> */}
            <MyText
              fontSize="lg"
              textAlign="center"
              _dark={{
                color: 'coolGray.800',
              }}
            >
              Secure Checkout
            </MyText>
          </VStack>
          <VStack
            m="3"
            w="140"
            borderRadius="xl"
            p="3"
            bg="cyan.500"
            space={2}
            alignItems="center"
            justifyContent="center"
          >
            {/* <Icon
              as={Foundation}
              name="shield"
              size="sm"
              textAlign="center"
              _dark={{
                color: 'coolGray.800',
              }}
            /> */}
            <MyText
              fontSize="lg"
              textAlign="center"
              _dark={{
                color: 'coolGray.800',
              }}
            >
              Secure Checkout
            </MyText>
          </VStack>
          <VStack
            m="3"
            w="140"
            borderRadius="xl"
            p="3"
            bg="cyan.500"
            space={2}
            alignItems="center"
            justifyContent="center"
          >
            {/* <Icon
              as={Foundation}
              name="shield"
              size="sm"
              textAlign="center"
              _dark={{
                color: 'coolGray.800',
              }}
            /> */}
            <MyText
              fontSize="lg"
              textAlign="center"
              _dark={{
                color: 'coolGray.800',
              }}
            >
              Secure Checkout
            </MyText>
          </VStack>
          <VStack
            m="3"
            w="140"
            borderRadius="xl"
            p="3"
            bg="cyan.500"
            space={2}
            alignItems="center"
            justifyContent="center"
          >
            {/* <Icon
              as={Foundation}
              name="shield"
              size="sm"
              textAlign="center"
              _dark={{
                color: 'coolGray.800',
              }}
            /> */}
            <MyText
              fontSize="lg"
              textAlign="center"
              _dark={{
                color: 'coolGray.800',
              }}
            >
              Secure Checkout
            </MyText>
          </VStack>
          <VStack
            m="3"
            w="140"
            borderRadius="xl"
            p="3"
            bg="cyan.500"
            space={2}
            alignItems="center"
            justifyContent="center"
          >
            {/* <Icon
              as={Foundation}
              name="shield"
              size="sm"
              textAlign="center"
              _dark={{
                color: 'coolGray.800',
              }}
            /> */}
            <MyText
              fontSize="lg"
              textAlign="center"
              _dark={{
                color: 'coolGray.800',
              }}
            >
              Secure Checkout
            </MyText>
          </VStack>
          <VStack
            m="3"
            w="140"
            borderRadius="xl"
            p="3"
            bg="cyan.500"
            space={2}
            alignItems="center"
            justifyContent="center"
          >
            {/* <Icon
              as={Foundation}
              name="shield"
              size="sm"
              textAlign="center"
              _dark={{
                color: 'coolGray.800',
              }}
            /> */}
            <MyText
              fontSize="lg"
              textAlign="center"
              _dark={{
                color: 'coolGray.800',
              }}
            >
              Secure Checkout
            </MyText>
          </VStack>
          <VStack
            m="3"
            w="140"
            borderRadius="xl"
            p="3"
            bg="cyan.500"
            space={2}
            alignItems="center"
            justifyContent="center"
          >
            {/* <Icon
              as={Feather}
              name="clock"
              size="sm"
              textAlign="center"
              _dark={{
                color: 'coolGray.800',
              }}
            /> */}
            <MyText
              fontSize="lg"
              textAlign="center"
              _dark={{
                color: 'coolGray.800',
              }}
            >
              Fast Turn Around
            </MyText>
          </VStack>
        </View>
      </VStack>
    </ScrollView>
  );
};
