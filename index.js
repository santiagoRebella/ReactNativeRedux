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
import { ThemeProvider, Button } from 'react-native-elements';
import { screenNames } from './src/core/constants';
import { theme } from './src/styles/styles';
import EditButton from './src/components/EditButton';

export const AppNavigator = createStackNavigator(
  {
    [screenNames.HOME]: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        header: null,
      }),
    },
    [screenNames.DETAILS]: {
      screen: Details,
      navigationOptions: ({ navigation }) => ({
        title: "Task Details",
        // title: `${navigation.state.params.name}'s Profile'`,
        headerRight: ( <EditButton /> ),
      }),
    },
    [screenNames.CREATE]: {
      screen: Create,
      navigationOptions: ({ navigation }) => ({
        title: "Create Task",
        // title: `${navigation.state.params.name}'s Profile'`,
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
    <ThemeProvider theme={theme}>
      <AppContainer ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }} {...props} />
    </ThemeProvider>
  </Provider>
);

AppRegistry.registerComponent(appName, () => Root);
