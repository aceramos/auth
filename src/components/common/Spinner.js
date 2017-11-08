import React, {Component} from 'react';
import {Text, View, StyleSheet, ActivityIndicator} from 'react-native';

export class Spinner extends Component {
    render() { 
      const {spinnerSize} = this.props;
      return (
        <View style={styles.spinnerStyle}>
            <ActivityIndicator size={spinnerSize || 'large'}/>
        </View>
      )
    }
  }
  
const styles = StyleSheet.create({
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    }
})
 