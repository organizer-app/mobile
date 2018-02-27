import { combineReducers } from 'redux';

import page from './page/page.reducer';

const appReducer = combineReducers({
  page,
});

const rootReducer = (state, action) =>
{
  return appReducer(state, action);
};

export default rootReducer;