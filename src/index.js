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
 * Containers
 */
import { App } from './containers';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider>
      <App />
    </Provider>,
    document.getElementById('root')
  );
});
