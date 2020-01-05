import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  href,
  label,
  style,
  onClick,
}) => (
  <a href={href} target="_blank" rel="noopener noreferrer" onClick={onClick}>
    <div className="button" style={style}>
      {label}
    </div>
  </a>
);

Button.propTypes = {
  href: PropTypes.string,
  label: PropTypes.string.isRequired,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

export default Button;
