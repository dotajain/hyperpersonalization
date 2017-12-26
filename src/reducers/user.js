import { actionTypes as types } from '../constants';

const initialState = {
  pageId: 0,
  token: '',
  customers: '',
  offers: '',
};

const user = (state = initialState, action) => {
  switch (action.type) {
  case types.SIGNUP_SUCCESS:
  case types.LOGIN_SUCCESS:
    return {...state, token: action.data};
  case types.LOGIN_FAILURE:
    return {};
  case types.LOGOUT_REQUEST:
    return {};
  case types.REQUEST_NEXT_PAGE:
    return {...state, pageId: action.data};
  case types.CUSTOMER_SUCCESS:
    return {...state, customers: action.data};
  case types.OFFER_SUCCESS:
    return {...state, offers: action.data};
  default:
    return state;
  }
};

export default user;
