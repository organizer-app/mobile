import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {Actions} from 'react-native-router-flux';

class LoginPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello World</Text>
        <Button
          onPress={Actions.home}
          title="Login"
        />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  containter: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default LoginPage;