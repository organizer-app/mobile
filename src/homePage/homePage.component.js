import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, TouchableHighlight} from 'react-native';
import {Actions} from 'react-native-router-flux';
import styles from '../styleSheets/stylesheet';

class HomePage extends Component {
  render() {
    return (
      <View style={styles.container}>
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
        <Button
          title="Manage Groups"
          onPress={Actions.groups}
        />

        <TouchableHighlight
          style={homePageStyles.profileButton}
          onPress={Actions.home}>
          <Text>Profile</Text>
        </TouchableHighlight>
      </View>

    );
  }
}

const homePageStyles = StyleSheet.create({
  profileButton: {
    position: 'absolute',
    bottom:50,
    left:50,
  },
});

export default HomePage;