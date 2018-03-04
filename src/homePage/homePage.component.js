import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from '../styleSheets/stylesheet';
import { Col, Row, Grid } from 'react-native-easy-grid';

class HomePage extends Component {
  render() {
    return (
      <Grid>
        <Row size={75}>
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
          </View>
        </Row>
        <Row size={25}>
          <Col style={{ alignItems: 'center', marginLeft:50 }}>
            <TouchableOpacity
              style={homePageStyles.profileButton}
              onPress={Actions.profile}
            >
              <Text>Profile</Text>
            </TouchableOpacity>
          </Col>
          <Col style={{ alignItems: 'center', marginRight:50 }}>
            <TouchableOpacity
              style={homePageStyles.profileButton}
              onPress={Actions.groups}
            >
              <Text>Profile</Text>
            </TouchableOpacity>
          </Col>
        </Row>
      </Grid>
    );
  }
}

const homePageStyles = StyleSheet.create({
  profileButton: {
    position: 'absolute',
    backgroundColor: '#99AAFF',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#000033',
    paddingVertical: 15,
    paddingHorizontal:30,
  },
});

export default HomePage;