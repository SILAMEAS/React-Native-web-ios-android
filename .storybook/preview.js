import {NativeBaseProvider} from 'native-base';
import withAxiosDecorator from 'storybook-axios';
import {getAxios} from 'storybook-axios/utils/get-axios';
export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
export const decorators = [
  Story => (
    <NativeBaseProvider>
      <Story />
    </NativeBaseProvider>
  ),
  withAxiosDecorator(getAxios()),
];
