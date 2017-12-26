import React, { Component } from 'react';
import _ from 'lodash';
import HeaderNav from '../Header/HeaderNav';
import Modal from './Modal';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getCustomers } from '../../actions';

class Customer extends Component {
  constructor(props) {
    super(props);
    this.getCustomerDetailPage = this.getCustomerDetailPage.bind(this);
    this._onModalClose = this._onModalClose.bind(this);
    
    this.state = {
      activeCustomer: '',
    };
  }
  componentWillMount() {
    this.props.getCustomers();  
  }

  getCustomerDetailPage(customer) {
    this.setState({ activeCustomer: customer });
  }
  
  _onModalClose() {
    this.setState({ activeCustomer: '' });
  }

  render() {
    const { customers } = this.props;
    const customerList = _.map(customers, (customer, i) => {
      return (
        <div className="col-sm-6 col-lg-4" key={i}>
          <button className="account-summary pos-r" onClick={() => this.getCustomerDetailPage(customer)}  type="button">
            <div className="account-summary--image">
              <img src={customer.picture} alt={customer.name} />
            </div>
            <div className="account-summary__card">
              <h2>{customer.name}</h2>
              <div className="sort-code">{customer.number}</div>
            </div>
          </button>
        </div>
      );
    });
    
    let modal;
    let modalBackgrop;
    if (this.state.activeCustomer) {
      modalBackgrop= <div className="modal-backdrop fade in"></div>;
      modal = <Modal customer={this.state.activeCustomer} onClose={this._onModalClose} />;
    }

    return (
      <div>
        <HeaderNav title="Customer List" />
        <div className="page page-home bow">
          <div className="container" id="site-main">
            <div className="row">
              <div className="col-lg1-18">
                <div className="c-step-header move-money__header">
                  <h2 className="c-step-header__title">List of Customers</h2>
                </div>
              </div>
            </div>
            <div className="row customer-list">
              {customerList}
            </div>
          </div>
        </div>
        {modalBackgrop}
        {modal}
      </div>
    );
  }
}

Customer.propTypes = {
  customers: PropTypes.array,
  getCustomers: PropTypes.func,
};

const mapStateToProps = state => ({ customers: state.user.customers });
export default connect(mapStateToProps, { getCustomers })(Customer);
