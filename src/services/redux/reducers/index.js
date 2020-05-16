import { firebaseReducer } from 'react-redux-firebase';
import { combineReducers } from 'redux';
import authReducer from './auth';

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  auth: authReducer,
});

export default rootReducer;
