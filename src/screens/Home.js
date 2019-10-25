import React from 'react';
import {connect} from 'react-redux';
import styles from '../styles';
import {
  SafeAreaView,
  ScrollView,
  View,
  StatusBar,
  TextInput,
  ActivityIndicator,
  Picker,
  Image,
  FlatList,
} from 'react-native';  
import { Text, Button, ListItem, Icon, Divider } from 'react-native-elements';
import actions from '../core/actions';
import {screenNames, fields} from '../core/constants';

const mapStateToProps = state => ({
  tasks: state.tasks,
});

const mapDispatchToProps = dispatch => ({
  changeScreen: (screen, data) => dispatch(actions.changeScreen(screen, data)),
});

const Home = ({tasks, changeScreen}) => {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />

      <View style={styles.top}>
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
            onPress={() => changeScreen(screenNames.CREATE)}
            
          />
        </View>
        {/* <Divider style={{ backgroundColor: 'blue', height: 5 }} /> */}
      </View>
    
      <View style={styles.list} >
        <FlatList
          data={tasks}
          renderItem={({item}) => (
            <ListItem
              key={item[fields.NAME]}
              leftAvatar={{ source: { uri: item.avatar_url } }}
              leftElement={(
                <Icon
                  name='ac-unit'
                  type='MaterialIcons'
                  color='#517fa4'
                />
              )}
              title={item[fields.NAME]}
              subtitle={item[fields.DESCRIPTION]}
              bottomDivider
              onPress={(el) => changeScreen(screenNames.DETAILS, item) }
            />
          )}
        />
      </View>
        
    </SafeAreaView>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
