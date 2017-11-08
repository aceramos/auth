import React, {Component} from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';
 
export class Input extends Component {
  render() { 
    const {label, onChangeText, placeholder, secureTextEntry, value} = this.props;
    const {inputStyle, labelStyle, containerStyle} = styles;

    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput 
                autoCorrect={false} 
                style={inputStyle} 
                underlineColorAndroid='transparent'
                onChangeText={onChangeText}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                value={value}
            />  
        </View>
    )
  }
}

const styles = StyleSheet.create({
     inputStyle: {
         color: '#000',
         paddingRight: 5,
         paddingLeft: 5,
         fontSize: 14,
         lineHeight: 23,
         height: 40,
         width: '100%',
         flex: 2
     },
     labelStyle: {
         fontSize: 14,
         paddingLeft:20,
         flex: 1
     },
     containerStyle: {
         height:50,
         flex: 1,
         flexDirection: 'row',
         alignItems: 'center'
     }
})