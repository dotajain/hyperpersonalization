import React, { Component } from 'react';
import _ from 'lodash';
import HeaderNav from '../Header/HeaderNav';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getCustomers, getOffers } from '../../actions';

class Offers extends Component {
  constructor(props) {
    super(props);
    this.getOfferDetailPage = this.getOfferDetailPage.bind(this);
    
    this.state = {
      activeOffer: '',
    };
  }
  componentWillMount() {
    this.props.getCustomers();  
    this.props.getOffers();  
  }

  getOfferDetailPage(offer) {
    console.log(offer);
    this.setState({ activeOffer: offer });
  }
  
  render() {
    const { offers } = this.props;
    const offerList = _.map(offers, (offer, i) => {
      const bgImage = {
        backgroundImage: `url(${offer.largeImage})`,
      };
      return (
        <div className="c-bfeatures l-tile" key={i}>
          <div className="c-bfeatures__image" style={bgImage} />
          <div className="c-bfeatures__body">
            <h2 className="c-bfeatures__heading">{offer.title}</h2>
            <p>{offer.description}</p>
            <p className="c-bfeatures__cta">
              <button className="c-bfeatures__link c-btn c-btn--default">View Offer</button></p>
          </div>
        </div>
      );
    });
  
    return (
      <div>
        <HeaderNav title="Customer List" />
        <div className="page page-home bow">
          <div className="container" id="site-main">
            <div className="row">
              <div className="col-lg1-18">
                <div className="c-step-header move-money__header">
                  <h2 className="c-step-header__title">List of Offers</h2>
                </div>
              </div>
            </div>
            <div className="l-tiles customer-list">
              {offerList}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Offers.propTypes = {
  offers: PropTypes.array,
  getCustomers: PropTypes.func,
  getOffers: PropTypes.func,
};

const mapStateToProps = state => ({ offers: state.user.offers });
export default connect(mapStateToProps, { getCustomers, getOffers })(Offers);
