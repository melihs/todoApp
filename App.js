
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,TextInput} from 'react-native';
import SendButton from './button';

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
        <View style={{height: 100,backgroundColor:'black',margin:Platform.OS == 'ios' ? 30 : 0,borderRadius:10,justifyContent:'center',alignItems:'center'}}>
            <Text style={{ color:'white',fontSize:24}}>
              Ders çalış
            </Text>
        </View>
    )
  }
  render() {
    return (
      <View style={{flex:1,marginTop:Platform.OS == 'ios' ? 40 : 0}}>
      <View style={{backgroundColor: 'white',height: 100,flexDirection: 'row',padding:8}}>
        <View style={{backgroundColor :'#7eef7c', flex:4,borderRadius:7}}>
          <TextInput placeholder='görev yazın' style={{backgroundColor:'white',margin:2,height:75,borderRadius:3}}/>
        </View>
        <View style={{flex:1}}>
          <SendButton text={'ekle'} />
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
const styles = StyleSheet.create([



])