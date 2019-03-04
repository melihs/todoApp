import React, {Component} from 'react';
import {View,Text,TouchableOpacity,StyleSheet } from 'react-native';

class SendButton extends Component {
    render() {
        const {text,onPress} = this.props;
        return (
          <View style={styles.button}>
              <TouchableOpacity onPress={onPress} style={styles.touchable}>
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
    backgroundColor:'#5e5ec1',
    flex:1,
    borderRadius:5,
    margin:4
},
text : {
    fontSize:18,
    color:'#ffffff'
},
    touchable : {
    flex:1,
    justifyContent :'center',
    alignItems : 'center',
    }
})