import React from "react";

import "./input.scss";

const Input = ({ handleChange, label, error, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherProps} />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
      <p className="error-message">{error} </p>
    </div>
  );
};

export default Input;


// import React from 'react';

// import './input.scss'

// const Input = ({label, ...props}) => {
//     return (
//         <div className='input-container'>
//             <input className='form-input' {...props} />

//             {label ? (
//             <label
//             className={`${props.value.length ? "shrink" : ""} form-input-label`}
//             >
//             {label}
//             </label>
//             ) : null}
//         </div>
//     );
// }

// export default Input;