import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

var ListPage = require('./App/Components/ListPage.js');

import { List } from './App/Store/List.js';
import { Configs } from './App/config.js';


// mainProps Değişkeni ile Configs, List vs gibi tüm storeleri
// alt Componentlere aktarımını daha rahat sağlar.

// var mainProps = {
//   list:List,
//   ...Configs,
// };

export default class RNACS extends Component {

  render() {
    return(<ListPage list={List} />)
  }

}

AppRegistry.registerComponent('RNACS', () => RNACS);
