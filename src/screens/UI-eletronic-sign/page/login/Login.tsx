import React, {useRef, useState} from 'react';
import {
  VStack,
  Center,
  Text,
  Button,
  Checkbox,
  HStack,
  Image,
  Box,
} from 'native-base';
import {faEye, faEnvelope} from '@fortawesome/free-solid-svg-icons';

import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {
  Dimensions,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from 'react-native';
import {useForm} from 'react-hook-form';
import MyInput from '@screens/UI-eletronic-sign/components/MyInput';
import {Localization} from '@src/i18n/languages';
import {useTranslation} from 'react-i18next';
import {COLOR} from '@src/constant/color/Color';
import {IContext, SignInData} from '@components/authentication/type';
import {AuthContext} from '@components/authentication/authProvider';
import windowResize from '@utils/windowResize/WindowResize';
import {Api} from '@src/constant/api/Api';
const windowDimensions = Dimensions.get('window');
const screenDimensions = Dimensions.get('screen');
interface Type {
  email: string | undefined;
  password: string | undefined;
}
const Login = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
    watch,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const {signIn} = React.useContext(AuthContext) as IContext;
  const data = useRef<Type>({email: undefined, password: undefined}).current;
  const [isEyeOn, setEyeOn] = useState(false);
  const {t} = useTranslation();
  data.email = watch('email');
  data.password = watch('password');
  const [IsTrue, setIsTrue] = React.useState(false);
  const [IsCheck, setIsCheck] = React.useState(false);

  const loginProcess = async (data: SignInData) => {
    try {
      fetch(Api.login, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      })
        .then(response => response.json())
        .then(responseJson => {
          try {
            console.log(responseJson);
            if (responseJson) {
              signIn({
                email: data.email!,
                password: data.password!,
                userToken: responseJson.access_token.token,
              });
            }
          } catch (e) {
            e && alert("Don't have this user in our database");
          }
        });
    } catch (e) {
      console.log(e);
    }
  };
  const onSubmit = async (data: SignInData) => {
    await loginProcess(data);
  };
  React.useEffect(() => {
    if (data.email !== '' && data.password !== '') {
      setIsTrue(true);
    } else {
      setIsTrue(false);
    }
  }, [data.email, data.password]);

  const {window} = windowResize({windowDimensions, screenDimensions});
  const {width} = window;
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS !== 'web' ? 'padding' : 'height'}
      style={styles.container}
    >
      <TouchableWithoutFeedback
        onPress={Platform.OS !== 'web' ? Keyboard.dismiss : () => {}}
        accessible={false}
      >
        <Center h={['100%', '100vh']}>
          <HStack
            w={['100%', '50%']}
            alignItems={'center'}
            justifyContent={['center', 'space-evenly']}
          >
            <VStack w={['50%', '100%']} space={'10%'}>
              <VStack space={4} alignItems="center" h={'90%'}>
                {/* <FormControl isInvalid> */}
                <VStack w={['80', '96']} alignItems={'flex-start'}>
                  <Text {...COLOR.Text.title1} mb={'10%'}>
                    {t(Localization('title', 'signature'))}
                  </Text>
                  <Text {...COLOR.Text.title2}>
                    {t(Localization('title', 'welcome to signature'))}
                  </Text>
                  <Text fontWeight={'medium'} fontSize="xs" color="gray.500">
                    {t(Localization('title', 'log into access'))}
                  </Text>
                </VStack>
                <VStack space={4}>
                  <MyInput
                    key_id="login_email"
                    base="300px"
                    md="400px"
                    _icon={faEnvelope}
                    errors={errors.email}
                    control={control}
                    message={t(Localization('message', 'req-email'))}
                    type="email"
                    _nameType="email"
                    placeholder={t(Localization('form', 'email'))}
                    setEyeOn={setEyeOn}
                  />
                  <MyInput
                    key_id="login_password"
                    base="300px"
                    md="400px"
                    _icon={faEye}
                    errors={errors.password}
                    control={control}
                    message={t(Localization('message', 'req-pass'))}
                    type="password"
                    _nameType="password"
                    placeholder={t(Localization('form', 'password'))}
                    isEyeOn={isEyeOn}
                    setEyeOn={setEyeOn}
                  />

                  <Checkbox
                    value={'box'}
                    isDisabled={!IsTrue}
                    onChange={e => {
                      setIsCheck(e);
                    }}
                  >
                    <Text
                      fontSize={'sm'}
                      color={IsTrue ? 'black' : 'gray.300'}
                      disabled={!IsTrue}
                    >
                      {t(Localization('title', 'condition of us'))}
                    </Text>
                  </Checkbox>
                  <Center w="80" h="80px" rounded="md">
                    <Button
                      isDisabled={!IsCheck}
                      {...COLOR.ButtonColor.buttonLogin}
                      bg={
                        IsTrue ? COLOR.ButtonColor.buttonLogin.bg : 'gray.300'
                      }
                      onPress={handleSubmit(onSubmit)}
                    >
                      {t(Localization('button', 'login'))}
                    </Button>
                  </Center>
                </VStack>
                {/* </FormControl> */}
              </VStack>
            </VStack>
            {Platform.OS === 'web' && (
              <Box display={width < 1400 ? 'none' : 'flex'}>
                <VStack>
                  <Image
                    key={'size'}
                    size={'100vh'}
                    resizeMode="cover"
                    source={{
                      uri: 'https://wallpaperaccess.com/full/317501.jpg',
                    }}
                    alt={'Alternate Text '}
                  />
                </VStack>
              </Box>
            )}
          </HStack>
        </Center>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
