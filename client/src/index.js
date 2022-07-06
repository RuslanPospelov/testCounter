
import React from 'react';
import App from './components/App/App';
import { Provider } from 'react-redux';
import store from './redux/store';
import * as ReactDOMClient from 'react-dom/client';

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>);
