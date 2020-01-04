import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  href,
  label,
  style,
}) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <div className="button" style={style}>
      {label}
    </div>
  </a>
);

Button.propTypes = {
  href: PropTypes.string,
  label: PropTypes.string.isRequired,
  style: PropTypes.object,
};

export default Button;
