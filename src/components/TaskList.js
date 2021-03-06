import React from 'react';
import {FlatList} from 'react-native';
import {Text, ListItem} from 'react-native-elements';
import Tooltip from 'rne-modal-tooltip';
import {screenNames, fields} from '../core/constants';
import {
  PriorityLowIcon,
  PriorityMediumIcon,
  PriorityHighIcon,
  CoffeeIcon,
  PauseIcon,
  CheckmarkIcon,
} from '../styles/icons';

const priorityIconsArray = [
  <Tooltip withOverlay={false} popover={<Text>Low Priority</Text>}>
    <PriorityLowIcon />
  </Tooltip>,
  <Tooltip withOverlay={false} popover={<Text>Medium Priority</Text>}>
    <PriorityMediumIcon />
  </Tooltip>,
  <Tooltip withOverlay={false} popover={<Text>High Priority</Text>}>
    <PriorityHighIcon />
  </Tooltip>,
];

const DoneCheckmark = () => (
  <Tooltip withOverlay={false} popover={<Text>Done</Text>}>
    <CheckmarkIcon />
  </Tooltip>
);

const TaskList = ({tasks, changeScreen}) => {
  return (
    <FlatList
      data={tasks}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <ListItem
          leftElement={
            item[fields.DONE]
              ? DoneCheckmark
              : priorityIconsArray[item[fields.PRIORITY]]
          }
          title={item[fields.NAME]}
          subtitle={item[fields.DESCRIPTION]}
          bottomDivider
          onPress={el => changeScreen(screenNames.DETAILS, item)}
          badge={
            item[fields.DIFFICULTY]
              ? {
                  value: item[fields.DIFFICULTY],
                  status:
                    (item[fields.DIFFICULTY] === 'easy' && 'success') ||
                    (item[fields.DIFFICULTY] === 'normal' && 'warning') ||
                    (item[fields.DIFFICULTY] === 'hard' && 'error'),
                }
              : undefined
          }
          rightIcon={
            <>
              {item[fields.HOLD] && (
                <Tooltip
                  withOverlay={false}
                  popover={<Text>This is on hold</Text>}>
                  <PauseIcon />
                </Tooltip>
              )}
              {item[fields.AVOIDABLE] && (
                <Tooltip
                  withOverlay={false}
                  popover={<Text>This is avoidable</Text>}>
                  <CoffeeIcon />
                </Tooltip>
              )}
            </>
          }
        />
      )}
    />
  );
};

export default TaskList;
