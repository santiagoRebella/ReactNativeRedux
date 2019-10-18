/**
 * @format
 */

import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import {name as appName} from './app.json';
import store from './src/store';

import {
  AppRegistry,
  View,
  Text
} from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: App
    },
    Test: {
      screen: DetailsScreen
    }
  },
  { initialRouteName: 'Home' }
);

const AppContainer = createAppContainer(AppNavigator);

const Root = (props) => (
  <Provider store={store}>
    <AppContainer {...props} />
  </Provider>
);

AppRegistry.registerComponent(appName, () => Root);
