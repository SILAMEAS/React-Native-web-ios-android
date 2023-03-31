import 'react-native-gesture-handler';
import React from 'react';
import {NativeBaseProvider, View} from 'native-base';
import {Dimensions, StatusBar, StyleSheet} from 'react-native';
import Root from './src/components/RootComponent';
import {BaseTheme} from '@src/theme';
import {Provider} from 'react-redux';
import {store} from '@src/redux/store';

import '@src/i18n/i18n.config';

import CheckPlatform from '@components/CheckPlatform';

const {height} = Dimensions.get('window');
export default function App() {
  return (
    <NativeBaseProvider theme={BaseTheme}>
      <View style={styles.screen}>
        <Provider store={store}>
          <StatusBar hidden={true} />
          <CheckPlatform />
          <Root />
        </Provider>
      </View>
    </NativeBaseProvider>
  );
}
const styles = StyleSheet.create({
  screen: {
    height: height,
  },
});
