import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ onSubmit }) => (
  <form name="form" id="form" className="form-horizontal"  onSubmit={onSubmit}>
    <div className="input-group">
      <span className="input-group-addon"><i className="fa fa-user"></i></span>
      <input
        type="email"
        name="email"
        placeholder="Email address"
        title="Enter your email address"
        required
        className="form-control"
      />
    </div>
    <div className="input-group">
      <span className="input-group-addon"><i className="fa fa-lock"></i></span>
      <input
        type="password"
        name="password"
        placeholder="Password"
        title="Type a strong password: aBC_123^"
        pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$"
        required
        className="form-control"
      />
    </div>
    <div className="form-group">
      <button type="submit" href="#" className="btn btn-primary pull-right"><i className="glyphicon glyphicon-log-in"></i> Log in</button>
    </div>
  </form>
);

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
