import React from 'react';
import {connect} from 'react-redux';
import styles from '../styles/styles';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import actions from '../core/actions';

import Task from '../components/Task';
import CreateFooter from '../components/CreateFooter';

const mapStateToProps = state => ({
  task: state.task,
});

const mapDispatchToProps = dispatch => ({
  updateTask: (field, data) => dispatch(actions.updateTask(field, data)),
  saveTask: (task) => dispatch(actions.saveTask(task)),
});

const Create = ({task, updateTask, saveTask}) => {
  return (
      <SafeAreaView style={styles.container}>
        <StatusBar hidden />
        <Task task={task} updateTask={updateTask} saveTask={saveTask} />
        <CreateFooter task={task} saveTask={saveTask} />
      </SafeAreaView>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Create);
