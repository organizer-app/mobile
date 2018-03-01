import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Stack, Scene, Router} from 'react-native-router-flux';

import LoginPage from '../loginPage/loginPage.component';
import HomePage from '../homePage/homePage.component';
import GroupsPage from '../groupsPage/groupsPage.component';

class RouterComponent extends Component {
    render() {
        return (
            <Router>
                <Stack key="root">
                    <Scene key="login" component={LoginPage}/>
                    <Scene key="home" component={HomePage}/>
                    <Scene key="groups" component={GroupsPage}/>
                    <Scene key="home" component={HomePage}/>
                    <Scene key="home" component={HomePage}/>
                </Stack>
            </Router>
        );
    }
}

export default RouterComponent;