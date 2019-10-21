import React from 'react';
import {Provider} from 'react-redux';
import {AppRegistry} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import App from './App';
import {name as appName} from './app.json';
import store from './src/store';
import DetailsScreen from './src/screens/Details';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: App,
    },
    Test: {
      screen: DetailsScreen,
    },
  },
  {initialRouteName: 'Home'},
);

const AppContainer = createAppContainer(AppNavigator);

const Root = props => (
  <Provider store={store}>
    <AppContainer {...props} />
  </Provider>
);

AppRegistry.registerComponent(appName, () => Root);
