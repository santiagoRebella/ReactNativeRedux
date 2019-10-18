/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import {name as appName} from './app.json';
import store from './src/store';

const Root = (props) => (
  <Provider store={store}>
    <App {...props} />
  </Provider>
);

AppRegistry.registerComponent(appName, () => Root);
