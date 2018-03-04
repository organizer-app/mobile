import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { GoogleSignin } from 'react-native-google-signin';
import { Actions } from 'react-native-router-flux';
import styles from '../styleSheets/stylesheet';
import { Col, Row, Grid } from 'react-native-easy-grid';
import HomePage from "../homePage/homePage.component";

class ProfilePage extends Component {
  render() {
    return (
      <Grid>
        <Row size={40}>
          <Col size={50}>
            <View style={profilePageStyles.buttonContainer}>
              <Image
                source={{uri: GoogleSignin.currentUser().photo}}
                style={{width: 120, height: 120}}
              />
            </View>
          </Col>
          <Col size={50}>
            <View style={profilePageStyles.buttonContainer}>
              <Text>{GoogleSignin.currentUser().name}</Text>
              <Text>{GoogleSignin.currentUser().email}</Text>
            </View>
          </Col>
        </Row>
        <Row size={30}>
          <Col style={{backgroundColor: 'red'}}>
            <View style={profilePageStyles.buttonContainer}>
              <TouchableOpacity style={profilePageStyles.bigButton}>
                <Text style={profilePageStyles.buttonText}>
                  Create{"\n"}
                  Event
                </Text>
              </TouchableOpacity>
            </View>
          </Col>
          <Col style={{backgroundColor: 'yellow'}}>
            <View style={profilePageStyles.buttonContainer}>
              <TouchableOpacity style={profilePageStyles.bigButton}>
                <Text style={profilePageStyles.buttonText}>
                  Past{"\n"}
                  Events
                </Text>
              </TouchableOpacity>
            </View>
          </Col>
        </Row>
        <Row size={30}>
          <Col style={{backgroundColor: 'pink'}}>
            <View style={profilePageStyles.buttonContainer}>
              <TouchableOpacity style={profilePageStyles.bigButton}>
                <Text style={profilePageStyles.buttonText}>
                  Manage{"\n"}
                  Groups
                </Text>
              </TouchableOpacity>
            </View>
          </Col>
          <Col style={{backgroundColor: 'gray'}}>
            <View style={profilePageStyles.buttonContainer}>
              <TouchableOpacity style={profilePageStyles.bigButton}>
                <Text style={profilePageStyles.buttonText}>
                  Manage{"\n"}
                  Preferences
                </Text>
              </TouchableOpacity>
            </View>
          </Col>
        </Row>
      </Grid>
    );
  }
}

const profilePageStyles = StyleSheet.create({
  bigButton: {
    backgroundColor: '#99AAFF', // need to figure out how to stretch button vertically then remove this
    alignSelf: 'stretch'
  },
  buttonText: {
    textAlign: 'center',
    fontFamily: 'HelveticaNeue-Light',
    fontSize: 20,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default ProfilePage;