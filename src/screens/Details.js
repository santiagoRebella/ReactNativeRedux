import React from 'react';
import { connect } from 'react-redux';
import { theme } from '../styles/styles';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import actions from '../core/actions';
import Task from '../components/Task';

const mapStateToProps = state => ({
  task: state.task,
});

const mapDispatchToProps = dispatch => ({
  updateTask: (field, data) => dispatch(actions.updateTask(field, data)),
  saveChanges: (task) => dispatch(actions.saveChanges(task)),
});

const Details = ({task, updateTask, saveChanges}) => {
  return (
    <SafeAreaView style={theme.layout.task.container}>
      <StatusBar hidden />
      <Task
        task={task}
        saveChanges={saveChanges}
        updateTask={updateTask}
        disableAll={!task.editMode}
        footer={'edit'}
      />
    </SafeAreaView>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Details);
