import React from 'react';
import PropTypes from 'prop-types';
import cbLogo from '../../assets/images/b-logo.png';

const Header = ({ ...props }) => (
  <div className="PageHeader PageHeader--b">
  <div className="PageHeader__image col-12">
    <div className="row">
      <div className="col-12">
        <div className="PageHeader__logo">
          <img src={cbLogo} alt="B Logo" />
          <h2>Powered by Clydesdale Bank &amp; Yorkshire Bank</h2>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="PageHeader__title col-12">
        <h1>{props.title}</h1>
      </div>
    </div>
  </div>
</div>
);

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
