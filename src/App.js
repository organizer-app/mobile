import React, { Component } from 'react';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
// import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import { Provider } from 'react-redux';

import Router from './router/router.component';

// const sagaMiddleware = createSagaMiddleware();
const logger = createLogger({ collapsed: true });
const store = createStore(reducers, applyMiddleware(logger));

class Organizer extends Component
{
  render()
  {
    return (
      <Provider store={store}>
        <Router/>
      </Provider>
    );
  }
}

export default Organizer;