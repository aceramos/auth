import React, {Component} from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
 
export class Button extends Component {
  render() {
    const {buttonStyle, textStyle} = styles;
    const { onPress, children } = this.props;
    return (
        <TouchableOpacity style={buttonStyle} onPress={() => onPress()}>
            <Text style={textStyle}>{children}</Text>
        </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
    buttonStyle: {
        width: '100%',
        alignSelf: 'stretch',
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#007AFF',
        marginLeft: 2,
        marginRight: 2
    },
    textStyle: {
        alignSelf: 'center',
        color: '#007AFF',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
})