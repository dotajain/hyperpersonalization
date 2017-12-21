import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';
// import { logout } from '../actions';

const Offers = ({ user }) => {
  console.log(user);
  return  (<h1>Offers</h1>);
};

Offers.propTypes = {
  user: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({ user: state.user });
export default connect(mapStateToProps, {})(Offers);

// export default connect(state => ({ user: state.user }))(Home);
