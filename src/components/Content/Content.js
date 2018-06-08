/**
 * Npm imports
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/**
 * Datas
 */
import { strings } from '../../datas';

/**
 * Styles
 */
import './Content.styl';

const Content = ({ lang }) => (
  <div className="content">
    <h1>{strings[lang].welcomeMessage}</h1>
    <blockquote>
      <p>{strings[lang].desc}</p>
      <cite>Dan Abramov</cite>
    </blockquote>
  </div>
);

Content.propTypes = {
  lang: PropTypes.string.isRequired
};

function mapStateToProps({ lang }) {
  return { lang };
}

export default connect(
  mapStateToProps,
  null
)(Content);
