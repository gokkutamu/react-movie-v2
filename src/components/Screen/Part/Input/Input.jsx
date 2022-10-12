/**
 * The stone dam built the house of (Tam) likes.
 * @version 2.
 * @package core/input
*/
import React from 'react';

import '../../../UI/input.scss';

const Input = props => {
    return (
        <input
            type={props.type}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange ? (e) => props.onChange(e) : null}
        />
    );
}

export default Input;