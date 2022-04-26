import React from 'react';

import './input.scss'

const Input = ({label, ...props}) => {
    return (
        <div className='input-container'>
            <input className='form-input' {...props} />

            {label ? (
            <label
            className={`${props?.value?.length ? "shrink" : ""} form-input-label`}
            >
            {label}
            </label>
            ) : null}
        </div>
    );
}

export default Input;