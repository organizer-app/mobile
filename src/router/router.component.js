import React, {Component} from 'react';
import {Stack, Scene, Router} from 'react-native-router-flux';

import LoginPage from '../loginPage/loginPage.component';
import HomePage from '../homePage/homePage.component';
import GroupsPage from '../groupsPage/groupsPage.component';
import ProfilePage from '../profilePage/profilePage.component';
import GroupInfo from '../components/groupInfo/groupInfo.component';

import DeleteModal from '../components/groupInfo/deleteModal.component';
import Modal from "react-native-router-flux/src/Modal";

class RouterComponent extends Component {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="login" component={LoginPage}/>
          <Scene key="home" component={HomePage}/>
          <Scene key="profile" component={ProfilePage}/>
          <Scene key="groups" component={GroupsPage}/>
          <Scene key="groupInfo" component={GroupInfo} info/>
        </Stack>
      </Router>
    );
  }
}

export default RouterComponent;