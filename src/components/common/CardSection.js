import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
  
export class CardSection extends Component {
  render() {
    return (
      <View style={styles.containerStyle}> 
        {this.props.children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
    containerStyle: {
      borderBottomWidth: 1,
      padding: 5,
      backgroundColor: '#FFF',
      justifyContent: 'flex-start',
      flexDirection: 'row',
      borderColor: '#DDD',
      position: 'relative'
    }
})
 