import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const styles = require('../style.js');

class ListPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      text:null,
      loading:true,
    }
  }


  render() {
    if (!this.state.loading){
      return(<View><Text>Loading</Text></View>);
    }else {
      return (
        <View style={styles.container}>

        <TextInput
          style={{margin:15,height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />

        <View style={{flex:0}}>
          <TouchableOpacity onPress={()=>{
            this.setState({loading:false});
            // List için hazırlanan actionu tetikler.
            this.props.list.action.addList(this.state.text);
            this.setState({loading:true,text:null});
          }}>
            <Text style={styles.textstyle1}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={{flex:1,width:300}}>
          <Text style={styles.h1}>
            Listeler
          </Text>
          <View>
          {this.props.list.store.lists.map((value,index)=>
            <View style={{flex:1,flexDirection:'row',padding:5,paddingRight:10,paddingLeft:10,borderBottomWidth:1,borderColor:"#eee"}}>
              <Text style={{flex:1,}}>{value}</Text>
              <TouchableOpacity
                onPress={()=>{
                  this.setState({loading:false});
                  this.props.list.action.removeList(index);
                  this.setState({loading:true});
                }} style={{flex:0,}}>
                  <Text style={{fontWeight:"bold"}}>Sil</Text>
              </TouchableOpacity>
            </View>
          )}
          </View>
        </View>
        </View>
      );
    }

  }
}

module.exports = ListPage;
