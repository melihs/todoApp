
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,TextInput} from 'react-native';
import SendButton from './button';
import Todo from './src/database/models/Todo';

let id= function() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
    return v.toString(16);
  });
}
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
      'Double tap R on your keyboard to reload,\n' +
      'Shake or press menu button for dev menu',
});

const items = [];
type Props = {};
export default class App extends Component<Props> {
  state = {
    toDo : '',
    uniqId : id()
  }

  addItem = () =>{
    let model = new Todo();
    model.job = this.state.toDo;
    model.id = this.state.uniqId;
    model.save();
    items.push(this.state.toDo)
    this.setState({ toDo :''})
  }
  renderItem = (item) => {
    return (
        <View key={item} style={styles.items}>
          <Text>
            {item}
          </Text>
        </View>
    )
  }
  todo = (value) => {
    this.setState({
      toDo : value
    })
  }
  render() {
    return (
        <View style={styles.container}>
          <View style={styles.navbar}>
            <View style={styles.inputBar}>
              <TextInput style={styles.input} value={this.state.toDo} onChangeText={this.todo} placeholder='Görev yazın'/>
            </View>
            <View style={{flex:1}}>
              <SendButton onPress={this.addItem} text={'ekle'} />
            </View>
          </View>
          <View style={styles.hr}/>
          <ScrollView>
            { items.map((item) =>this.renderItem(item)) }
          </ScrollView>
        </View>
    );
  }
}
const styles = StyleSheet.create({
  navbar :{
    backgroundColor: '#ffffff',
    height: 100,
    flexDirection: 'row',
    padding:8
  },
  inputBar : {
    backgroundColor :'#d1d1ff',
    flex:4
  },
  input :{
    backgroundColor:'#ffffff',
    margin:1,
    height:82,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container : {
    flex:1,
    paddingTop:Platform.OS == 'ios' ? 40 : 0,
    backgroundColor : '#d1d1ff'
  },
  items: {
    height: 90,
    backgroundColor: '#ffffff',
    borderColor : '#000000',
    borderWidth : 1,
    margin:10,
    opacity : 15,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize:25,
  },
  hr : {
    height : 1,
    backgroundColor: '#000000',
    marginHorizontal :24,
    marginTop :15,
    marginBottom :10
  }
})