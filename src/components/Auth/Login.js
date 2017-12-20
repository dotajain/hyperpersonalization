import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { login } from '../../actions';
import Form from './Form';

const Login = ({ user, login }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const { email: { value: email }, password: { value: password } } = e.target;
    login({ email, password });
  };

  return (
    <div className="b">
      <div className="one-column-container">
        <div className="PageHeader PageHeader--b">
          <div className="PageHeader__image col-xs-12">
            <div className="row">
              <div className="col-xs-12">
                <div className="PageHeader__logo">
                  B Logo
                  <h2>Powered by Clydesdale Bank &amp; Yorkshire Bank</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="PageHeader__title col-xs-12">
                <h1>Login</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="main-body container">
          <div className="row">
            <div className="mb-1 col-xs-12 col-sm-8 col-md-8 col-lg-7 offset-lg-1">
              <div>
                <div className="user-identity">
                  <form autoComplete="off">
                    <h2>Your details</h2>
                    <div>
                      <div className="panel">
                        <div className="has-error form-group">
                          <div className="row">
                            <div className="col-xs-12 col-md-12 col-lg-12">
                              <div className="label">
                                <label htmlFor="CustomerNumber" className="">
                                  Your customer number or username
                              </label>
                                <a href="#" title="Help for: Your customer number or username" aria-label="Help for: Your customer number or username" role="button" className="HelpIcon">
                                  <svg className="help-tooltip" viewBox="0 0 28 28">
                                    <path className="help-tooltip__outer-ring" fill="#292929" d="M14 26c6.627 0 12-5.373 12-12S20.627 2 14 2 2 7.373 2 14s5.373 12 12 12zm0 2C6.268 28 0 21.732 0 14S6.268 0 14 0s14 6.268 14 14-6.268 14-14 14z"></path>
                                    <path className="help-tooltip__outer-overlay" fill="red" d="M14,28 C6.2680135,28 0,21.7319865 0,14 C0,6.2680135 6.2680135,0 14,0 C21.7319865,0 28,6.2680135 28,14 C28,21.7319865 21.7319865,28 14,28 Z"
                                      opacity="0"></path>
                                    <path className="help-tooltip__question" fill="#292929" d="M14.436 8C11.904 8 10.144 9.742 10 11.718l2.245.45c.216-1.24.988-2.067 2.19-2.067 1.115 0 1.87.74 1.87 1.8 0 .934-.755 1.56-1.87 1.56H13.07v2.804h2.176v-1.006c2.047-.25 3.358-1.544 3.358-3.358 0-2.32-1.67-3.9-4.168-3.9zm-.305 9.627c-.823 0-1.416.647-1.416 1.383 0 .773.593 1.365 1.42 1.365.825 0 1.418-.592 1.418-1.365 0-.736-.592-1.383-1.42-1.383z"></path>
                                  </svg><span className="visually-hidden">Help for: Your customer number or username</span></a>
                              </div>
                            </div>
                            <div className="col-xs-12 col-md-12 col-lg-12"></div>
                            <div className="col-xs-12 col-md-12 col-lg-12">
                              <div className="input-lg input-group">
                                <input type="text" id="CustomerNumber" name="CustomerNumber" value="" maxLength="16" className="form-control" />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-xs-12 col-md-12 col-lg-12">
                              <div aria-live="assertive" className="validation-error alert alert-warning" role="alert">
                                <p>
                                  Oops, that does not seem right. Your customer number should be 10 digits long starting with 10
                                  or 30 and your username should be 6–16 characters long using letters and numbers only. It is
                                  case sensitive too. Can not remember them? Enter your personal details instead or get in touch.
                                  </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <a className="btn btn-link" href="#">Or enter your personal details</a>
                      </div>
                      <div>
                        <button type="button" className="btn btn-secondary">Cancel</button>
                      </div>
                      <button type="submit" className="btn btn-primary">
                        <span className="btn__text--right">
                          Continue
                          <svg className="btn__icon--right" width="16" height="16" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M6.5 9.775l.917.942 2.782-2.859L7.417 5l-.917.942 1.866 1.916">
                            </path>
                          </svg>
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-8 col-lg-3">
              <div className="need-help">
                <h4>Need help?</h4>
                <button type="submit" className="need-help__btn btn btn-secondary">
                  <span className="btn__text--right">
                    Visit help centre
                    <svg className="btn__icon--right" width="16" height="16" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M6.5 9.775l.917.942 2.782-2.859L7.417 5l-.917.942 1.866 1.916">
                      </path>
                    </svg>
                  </span>
                </button>
                <div className="egain-chat">
                  <button type="submit" className="egain-chat__btn btn btn-secondary">
                    <span className="btn__text--right">
                      Chat now
                      <svg className="btn__icon--right" width="16" height="16" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M6.5 9.775l.917.942 2.782-2.859L7.417 5l-.917.942 1.866 1.916">
                        </path>
                      </svg>
                    </span>
                  </button>
                  <p>Chat transcripts are saved for training and quality purposes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <Form onSubmit={handleSubmit} />
          <div className="container">
            <p>
              You can find impartial information and guidance on money matters on the &nbsp;
              <a target="_blank" rel="noopener noreferrer" href="#">Money advice service</a> website
            </p>
            <p>
              Clydesdale Bank is covered by the Financial Services Compensation Scheme (FSCS). &nbsp;
              <a target="_blank" rel="noopener noreferrer" href="#">Find out more</a></p>
          </div>
        </div>
      </div>
      {user.token && <Redirect to="/" />}
    </div>
  );
};

Login.propTypes = {
  user: PropTypes.shape({}).isRequired,
  login: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ user: state.user });
export default connect(mapStateToProps, { login })(Login);
