import {StyleSheet, YellowBox} from 'react-native';

export const theme = {
  Button: {
    raised: true,
  },
  Input: {
    containerStyle: { marginVertical: 10 },
  },
};

export const layout = {

};

export default StyleSheet.create({
  layout: {
    
  },
  container: {
    justifyContent: "space-evenly",
    height: '100%',
  },

  list:{
    flex: 90,
    backgroundColor: "whitesmoke",
    
  },
  // item: {
  //   flex: 1,
  // },
  top: {
    flex: 10,
    alignContent: "stretch",
    alignItems: "stretch",
    justifyContent: "space-evenly"
  },



  scrollView: {
    backgroundColor: 'white',
    flex: 1
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
