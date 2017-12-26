import React from 'react';
import PropTypes from 'prop-types';

import _ from 'lodash';

const Modal = ({ ...props }) => {
  const allTags = _.uniq(_.map(props.customer.timeline, item => item.type));
  const interestedIn = _.map(allTags, (item, i) => <span key={i} className="tagInterested"><span className="icon icon-tag"/><span>{item}</span></span> );
  const transationRows = _.map(props.customer.timeline, (item, i) => {
    return (
      <tr className="standard-row" key={i}>
        <td className="transaction__date__column">
          <div className="transaction__table__data">
            <span>{item.date}</span>
          </div>
        </td>
        <td className="transaction__description__column">
          <div className="transaction__table__data">
            <span>{item.description}</span>
          </div>
        </td>
        <td className="transaction__tag__column">
          <div className="transaction__table__data">
            <span>
              <span className="icon icon-tag"/>
              <span>{item.type}</span>
            </span>
          </div>
        </td>
        <td className="transaction__type__column">
          <div className="transaction__table__data">
            <span>{item.merchant}</span>
          </div>
        </td>
        <td className="transaction__amount__column">
          <div className="transaction__table__data">
            <span>{item.value}</span>
          </div>
        </td>
      </tr>
    );
  });
  return (
  <div className="c-modal modal fade show cb-modal" tabIndex="-1" role="dialog">
    <div className="modal-md modal-dialog" role="document">
      <div className="modal-content">
        <div className="c-modal__header modal-header">
          <h5 className="modal-title">{props.customer.name}</h5>
          <button type="button" onClick={props.onClose} className="close" aria-label="Close"><span aria-hidden="true">×</span></button>
        </div>
        <div className="c-modal__body c-modal__body--padding modal-body">
          <div className="userinfo">
            <div className="userphoto">
              <img src={props.customer.picture} alt={props.customer.name} />
            </div>
            <div className="allTags">{interestedIn}</div>
          </div>
          <h3>Transition Details</h3>
          <div className="account-details dyb">
            <div className="transaction-details">
              <div className="oldTable">
                <div className="griddle">
                  <div className="griddle__container">
                    <div className="griddle__body">
                      <div className="transaction-data-head">
                        <div className="transaction-data-head__container">
                          <table>
                            <thead>
                              <tr>
                                <th className="sort-descending transaction__date__column">
                                  <label className="header-table"><span>Date</span></label>
                                </th>
                                <th className="transaction__description__column">
                                  <label className="header-table"><span>Description</span></label>
                                </th>
                                <th className="transaction__tag__column">
                                  <label className="header-table"><span>Tag</span></label>
                                </th>
                                <th className="transaction__type__column">
                                  <label className="header-table"><span>Type</span></label>
                                </th>
                                <th className="transaction__amount__column">
                                  <label className="header-table"><span>Amount</span></label>
                                </th>
                              </tr>
                            </thead>
                          </table>
                        </div>
                      </div>
                      <div className="transaction-data-grid">
                        <div className="transaction-data-grid-container">
                          <table>
                            <tbody>
                              {transationRows}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="c-modal__footer modal-footer">
          <div className="button-group">
            <button type="button" className="c-btn c-btn--secondary c-modal__button">Save changes</button>
            <button type="button" className="c-btn c-btn--default c-modal__button" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func,
  customer: PropTypes.object,
};

export default Modal;
