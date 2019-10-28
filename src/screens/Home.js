import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import { theme } from '../styles/styles';
import {
  SafeAreaView,
  View,
  StatusBar,
} from 'react-native';
import { Button } from 'react-native-elements';
import actions from '../core/actions';
import { screenNames } from '../core/constants';
import TaskList from '../components/TaskList';
import { AddToListIcon } from '../styles/icons';

const mapStateToProps = state => ({
  tasks: state.tasks,
});

const mapDispatchToProps = dispatch => ({
  changeScreen: (screen, data) => dispatch(actions.changeScreen(screen, data)),
  initApp: () => dispatch(actions.initApp()),
});

const Home = ({tasks, changeScreen, initApp}) => {
  useEffect(() => {
    initApp();
  }, []);

  return (
    <SafeAreaView style={theme.layout.home.container}>
      <StatusBar hidden={true} translucent={true} />
      <Button
        buttonStyle={theme.ActionButton}
        icon={<AddToListIcon />}
        onPress={() => changeScreen(screenNames.CREATE)}
      />
      <View style={theme.layout.home.list} >
        <TaskList tasks={tasks} changeScreen={changeScreen} />
      </View>
    </SafeAreaView>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
