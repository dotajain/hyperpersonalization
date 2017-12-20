import { actionTypes as types } from '../constants';
// import { post } from '../helpers';

export const login = () => dispatch => {
  dispatch({ type: types.LOGIN_REQUEST });
  dispatch({ type: types.LOGIN_SUCCESS,
    data: {
      token: 'QpwL5tke4Pnpja7X',
    } });
};

export const logout = () => dispatch => {
  dispatch({ type: types.LOGOUT_REQUEST });
};
