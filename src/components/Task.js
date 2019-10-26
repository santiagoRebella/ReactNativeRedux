import React from 'react';
import styles from '../styles/styles';
import {
  ScrollView,
  View,
} from 'react-native';
import { CheckBox, Input, ButtonGroup } from 'react-native-elements';
import { fields } from '../core/constants';

const Task = ({task, updateTask, disableAll}) => {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollView}>

        <Input
          onChangeText={text => updateTask(fields.NAME, text)}
          placeholder='Name'
          errorStyle={{ color: 'red' }}
          value={task[fields.NAME]}
          errorMessage={task[fields.NAME + '_ERROR']}
          disabled={disableAll}
        />

        <Input
          placeholder='Description'
          multiline={true}
          numberOfLines={3}
          onChangeText={text => updateTask(fields.DESCRIPTION, text)}
          value={task[fields.DESCRIPTION]}
          errorStyle={{ color: 'red' }}
          errorMessage={task[fields.DESCRIPTION + '_ERROR']}
          disabled={disableAll}
        />

        <ButtonGroup
          onPress={(index) => updateTask(fields.PRIORITY, index)}
          selectedIndex={task[fields.PRIORITY]}
          buttons={['Low', 'Medium', 'High']}
          containerStyle={{height: 50}}
          disabled={disableAll}
        />

        {/* <Picker
          selectedValue={lang}
          style={{height: 50, width: 100}}
          onValueChange={(itemValue, itemIndex) => updateTask('PICKER_INPUT', itemValue)}>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker> */}

        <View style={{
          flex: 1,
          flexGrow: 1,
          paddingHorizontal: 10,
          alignItems: 'stretch',
          alignContent: 'center',
          justifyContent: 'space-around',
          flexDirection: 'row'
        }}>

          <CheckBox
            title='AVOIDABLE'
            checked={task[fields.AVOIDABLE]}
            disabled={disableAll}
            onPress={() => updateTask(fields.AVOIDABLE, !task[fields.AVOIDABLE])}
          />

          <CheckBox
            center
            title='ON HOLD'
            checked={task[fields.HOLD]}
            disabled={disableAll}
            onPress={() => updateTask(fields.HOLD, !task[fields.HOLD])}
          />

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
        <View style={{
          flex: 1,
          flexGrow: 1,
          paddingHorizontal: 10,
          alignItems: 'baseline',
          alignContent: 'center',
          justifyContent: 'space-around',
          flexDirection: 'row'
        }}>

          <CheckBox
            title='AVOIDABLE'
            checked={task[fields.AVOIDABLE]}
            disabled={disableAll}
            onPress={() => updateTask(fields.AVOIDABLE, !task[fields.AVOIDABLE])}
          />

          <CheckBox
            center
            title='ON HOLD'
            checked={task[fields.HOLD]}
            disabled={disableAll}
            onPress={() => updateTask(fields.HOLD, !task[fields.HOLD])}
          />

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
        
    </ScrollView>
  );
};

export default Task;
