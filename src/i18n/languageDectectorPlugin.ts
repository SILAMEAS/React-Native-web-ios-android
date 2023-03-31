import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  LanguagesLocalization,
  DefaultLanguagesLocalization,
} from '@src/i18n/localization';
import {STORE_LANGUAGE_KEY} from '@src/components/langauge_picker';

const LANG_CODES: string[] = Object.values(LanguagesLocalization) as string[];

const languageDetectorPlugin = {
  type: 'languageDetector',
  async: true,
  init: () => {},
  detect: async function (callback: (lang: string) => void) {
    try {
      await AsyncStorage.getItem(STORE_LANGUAGE_KEY).then(language => {
        if (language) {
          const findBestAvailableLanguage = LANG_CODES.filter(
            a => a === language,
          )[0];
          callback(findBestAvailableLanguage || DefaultLanguagesLocalization);
        } else {
          return callback(DefaultLanguagesLocalization);
        }
      });
    } catch (error) {
      console.log('Error reading language', error);
    }
  },
  cacheUserLanguage: async function (language: string) {
    try {
      await AsyncStorage.setItem(STORE_LANGUAGE_KEY, language);
    } catch (error) {}
  },
};

module.exports = {languageDetectorPlugin};
