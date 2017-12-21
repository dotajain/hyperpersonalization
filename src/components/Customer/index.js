import React from 'react';
import _ from 'lodash';
import Header from '../Header';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Customer = ({ customers }) => {
  const getCustomerDetailPage = customer => {
    console.log(customer);
  };

  const customerList = _.map(customers, (customer, i) => {
    return (
      <button onClick={() => getCustomerDetailPage(customer)} className="card" key={i}>
        <div className="card-container">
          <div className="card-title">
            {customer.name}
          </div>
          <div className="card-body">
            <div className="account-number">{customer.number}</div>
          </div> 
        </div>
      </button>
    );
  });
  return (
    <div className="b">
      <div className="main-container">
        <Header title="Customer List" />
        <div className="main-body container">
        <div className="customer--list">
          {customerList}
        </div>    
        </div>
      </div>
    </div>
  );
};

Customer.propTypes = {
  customers: PropTypes.array,
};

const mapStateToProps = state => ({ customers: state.user.customers });
export default connect(mapStateToProps, { })(Customer);

