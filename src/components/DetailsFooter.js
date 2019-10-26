import React from 'react';
import styles from '../styles/styles';
import { View } from 'react-native';
import { CheckBox, Button } from 'react-native-elements';
import { fields } from '../core/constants';
import { AddIcon } from '../styles/icons';

const TaskFormEditButtons = ({task, updateTask, saveTask}) => {
  const colorState = task[fields.REMOVE] ? 'tomato' : (task[fields.DONE] ? 'green' : 'blue');
  return (
    <View style={{ flex: 1,flexDirection: 'column'}}>
      <CheckBox
        center
        title='Remove this task'
        iconRight
        iconType='material'
        checkedIcon='clear'
        uncheckedIcon='add'
        checkedColor='red'
        checked={task[fields.REMOVE]}
        disabled={task[fields.DONE]}
        onPress={() => updateTask(fields.REMOVE, !task[fields.REMOVE])}
      />
      <CheckBox
        center
        title='Resolve this task'
        iconRight
        iconType='material'
        checkedIcon='check'
        uncheckedIcon='add'
        checkedColor='green'
        checked={task[fields.DONE]}
        disabled={task[fields.REMOVE]}
        onPress={() => updateTask(fields.DONE, !task[fields.DONE])}
      />
      <Button
        title="Apply Changes"
        buttonStyle={{ height: "100%", borderRadius: 0, backgroundColor: colorState}}
        icon={<AddIcon/>}
        disabled={(!task[fields.NAME] || task[fields.NAME + '_ERROR'] || task[fields.DESCRIPTION + '_ERROR']) ? true : false}
        onPress={() => saveTask(task)}
      />
    </View>
  );
};

export default TaskFormEditButtons;
