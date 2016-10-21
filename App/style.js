'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Dimensions
} = React;

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  h1:{
    fontSize:22,
  },
  textstyle1:{
    fontSize:22,
    color:"blue",
    textAlign:'center',
    alignItems:'center',
    paddingTop:1,
    justifyContent:'center',
    borderWidth:2,
    borderColor:"blue",
    borderRadius:15,
    width:30,
    height:30,
  },
});
