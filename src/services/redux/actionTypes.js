const actionsPrefix = '@@bejflix';

const actionTypes = {
  REGISTER_SUCCESS: `${actionsPrefix}/REGISTER-SUCCESS`,
  REGISTER_FAILED: `${actionsPrefix}/REGISTER-FAILED`,
  LOGIN_SUCCESS: `${actionsPrefix}/LOGIN-SUCCESS`,
  LOGIN_FAILED: `${actionsPrefix}/LOGIN-FAILED`,
  LOGOUT_SUCCESS: `${actionsPrefix}/LOGOUT-SUCCESS`,
  LOGOUT_FAILED: `${actionsPrefix}/LOGOUT-FAILED`,
  SET_AUTH_STATE: `${actionsPrefix}/SET-AUTH-STATE`,
};

export default actionTypes;
