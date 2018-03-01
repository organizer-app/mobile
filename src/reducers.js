import { combineReducers } from 'redux';

import page from './loginPage/loginPage.reducer';

const appReducer = combineReducers({
  page,
});

const rootReducer = (state, action) =>
{
  return appReducer(state, action);
};

export default rootReducer;