import React from 'react';
import styles from '../styles/styles';
import {
  View,
} from 'react-native';
import { Button } from 'react-native-elements';
import { fields } from '../core/constants';
import { AddIcon } from '../styles/icons';

const TaskCreateFooter = ({task, saveTask}) => {
  const isDisabled = (
    !task[fields.NAME] ||
    task[fields.NAME + '_ERROR'] ||
    task[fields.DESCRIPTION + '_ERROR']
  ) ? true : false;
  return (
    <View style={{alignSelf: "stretch", justifyContent: "flex-end", flex: 1}} >
      <Button
        buttonStyle={{ borderRadius: 0}}
        icon={<AddIcon/>}
        title="Save Task"
        disabled={isDisabled}
        onPress={() => saveTask(task)}
      />
    </View>
  );
};

export default TaskCreateFooter;
