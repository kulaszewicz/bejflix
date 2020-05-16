import actionTypes from '../actionTypes';
import authStates from '../authStates';

const initialState = {
  firebaseUser: {},
  currentState: authStates.UNKNOWN,
  authErrorMessage: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        firebaseUser: action.firebaseUser,
        authErrorMessage: null,
      };
    case actionTypes.REGISTER_FAILED:
      return {
        ...state,
        firebaseUser: {},
        authErrorMessage: action.errorMessage,
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        firebaseUser: action.firebaseUser,
        authErrorMessage: null,
      };
    case actionTypes.LOGIN_FAILED:
      return {
        ...state,
        firebaseUser: {},
        authErrorMessage: action.errorMessage,
      };
    case actionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        firebaseUser: {},
        currentState: authStates.UNKNOWN,
        authErrorMessage: null,
      };
    case actionTypes.LOGOUT_FAILED:
      return {
        ...state,
        firebaseUser: {},
        currentState: authStates.UNKNOWN,
        authErrorMessage: action.errorMessage,
      };
    case actionTypes.SET_AUTH_STATE:
      return {
        ...state,
        currentState: action.authState,
      };
    default:
      return state;
  }
};

export default authReducer;
