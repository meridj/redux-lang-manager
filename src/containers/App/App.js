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
 * Datas
 */
import { strings } from '../../datas';

/**
 * Actions
 */
import * as actions from '../../actions';

/**
 * Components
 */
import { Button } from '../../components';

class App extends React.Component {
  handleClick = newlang => {
    this.props.updateLang(newlang.toLowerCase());
  };

  render() {
    const { lang } = this.props;
    console.log(lang);
    return (
      <div className="app">
        <div className="btn-group">
          <Button onClick={this.handleClick} className="btn">
            Fr
          </Button>
          <Button onClick={this.handleClick} className="btn">
            En
          </Button>
          <Button onClick={this.handleClick} className="btn">
            Es
          </Button>
        </div>
        <div className="app-content">
          <h1>{strings[lang].welcomeMessage}</h1>
          <blockquote>
            <p>{strings[lang].desc}</p>
            <cite>Dan Abramov</cite>
          </blockquote>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  lang: PropTypes.string.isRequired,
  updateLang: PropTypes.func.isRequired
};

function mapStateToProps({ lang }) {
  return { lang };
}

export default connect(
  mapStateToProps,
  actions
)(App);
