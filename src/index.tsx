import '@fullcalendar/react/dist/vdom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/index.scss';
import './scss/sidebar-custom.scss';
import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-image-lightbox/style.css';
import 'allotment/dist/style.css';

import App from './App';
import '@core/utils/i18n';
import store from './@core/+state/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  // </React.StrictMode>
);
