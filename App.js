import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import firebase from 'firebase';  

import {Header, Button, Spinner, Card, CardSection} from './src/components/common';
import {LoginForm} from './src/components/LoginForm';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: null,
    }
  }

  componentWillMount() {
    var config = {
      apiKey: "AIzaSyBl701_Nb1zFyqxIg80POG2sPFMpLGhHAk",
      authDomain: "auth-8e91b.firebaseapp.com",
      databaseURL: "https://auth-8e91b.firebaseio.com",
      projectId: "auth-8e91b",
      storageBucket: "auth-8e91b.appspot.com",
      messagingSenderId: "289429075719"
    };
    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged((user)=>{
      if(user) {
        this.setState({isLoggedIn:true})
      } else {
        this.setState({isLoggedIn:false})
      }
    })
  }

  renderContent() {
    switch(this.state.isLoggedIn){
      case true:
        return ( 
          <Card>
            <CardSection>
              <Button onPress={()=> firebase.auth().signOut()}>
                Log Out
              </Button> 
            </CardSection>
          </Card>
        )
      case false:
        return (
          <LoginForm />
        )
      default:
        return ( 
              <Spinner spinnerSize="large"/>
        )
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Header headerText={'Authentication'}/>
          {this.renderContent()}
      </View>
    )
  }
}
