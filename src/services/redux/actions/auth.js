import actionTypes from '../actionTypes';
import authStates from '../authStates';

const getErrorMessage = (errorCode) => {
  switch (errorCode) {
    case 'auth/wrong-password':
      return 'Email or password incorrect';
    case 'auth/user-not-found':
      return 'User with this email does not exist';
    case 'auth/email-already-in-use':
      return 'This email is already in use';
    case 'auth/too-many-requests':
      return 'Too many invalid requests, please try again later';
    default:
      return 'An unexpected error occurred. Please try again later';
  }
};

const registerSuccess = (user) => {
  return {
    type: actionTypes.REGISTER_SUCCESS,
    firebaseUser: user,
  };
};

const registerError = (firebaseError) => {
  return {
    type: actionTypes.REGISTER_FAILED,
    errorMessage: getErrorMessage(firebaseError.code),
  };
};

const loginSuccess = (user) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    firebaseUser: user,
  };
};

const loginError = (firebaseError) => {
  return {
    type: actionTypes.LOGIN_FAILED,
    errorMessage: getErrorMessage(firebaseError.code),
  };
};

const logoutSuccess = () => {
  return {
    type: actionTypes.LOGOUT_SUCCESS,
  };
};

const logoutError = () => {
  return {
    type: actionTypes.LOGOUT_FAILED,
    errorMessage: 'Logout failed',
  };
};

export const setAuthState = (value) => {
  return {
    type: actionTypes.SET_AUTH_STATE,
    authState: value,
  };
};

export const registerUser = (email, password) => async (
  dispatch,
  getState,
  { getFirebase }
) => {
  try {
    const firebase = await getFirebase();
    const { user } = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    dispatch(registerSuccess(user));
    dispatch(setAuthState(authStates.FULLY_CONFIGURED));
  } catch (error) {
    dispatch(registerError(error));
    dispatch(setAuthState(authStates.UNKNOWN));
  }
};

export const loginUser = (email, password) => async (
  dispatch,
  getState,
  { getFirebase }
) => {
  try {
    let firebaseUser = null;
    const firebase = await getFirebase();
    const { user } = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    firebaseUser = { ...user };
    dispatch(loginSuccess(firebaseUser));
    dispatch(setAuthState(authStates.FULLY_CONFIGURED));
  } catch (error) {
    dispatch(loginError(error));
    dispatch(setAuthState(authStates.UNKNOWN));
  }
};

export const logoutUser = () => async (dispatch, getState, { getFirebase }) => {
  try {
    const firebase = await getFirebase();
    await firebase.auth().signOut();
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutError());
  }
};
