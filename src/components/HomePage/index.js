import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newState: '',
    };
  }
  render() {
    return (
      <div className="text-right pr-4">
        <button className="btn btn-outline-primary mb-3" onClick={this.props.logout}>Logout</button>
      </div>
    );
  }
}

HomePage.propTypes = {
  logout: PropTypes.func.isRequired,
};

