/**
 * Npm imports
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

/**
 * Styles
 */
import './styles/reset.css';
import './styles/index.styl';

/**
 * Reducers
 */
import reducers from './reducers';

/**
 * Containers
 */
import { App } from './containers';

const store = createStore(reducers, {});

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
});
