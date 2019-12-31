import React from 'react';

const Button = ({
    href,
    label,
    style
}) => {

    return (
        <a href={href} target="_blank" rel="noopener noreferrer">
          <div className="button" style={style}>
            {label}
          </div>
        </a> 
    )
}

export default Button;