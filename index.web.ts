import {AppRegistry} from 'react-native';
import {expo as appName} from './app.json';
import App from './App';

AppRegistry.registerComponent(appName.name, () => App);

AppRegistry.runApplication(appName.name, {
  initialProps: {},
  rootTag: document.getElementById('app-root'),
});
