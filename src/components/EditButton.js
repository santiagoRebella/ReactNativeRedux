import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import actions from '../core/actions';

const mapStateToProps = state => ({
  editMode: state.task.editMode,
});

const mapDispatchToProps = dispatch => ({
  toggleEditMode: () => dispatch(actions.toggleEditMode()),
});

const EditButton = ({editMode, toggleEditMode}) => {
  return (
    editMode ? <></> : <Button
      onPress={() => toggleEditMode()}
      title="Edit"
    />
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditButton);
