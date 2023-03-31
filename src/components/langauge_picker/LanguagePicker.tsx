import {Localization} from '@src/i18n/languages';
import {Button, Modal, VStack, Pressable} from 'native-base';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {MyText} from '../commons/my_text';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { STORE_LANGUAGE_KEY } from '.';

export const LanguagePicker = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const {i18n, t} = useTranslation();

  const languages = [
    {name: 'en', label: 'English'},
    {name: 'fr', label: 'Français'},
  ];

  const LanguageItem = ({name, label}: {name: string; label: string}) => (
    <Pressable
      my={1}
      py={2}
      pl={3}
      borderRadius={10}
      backgroundColor={name === i18n.language ? 'blue.200' : ''}
      onPress={async () => {
        await i18n.changeLanguage(name);
        await AsyncStorage.setItem(STORE_LANGUAGE_KEY, name)
        setModalVisible(!modalVisible);
      }}
    >
      <MyText fontSize={'md'} type={'dark'}>
        {label}
      </MyText>
    </Pressable>
  );

  return (
    <>
      <Modal
        isOpen={modalVisible}
        onClose={() => setModalVisible(false)}
        avoidKeyboard
        justifyContent="flex-end"
        bottom="4"
        size="lg"
      >
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>{t(Localization('chooseYourPreferLanguage'))}</Modal.Header>
          <Modal.Body>
            {languages.map(lang => (
              <LanguageItem {...lang} key={lang.name} />
            ))}
          </Modal.Body>
        </Modal.Content>
      </Modal>
      <VStack space={8} alignItems="center">
        <Button
          w="104"
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        >
          {`${t(Localization('language'))}`}
        </Button>
      </VStack>
    </>
  );
};
