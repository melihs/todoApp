 /**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  renderItem = ()=>{
    return (
        <View style={{height: 100,backgroundColor:'black',margin:8,borderRadius:10,justifyContent:'center',alignItems:'center'}}>
            <Text style={{ color:'white',fontSize:24}}>
              Ders çalış
            </Text>
        </View>
    )
  }
  render() {
    return (
      <View style={{flex : 1,marginTop:Platform.OS == 'ios' ? 40 : 0}}>
      <View style={{backgroundColor: 'yellow',height: 100,flexDirection: 'row',padding:8}}>
        <View style={{backgroundColor :'blue', flex:4}}>
        </View>
        <View style={{backgroundColor :'red', flex:1}}>
        </View>
      </View>
        <ScrollView>
          {this.renderItem()}
          {this.renderItem()}
          {this.renderItem()}
          {this.renderItem()}
          {this.renderItem()}
          {this.renderItem()}
          {this.renderItem()}
        </ScrollView>

      </View>
    );
  }
}
