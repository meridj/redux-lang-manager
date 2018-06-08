/**
 * Npm imports
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Styles
 */
import './Button.styl';

const Button = ({ children, className, onClick }) => (
  <button className={className} onClick={() => onClick(children)}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
