import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {Actions} from 'react-native-router-flux';
import styles from '../styleSheets/stylesheet';

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

export default LoginPage;