/**
 * Npm imports
 */
import React from 'react';

/**
 * Styles
 */
import './App.styl';

/**
 * Datas
 */
import { strings } from '../../datas';

/**
 * Components
 */
import { Button } from '../../components';

const App = () => (
  <div className="app">
    <div className="btn-group">
      <Button className="btn">Fr</Button>
      <Button className="btn">En</Button>
    </div>
    <div className="app-content">
      <h1>{strings['en'].welcomeMessage}</h1>
    </div>
  </div>
);

export default App;
