import { actionTypes as types, urls } from '../constants';
import { get } from '../helpers';

export const login = () => dispatch => {
  dispatch({ type: types.LOGIN_REQUEST });
  dispatch({ type: types.LOGIN_SUCCESS,
    data: {
      token: 'QpwL5tke4Pnpja7X',
    } });
};

export const getCustomers = () => dispatch => {
  dispatch({ type: types.CUSTOMER_REQUEST });
  get({
    url: urls.CUSTOMERS,
    success: types.CUSTOMER_SUCCESS,
    failure: types.CUSTOMER_FAILURE,
    dispatch,
  });
};

export const logout = () => dispatch => {
  dispatch({ type: types.LOGOUT_REQUEST });
};

export const goNext = ({ id }) => dispatch => {
  dispatch({ type: types.REQUEST_NEXT_PAGE, data: id });
};
