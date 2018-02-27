import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Stack, Scene, Router } from 'react-native-router-flux';

import Page from '../page/page.component';

class RouterComponent extends Component
{
  render()
  {
    return (
      <Router>
        <Stack key="root">
          <Scene key="page" component={Page}/>
        </Stack>
      </Router>
    );
  }
}

export default RouterComponent;