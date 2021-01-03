import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { user } from './user/reducers';

const appStore = {
  user,
};

const store = createStore(combineReducers({ ...appStore }), applyMiddleware(thunk));

export default store;
