import { actionTypes as types } from '../constants';

const user = (state = {}, action) => {
  switch (action.type) {
  case types.SIGNUP_SUCCESS:
  case types.LOGIN_SUCCESS:
    return action.data;
  case types.LOGIN_FAILURE:
    return {};
  case types.LOGOUT_REQUEST:
    return {};
  default:
    return state;
  }
};

export default user;
