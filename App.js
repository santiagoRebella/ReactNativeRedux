import React from 'react';
import {connect} from 'react-redux';
import styles from './src/styles';
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

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  add: () => dispatch('AN ACTION'),
});

const App = ({todos, navigation}) => {
  const [value, onChangeText] = React.useState('Useless Placeholder');
  const [lang, onChangeLang] = React.useState('Useless Placeholder');

  return (
    <>
      <StatusBar barStyle="dark-content" animated={true} />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View
            style={{
              flexDirection: 'row',
              height: 100,
              padding: 20,
            }}>
            <View style={{backgroundColor: 'blue', flex: 0.3}} />
            <View style={{backgroundColor: 'red', flex: 0.5}} />
            <Text>{value}</Text>

            <Text>{lang}</Text>
          </View>

          <View>
            <Text>{todos}</Text>
          </View>

          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={{flex: 1}}>
            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={text => onChangeText(text)}
              value={value}
            />

            <Picker
              selectedValue={lang}
              style={{height: 50, width: 100}}
              onValueChange={(itemValue, itemIndex) => onChangeLang(itemValue)}>
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>

            <View style={[styles.container, styles.horizontal]}>
              <ActivityIndicator size="large" color="#0000ff" />
              <ActivityIndicator size="small" color="#00ff00" />
              <ActivityIndicator size="large" color="#0000ff" />
              <ActivityIndicator size="small" color="#00ff00" />
            </View>
            <View style={[styles.container, styles.horizontal]}>
              <Image
                style={{width: 150, height: 150}}
                source={{
                  uri:
                    'https://facebook.github.io/react-native/img/tiny_logo.png',
                }}
              />
            </View>
            <View>
              <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Test')}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
