import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import Async from 'react-code-splitting';

import Login from './Auth/Login';
// import Header from './Header';

const Customer = () => <Async load={import('./Customer')} />;
const Offers = () => <Async load={import('./Offers')} />;

const App = ({ ...props }) => (
  <main>
    <Route exact path="/" component={Login} {...props} />
    <Route exact path="/customer" component={Customer} {...props} />
    <Route exact path="/offers" component={Offers} {...props} />
  </main>
);

App.propTypes = {
  user: PropTypes.shape({}).isRequired,
};

export default withRouter(connect(state => ({ user: state.user }))(App));
