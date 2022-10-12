/**
 * The stone dam built the house of (Tam) likes.
 * @version 2.
 * @package core/button
*/
import React from 'react';
import PropTypes from 'prop-types';

import '../../../UI/button.scss';

const Button = props => {
    return (
        <button className={`btn ${props.className}`} onClick={props.onClick ? () => props.onClick() : null}>
            {props.children}
        </button>
    );
}

export const OutlineButton = props => {
    return (
        <Button className={`btn-outline ${props.className}`} onClick={props.onClick ? () => props.onClick() : null}>
            {props.children}
        </Button>
    );
}

Button.propTypes = {
    onClick: PropTypes.func
}

export default Button;