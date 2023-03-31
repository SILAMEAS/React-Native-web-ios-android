import en from '@src/i18n/languages/en.json';
import fr from '@src/i18n/languages/fr.json';

type LanguageObjectType = keyof typeof fr;

const Localization = <T extends LanguageObjectType>(
  key: T,
  prop?: keyof typeof fr[T],
): string => {
  if (prop !== undefined) {
    return `${key}.${prop as string}`;
  }
  return key;
};
export {en, fr, Localization};
