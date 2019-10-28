import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { connect } from 'react-redux';
import actions from '../core/actions';
import { theme } from '../styles/styles';
import Task from '../components/Task';

const mapStateToProps = state => ({
  task: state.task,
});

const mapDispatchToProps = dispatch => ({
  updateTask: (field, data) => dispatch(actions.updateTask(field, data)),
  saveChanges: (task) => dispatch(actions.saveChanges(task)),
});

const Create = ({task, updateTask, saveChanges}) => {
  return (
    <SafeAreaView style={theme.layout.task.container}>
      <StatusBar hidden />
      <Task
        task={task}
        updateTask={updateTask}
        saveChanges={saveChanges}
        footer="create"
      />
    </SafeAreaView>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Create);
