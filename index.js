import React from 'react';
import {Provider} from 'react-redux';
import {AppRegistry} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './src/screens/Home';
import {name as appName} from './app.json';
import store from './src/core/store';
import NavigationService from './src/services/NavigationService';
import Details from './src/screens/Details';
import Create from './src/screens/Create';
import { ThemeProvider } from 'react-native-elements';
import { screenNames } from './src/core/constants';
import { theme } from './src/styles/styles';
import EditButton from './src/components/EditButton';

export const AppNavigator = createStackNavigator(
  {
    [screenNames.HOME]: {
      screen: () => (<ThemeProvider theme={theme}><Home /></ThemeProvider>),
      navigationOptions: ({ navigation }) => ({
        header: null,
      }),
    },
    [screenNames.DETAILS]: {
      screen: () => (<ThemeProvider theme={theme}><Details /></ThemeProvider>),
      navigationOptions: ({ navigation }) => ({
        title: 'Task',
        // title: `${navigation.state.params.name}'s Profile'`,
        headerRight: (<EditButton />),
      }),
    },
    [screenNames.CREATE]: {
      screen: () => (<ThemeProvider theme={theme}><Create /></ThemeProvider>),
      navigationOptions: ({ navigation }) => ({
        title: 'Create Task',
      }),
    },
  },
  {
    initialRouteName: screenNames.HOME,
  },
);

const AppContainer = createAppContainer(AppNavigator);

const Root = props => (
  <Provider store={store}>
    <AppContainer
      ref={ navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }} {...props}
    />
  </Provider>
);

AppRegistry.registerComponent(appName, () => Root);
