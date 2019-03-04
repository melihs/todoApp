import React, {Component} from 'react';
import {View,Text,TouchableOpacity,StyleSheet } from 'react-native';

class SendButton extends Component {
    render() {
        const {text} = this.props;
        return (
          <View style={styles.button}>
              <TouchableOpacity style={styles.touchable}>
                  <Text style={styles.text}>
                      {text}
                  </Text>
              </TouchableOpacity>
          </View>
        );
    }
}

export default SendButton;

const styles = StyleSheet.create({
button : {
    backgroundColor:'#5c9fed',
    flex:1,
    borderRadius: 12,
    margin:4
},
text : {
    fontSize:16,
    color:'white'
},
    touchable : {
    flex:1,
    justifyContent :'center',
    alignItems : 'center',
    }
})