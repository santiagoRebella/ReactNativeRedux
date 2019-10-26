import React from 'react';
import {connect} from 'react-redux';
import styles from '../styles/styles';
import {
  SafeAreaView,
  View,
  StatusBar,
} from 'react-native';  
import { Button } from 'react-native-elements';
import actions from '../core/actions';
import { screenNames } from '../core/constants';
import TaskList from '../components/TaskList';
import { AddToListIcon } from '../styles/icons';

const mapStateToProps = state => ({
  tasks: state.tasks,
});

const mapDispatchToProps = dispatch => ({
  changeScreen: (screen, data) => dispatch(actions.changeScreen(screen, data)),
});

const Home = ({tasks, changeScreen}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} translucent={true} />

      <View style={styles.top}>
        <View style={{alignSelf: "stretch", justifyContent: "center", flex: 1}} >
          <Button
            buttonStyle={{ height: "100%", borderRadius: 0}}
            icon={<AddToListIcon />}
            onPress={() => changeScreen(screenNames.CREATE)}
          />
        </View>
      </View>
    
      <View style={styles.list} >
        <TaskList tasks={tasks} changeScreen={changeScreen} />
      </View>
        
    </SafeAreaView>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
