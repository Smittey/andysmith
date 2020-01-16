import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({
  href,
  label,
  style,
  onClick,
  type,
  disabled,
  classNameProp, 
}) => {
  const cssClasses = classNames(
    'button',
    classNameProp,
  );

  return (
    !href
    ? (
      <button
        type={type ? 'submit' : 'button'}
        className={cssClasses}
        disabled={disabled}
        onClick={onClick}
        style={style}
      >
        {label}
      </button>
    )
    : (
      <a href={href} target="_blank" rel="noopener noreferrer" onClick={onClick}>
        <div className={cssClasses} style={style}>
          {label}
        </div>
      </a>
    )
  );
};

Button.defaultProps = {
  onClick: () => { },
  href: null,
  type: 'button',
};

Button.propTypes = {
  href: PropTypes.string,
  classNameProp: PropTypes.string,
  label: PropTypes.string.isRequired,
  style: PropTypes.object,
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled : PropTypes.func,
};

export default Button;
