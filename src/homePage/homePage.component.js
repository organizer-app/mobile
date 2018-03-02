import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {Actions} from 'react-native-router-flux';

class HomePage extends Component {
  render() {
    return (
      <View>
        <Text>Create Session with: </Text>
        <Button
          title="Permanent Group"
          onPress={Actions.groups}
        />
        <Button
          title="Only You"
          onPress={Actions.login}
        />
        <Button
          title="Temporary Group"
          onPress={Actions.login}
        />
      </View>
    );
  }
}

export default HomePage;