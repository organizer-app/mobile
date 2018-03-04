import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
import HomePage from "../homePage/homePage.component";
import {Actions} from "react-native-router-flux";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
class LoginPage extends Component {

  constructor(props) {
    super(props);
    this.state = { user: null };
  }

  componentDidMount() {
    this._setupGoogleSignin();
  }

  _setupGoogleSignin() {
    try {
      GoogleSignin.configure({
        iosClientId: '153497318804-fv3cc14468utuqri4g6upju4mvodr0a0.apps.googleusercontent.com',
        offlineAccess: false,
      });
    }
    catch(err) {
      console.log('Google signin error', err.code, err.message);
    }
  }

  _signIn() {
    GoogleSignin.signIn().then((user) => {
      console.log(user);
      this.setState({ user: user });
    }).catch((err) => {
      console.log('WRONG SIGNIN', err);
    }).done();
  }

  _sendTokenToAndy(user) {
    fetch('https://organizer-server.herokuapp.com/authenticate', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: user.idToken,
      }),
    }).then(function(response){
      return response.json();
    }).then(function(data){
      console.log(data)
    });
  }

  render() {
    const { user } = this.state;
    const goToHomePage = () => Actions.home();

    if (!user) {
      return (
        <View style={styles.container}>
          <GoogleSigninButton
            style={{ width: 312, height: 48 }}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={this._signIn.bind(this)}
          />
        </View>
      );
    }
    else {
      this._sendTokenToAndy(user);
      return (
        <View style={styles.container}>
          <Text>You're logged in!</Text>
          <Button
            title="Go to home screen"
            onPress={goToHomePage}
          />
        </View>

      );
    }
  }
}

export default LoginPage;
