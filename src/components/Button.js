import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({
  href,
  label,
  style,
  onClick,
  classNameProp,
}) => {
  const cssClasses = classNames(
    'button',
    classNameProp,
  );

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" onClick={onClick}>
      <div className={cssClasses} style={style}>
        {label}
      </div>
    </a>
  );
};

Button.propTypes = {
  href: PropTypes.string,
  classNameProp: PropTypes.string,
  label: PropTypes.string.isRequired,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

export default Button;
