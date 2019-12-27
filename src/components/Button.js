import React from 'react';

const Button = ({
    href,
    label
}) => {

    function handleClick(e) {
        return true;
    }

    return (
        <button type="button" onClick={handleClick}>
            {label}
        </button>
    )
}

export default Button;