import React from 'react';
import {connect} from 'react-redux';
import styles from '../styles/styles';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import actions from '../core/actions';

import Task from '../components/Task';
import DetailsFooter from '../components/DetailsFooter';

const mapStateToProps = state => ({
  task: state.task,
});

const mapDispatchToProps = dispatch => ({
  updateTask: (field, data) => dispatch(actions.updateTask(field, data)),
  saveTask: (task) => dispatch(actions.saveTask(task)),
});

const Details = ({task, updateTask, saveTask}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <Task task={task} updateTask={updateTask} disableAll={!task.editMode} />
      {task.editMode && <DetailsFooter task={task} updateTask={updateTask} saveTask={saveTask} />}
    </SafeAreaView>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Details);
