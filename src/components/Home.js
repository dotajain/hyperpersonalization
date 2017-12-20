import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logout } from '../actions';
import HomePage from './HomePage';

const Home = ({ user, logout }) =>
  (user.token ? <HomePage logout={logout} /> : <Redirect to="/login" />);

Home.propTypes = {
  user: PropTypes.shape({}).isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ user: state.user });
export default connect(mapStateToProps, { logout })(Home);

// export default connect(state => ({ user: state.user }))(Home);
