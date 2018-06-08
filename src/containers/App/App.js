/**
 * Npm imports
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/**
 * Styles
 */
import './App.styl';

/**
 * Actions
 */
import * as actions from '../../actions';

/**
 * Datas
 */
import { buttons } from '../../datas';

/**
 * Components
 */
import { Button, Content } from '../../components';

class App extends React.Component {
  handleClick = newlang => {
    this.props.updateLang(newlang.toLowerCase());
  };

  render() {
    const buttonForUpdateLang = (
      <div className="btn-group">
        {buttons.map(({ lang, className }) => (
          <Button key={lang} className={className} onClick={this.handleClick}>
            {lang}
          </Button>
        ))}
      </div>
    );

    return (
      <div className="app">
        {buttonForUpdateLang}
        <Content />
      </div>
    );
  }
}

App.propTypes = {
  updateLang: PropTypes.func.isRequired
};

export default connect(
  null,
  actions
)(App);
