import React from 'react';
import { theme } from '../styles/styles';
import {
  ScrollView,
  View,
} from 'react-native';
import { CheckBox, Input, ButtonGroup, Text, Divider } from 'react-native-elements';
import { fields } from '../core/constants';
import Footer from '../components/Footer';

const Task = ({task, saveChanges, updateTask, disableAll, footer}) => {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={theme.layout.task.scrollViewContainer}
    >
      <Divider style={theme.bigDivider} />

      <Input
        onChangeText={text => updateTask(fields.NAME, text)}
        placeholder="Name"
        errorStyle={theme.errorColor}
        value={task[fields.NAME]}
        errorMessage={task[fields.NAME + '_ERROR']}
        disabled={disableAll}
      />

      <Divider />

      <Input
        placeholder="Description"
        multiline={true}
        numberOfLines={3}
        onChangeText={text => updateTask(fields.DESCRIPTION, text)}
        value={task[fields.DESCRIPTION]}
        errorStyle={theme.errorColor}
        errorMessage={task[fields.DESCRIPTION + '_ERROR']}
        disabled={disableAll}
      />

      <Divider />

      <View style={theme.layout.task.buttonGroupContainer}>
        <Text style={theme.label}>Priority</Text>
        <View style={{flexGrow: 1}} >
          <ButtonGroup
            onPress={(index) => updateTask(fields.PRIORITY, index)}
            selectedIndex={task[fields.PRIORITY]}
            buttons={['Low', 'Medium', 'High']}
            disabled={disableAll}
          />
        </View>
      </View>

      <Divider />

      <View style={theme.layout.task.radioGroupContainer}>
        <Text style={theme.label}>Difficulty</Text>
        
        <CheckBox
          center
          title="easy"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={task[fields.DIFFICULTY] === 'easy'}
          onPress={() => updateTask(fields.DIFFICULTY, 'easy')}
          disabled={disableAll}
        />
        <CheckBox
          center
          title="normal"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          onPress={() => updateTask(fields.DIFFICULTY, 'normal')}
          checked={task[fields.DIFFICULTY] === 'normal'}
          disabled={disableAll}
        />
        <CheckBox
          center
          title="hard"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          onPress={() => updateTask(fields.DIFFICULTY, 'hard')}
          checked={task[fields.DIFFICULTY] === 'hard'}
          disabled={disableAll}
        />
      </View>

      <Divider />

      <View style={theme.layout.task.checkBoxContainer}>
        <CheckBox
          title="AVOIDABLE"
          checked={task[fields.AVOIDABLE]}
          disabled={disableAll}
          onPress={() => updateTask(fields.AVOIDABLE, !task[fields.AVOIDABLE])}
        />

        <CheckBox
          center
          title="ON HOLD"
          checked={task[fields.HOLD]}
          disabled={disableAll}
          onPress={() => updateTask(fields.HOLD, !task[fields.HOLD])}
        />
      </View>

      <Divider />

      <Footer task={task} updateTask={updateTask} saveChanges={saveChanges} footerType={footer} />

    </ScrollView>
  );
};

export default Task;
