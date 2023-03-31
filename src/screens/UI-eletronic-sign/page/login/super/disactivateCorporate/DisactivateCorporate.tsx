import React, {useEffect} from 'react';
import {Box, Button, Center, Text, VStack} from 'native-base';
import MyInput from '@screens/UI-eletronic-sign/components/MyInput';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {Localization} from '@src/i18n/languages';
import {useForm} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {COLOR} from '@src/constant/color/Color';
import {FULL_H} from '@src/constant/layout/Layout';

function DisactivateCorporate() {
  const {t} = useTranslation();

  const {
    control,
    handleSubmit,
    formState: {errors},
    watch,
  } = useForm({
    defaultValues: {
      name: '',
      contactName: '',
      phoneNumber: '',
      siret: undefined,
      emailAddress: '',
    },
  });
  const IsEmpty = watch('emailAddress');
  const onSubmit = async (data: any) => {
    console.log(data);
  };
  useEffect(() => {
    console.log(IsEmpty);
  }, [IsEmpty]);
  return (
    <Box h={[FULL_H, '100vh']}>
      <VStack
        h={[FULL_H, '100vh']}
        space={4}
        justifyContent={'center'}
        w={['80%', '40%']}
        mx={'auto'}
        mt={'10%'}
      >
        <Text {...COLOR.Text.titleActivityInfo_Info} textAlign={'center'}>
          Create Company Account
        </Text>
        <MyInput
          key_id="NameC"
          base="300px"
          md="400px"
          _icon={faEnvelope}
          errors={errors.name}
          control={control}
          message={t(Localization('message', 'req-field'))}
          type="text"
          _nameType="name"
          placeholder={t(Localization('form', 'name'))}
        />
        <MyInput
          key_id="SiretC"
          base="300px"
          md="400px"
          _icon={faEnvelope}
          errors={errors.siret}
          control={control}
          message={t(Localization('message', 'req-field'))}
          type="text"
          _nameType="siret"
          placeholder={t(Localization('form', 'siret'))}
        />
        <MyInput
          key_id="Contact"
          base="300px"
          md="400px"
          _icon={faEnvelope}
          errors={errors.contactName}
          control={control}
          message={t(Localization('message', 'req-field'))}
          type="text"
          _nameType="contactName"
          placeholder={t(Localization('form', 'contact name'))}
        />
        {IsEmpty === '' ? (
          <MyInput
            key_id="login_email"
            base="300px"
            md="400px"
            _icon={faEnvelope}
            errors={errors.emailAddress}
            control={control}
            message={'optional'}
            type={''}
            _nameType="emailAddress"
            placeholder={t(Localization('form', 'email'))}
          />
        ) : (
          <MyInput
            key_id="login_email"
            base="300px"
            md="400px"
            _icon={faEnvelope}
            errors={errors.emailAddress}
            control={control}
            message={t(Localization('message', 'req-email'))}
            type={'email'}
            _nameType="emailAddress"
            placeholder={t(Localization('form', 'email'))}
          />
        )}

        <Center w="80" h="80px" rounded="md">
          <Button
            // isDisabled={!IsCheck}dsf
            size="sm"
            rounded="sm"
            bg={'gray.300'}
            px={10}
            onPress={handleSubmit(onSubmit)}
          >
            {t(Localization('title', 'validate'))}
          </Button>
        </Center>
      </VStack>
    </Box>
  );
}

export default DisactivateCorporate;
