import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import firebase from 'firebase';

import {Button, Card, CardSection, Input, Spinner} from './common';

export class LoginForm extends Component {
    constructor() {
      super()
      this.state = {
        email: '',
        password: '',
        msg: '', 
        loading: false
      }
    }

    onButtonPress() {
      const {email, password} = this.state;
      this.setState({msg: '', loading: true})
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this)).catch(() => {
          firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this)).catch(this.onLoginFail.bind(this))
        }) 
    }

    onLoginSuccess() { 
      this.setState({
        email:'', 
        password:'', 
        msg:'Login Successfull', 
        loading: false
      })
    }

    onLoginFail() {
      this.setState({
        msg:'Authentication Failed', 
        loading: false
      })
    }

    renderButton() {
      if(this.state.loading) {
        return (
          <Spinner spinnerSize="small"/>
        )
      } else {
        return (
          <Button onPress={this.onButtonPress.bind(this)} flex={1}>
            Login
          </Button>
        )
      }
    }

    render() {  
      const {textViewStyle, msgTextStyle} = styles;
      return (
        <Card>
               <CardSection>
                    <Input  
                      label={'Email'}
                      value={this.state.email}
                      onChangeText={(email) => this.setState({email: email})} 
                      placeholder={'user@email.com'}
                      secureTextEntry={false}
                    />
               </CardSection>

               <CardSection>
                    <Input 
                      label={'Password'}
                      placeholder={'password'}
                      value={this.state.password}
                      onChangeText={(password) => this.setState({password: password})}
                      secureTextEntry={true}
                    />
               </CardSection> 

              <View style={textViewStyle}>
                <Text style={msgTextStyle}>
                      {this.state.msg}
                </Text> 
              </View>
               <CardSection>
                    {this.renderButton()}
               </CardSection>
        </Card>
      )
    }
  }

const styles = StyleSheet.create({
  msgTextStyle: {
    alignSelf: 'center',
    fontSize: 18,
    paddingTop: 1,
    color: 'red',
  },
  textViewStyle: {
    backgroundColor: 'white'
  }
})