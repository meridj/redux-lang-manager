/**
 * Packages
 */
import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Styles
 */
import './styles/reset.css';
import './styles/index.styl';

const App = () => <h1>React-Parcel-Model</h1>;

document.addEventListener('DOMContentLoaded', () => {
  const targetRootNode = document.getElementById('root');
  const rootComponent = <App />;

  ReactDOM.render(rootComponent, targetRootNode);
});
