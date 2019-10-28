import React from 'react';
import { connect } from 'react-redux';
import { Button, ThemeProvider } from 'react-native-elements';
import actions from '../core/actions';
import { OpenLockIcon, ClosedLockIcon} from '../styles/icons';
import { theme } from '../styles/styles';

const mapStateToProps = state => ({
  editMode: state.task.editMode,
});

const mapDispatchToProps = dispatch => ({
  toggleEditMode: () => dispatch(actions.toggleEditMode()),
});

const EditButton = ({editMode, toggleEditMode}) => {
  return (
    <ThemeProvider theme={theme} >
      <Button
        onPress={() => toggleEditMode()}
        icon={editMode ? OpenLockIcon : ClosedLockIcon}
        containerStyle={theme.LockButtonContainer}
      />
    </ThemeProvider>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditButton);
