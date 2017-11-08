import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export class Header extends Component {
    render() { 
      return (
        <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>{this.props.headerText}</Text>    
        </View>
      )
    }
  }
  
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20
    },
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 2,
        height: 60,
        elevation: 5,
        position: 'relative'
    }

})
 