
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,TextInput} from 'react-native';
import SendButton from './button';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const items = [];
type Props = {};
export default class App extends Component<Props> {
  state = { toDo : ''}

  addItem = () =>{
    items.push(this.state.toDo)
    this.setState({ toDo :''})
  }
  renderItem = (item) => {
    return (
        <View key={item} style={styles.items}>
            <Text style={{ color:'white',fontSize:24}}>
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
          <TextInput value={this.state.toDo} onChangeText={this.todo} placeholder='görev yazın' style={styles.input}/>
        </View>
        <View style={{flex:1}}>
          <SendButton onPress={this.addItem} text={'ekle'} />
        </View>
      </View>
        <ScrollView>
          {
            items.map((item) =>this.renderItem(item))
          }
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
    backgroundColor :'#ff0c2c',
    flex:4
  },
  input :{
    backgroundColor:'white',
    margin:1,
    height:82,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container : {
    flex:1,
    marginTop:Platform.OS == 'ios' ? 40 : 0
  },
  items: {
    height: 100,
    backgroundColor: 'black',
    margin: Platform.OS == 'ios' ? 40 : 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
})