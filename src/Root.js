import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store';

import App from './components/App';

export const Root = () => (
  <Provider store={store} key="provider">
    <BrowserRouter><App /></BrowserRouter>
  </Provider>
);
