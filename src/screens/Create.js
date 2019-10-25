import React from 'react';
import {connect} from 'react-redux';
import styles from '../styles';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  ActivityIndicator,
  Picker,
  Image,
  Button,
} from 'react-native';
import { CheckBox, Input, Icon, ButtonGroup } from 'react-native-elements';
import actions from '../core/actions';
import { fields } from '../core/constants';

const mapStateToProps = state => ({
  task: state.task,
});

const mapDispatchToProps = dispatch => ({
  updateTask: (field, data) => dispatch(actions.updateTask(field, data)),
  saveTask: (task) => dispatch(actions.saveTask(task)),
});

const Create = ({task, updateTask, saveTask}) => {
  console.log((task[fields.NAME + '_ERROR'] || task[fields.DESCRIPTION + '_ERROR']));
  return (
      <SafeAreaView style={styles.container}>
        <StatusBar hidden />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
            <Input
              onChangeText={text => updateTask(fields.NAME, text)}
              placeholder='Name'
              errorStyle={{ color: 'red' }}
              value={task[fields.NAME]}
              errorMessage={task[fields.NAME + '_ERROR']}
            />

            <Input
              placeholder='Description'
              multiline={true}
              numberOfLines={3}
              onChangeText={text => updateTask(fields.DESCRIPTION, text)}
              value={task[fields.DESCRIPTION]}
              errorStyle={{ color: 'red' }}
              errorMessage={task[fields.DESCRIPTION + '_ERROR']}
            />

            <ButtonGroup
              onPress={(index) => updateTask(fields.PRIORITY, index)}
              selectedIndex={task[fields.PRIORITY]}
              buttons={['Low', 'Medium', 'High']}
              containerStyle={{height: 50}}
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
              <View>
                <CheckBox
                  title='Click Here'
                  checked={true}
                />
              </View>
              <View>
                <CheckBox
                  center
                  title='Click Here'
                  checked={true}
                />
              </View>
              <View>
                <CheckBox
                  center
                  title='Click Here'
                  checkedIcon='dot-circle-o'
                  uncheckedIcon='circle-o'
                  checked={true}
                />
              </View>
            </View>
            <View style={{alignSelf: "stretch", justifyContent: "center", flex: 1}} >
              <Button
                buttonStyle={{ height: "100%", borderRadius: 0}}
                icon={
                  <Icon
                    name="add"
                    type="MaterialIcons"
                    size={20}
                    color="white"
                  />
                }
                title="Save Task"
                disabled={(!task[fields.NAME] || task[fields.NAME + '_ERROR'] || task[fields.DESCRIPTION + '_ERROR']) ? true : false}
                onPress={() => saveTask(task)}
                
              />
            </View>
            <View style={{marginBottom: 'auto', flex: 1,flexGrow: 1,flexDirection: 'column'}}>
              <CheckBox
                center
                title='Click Here to Remove This Item'
                iconRight
                iconType='material'
                checkedIcon='clear'
                uncheckedIcon='add'
                checkedColor='red'
                checked={false}
              />
              <CheckBox
                center
                title='Click Here to resolve This Item'
                iconRight
                iconType='material'
                checkedIcon='save'
                uncheckedIcon='add'
                checkedColor='green'
                checked={true}
              />
            </View>
            

          

        </ScrollView>
      </SafeAreaView>

  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Create);
