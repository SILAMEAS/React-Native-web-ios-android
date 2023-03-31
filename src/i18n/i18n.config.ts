import {en, fr} from '@src/i18n/languages';
import i18n, {InitOptions} from 'i18next';
import {initReactI18next} from 'react-i18next';

const {languageDetectorPlugin} = require('@src/i18n/languageDectectorPlugin');
import LanguageDetector from 'i18next-browser-languagedetector';
import {Platform} from 'react-native';

const _languageDetector =
  Platform.OS === 'web' ? LanguageDetector : languageDetectorPlugin;
const resources = {
  en: {
    translation: en,
  },
  fr: {
    translation: fr,
  },
};

const DETECTION_OPTIONS = {
  order: ['localStorage', 'navigator'],
  caches: ['localStorage'],
};

const option: InitOptions = {
  compatibilityJSON: 'v3',
  resources,
  //language to use if translations in user language are not available
  fallbackLng: 'fr',
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
  react: {
    useSuspense: false,
  },
};

const optionMobile: InitOptions = {
  ...option,
};

const optionWeb: InitOptions = {
  ...option,
  detection: DETECTION_OPTIONS,
};

const options = Platform.OS === 'web' ? optionWeb : optionMobile;

i18n
  .use(initReactI18next)
  .use(_languageDetector)
  .init(options)
  .then(fn => fn);

export default i18n;
