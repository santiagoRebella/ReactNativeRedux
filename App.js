/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { connect } from 'react-redux';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  ActivityIndicator,
  Picker,
  Image
} from 'react-native';

const mapStateToProps = (state) => ({
  todos: state.todos,
})

const App = ({todos}) => {

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
          <View>
            
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
              onChangeText={text => onChangeText(text)}
              value={value}
            />

            <Picker
              selectedValue={lang}
              style={{height: 50, width: 100}}
              onValueChange={(itemValue, itemIndex) =>
                onChangeLang(itemValue)
              }>
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
                source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}
              />
            </View>
            
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: 'red',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: 'brown',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: 'green',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default connect(mapStateToProps)(App);