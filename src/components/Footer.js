import React from 'react';
import { theme } from '../styles/styles';
import { View } from 'react-native';
import { CheckBox, Button } from 'react-native-elements';
import { fields } from '../core/constants';
import { AddIcon } from '../styles/icons';

const TaskFormEditButtons = ({footerType, task, updateTask, saveChanges}) => {
  const colorState = task[fields.REMOVE] ? theme.colors.danger : (task[fields.DONE] ? theme.colors.success : theme.colors.primary);
  const isDisabled = (
    !task[fields.NAME] ||
    task[fields.NAME + '_ERROR'] ||
    task[fields.DESCRIPTION + '_ERROR']
  ) ? true : false;

  return (
    <View style={theme.layout.task.footer}>
    {(footerType === 'edit' && task.editMode) && (
      <>
        <CheckBox
          center
          title="Remove this task"
          iconRight
          iconType="material"
          checkedIcon="clear"
          uncheckedIcon="add"
          checkedColor={theme.colors.danger}
          checked={task[fields.REMOVE]}
          disabled={task[fields.DONE]}
          onPress={() => updateTask(fields.REMOVE, !task[fields.REMOVE])}
        />
        <CheckBox
          center
          title="Resolve this task"
          iconRight
          iconType="material"
          checkedIcon="check"
          uncheckedIcon="add"
          checkedColor="green"
          checked={task[fields.DONE]}
          disabled={task[fields.REMOVE]}
          onPress={() => updateTask(fields.DONE, !task[fields.DONE])}
        />
        <Button
          title="Apply Changes"
          buttonStyle={{...theme.ActionButton, backgroundColor: colorState}}
          icon={<AddIcon/>}
          disabled={isDisabled}
          onPress={() => saveChanges(task)}
        />
      </>
    )}

    {footerType === 'create' && (
      <Button
        buttonStyle={theme.ActionButton}
        icon={<AddIcon/>}
        title="Save Task"
        disabled={isDisabled}
        onPress={() => saveChanges(task)}
      />
    )}
    </View>
  );
};

export default TaskFormEditButtons;
