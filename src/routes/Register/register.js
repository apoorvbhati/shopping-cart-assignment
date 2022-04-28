import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from '../../shared/button/button';
import Input from '../../shared/input/input';

import "./register.scss";
// import { withRouter } from "react-router-dom";

const Register = () => {
    var navigate = useNavigate();

    const [userCredentials, setCredentials] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [inputError, setInputError] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });

    const { firstName, lastName, email, password, confirmPassword } =
        userCredentials;

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
        return;
        }
        navigate(`/`);
        console.log(userCredentials);
    };

    const handleChange = (event) => {
        const { value, name } = event.target;
        setCredentials({ ...userCredentials, [name]: value });
        if (event.target.name === "email") {
        const emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

        if (!emailPattern.test(event.target.value)) {
            const emailError = "Please add valid email pattern wich includes @";
            setInputError({ ...inputError, [name]: emailError });
        } else {
            setInputError({ ...inputError, [name]: "" });
        }
    }

    if (event.target.name === "password") {
        const passworPattern = /(?=^.{6,10}$)(?=.*\d)(?=.*[a-zA-Z])(?!.*\s)/;

        if (!passworPattern.test(event.target.value)) {
            const passwordError =
            "Please add valid Password (min-length 6, atleast 1 alpha numeric and no space)";
            setInputError({ ...inputError, [name]: passwordError });
        } else {
            setInputError({ ...inputError, [name]: "" });
        }
    }

    if (event.target.name === "confirmPassword") {
        if (password !== event.target.value) {
            setInputError({ ...inputError, [name]: "Password do not match" });
        } else {
            setInputError({ ...inputError, [name]: "" });
        }
        }
    };

  return (
    <div className="login-container">
      <div className="text-section">
        <h2 className="title">Signup</h2>
        <span>We do not share your personal details with anyone.</span>
      </div>
      <div className="login-form">
        <form onSubmit={handleSubmit}>
            <Input
                name="firstName"
                type="text"
                label="First Name"
                value={firstName}
                handleChange={handleChange}
                required
            />
            <Input
                name="lastName"
                type="text"
                label="Last Name"
                value={lastName}
                handleChange={handleChange}
                required
            />
            <Input
                name="email"
                type="email"
                label="Email"
                value={email}
                handleChange={handleChange}
                required
                error={inputError.email}
            />
            <Input
                name="password"
                type="password"
                label="Password"
                value={password}
                handleChange={handleChange}
                required
                error={inputError.password}
            />
            <Input
                name="confirmPassword"
                type="password"
                label="Confirm Password"
                value={confirmPassword}
                handleChange={handleChange}
                required
                error={inputError.confirmPassword}
            />
            <Button
                type="submit"
                className="buttons"
                disabled={
                    inputError.email ||
                    inputError.password ||
                    inputError.confirmPassword
                }
            >
                SignUp
            </Button>
        </form>
      </div>
    </div>
  );
};
export default Register;










// import React from 'react';
// // import { useDispatch } from 'react-redux';
// // import { useNavigate } from 'react-router-dom';
// import { useForm } from 'react-hook-form';

// import Input from '../../shared/input/input';
// import Button from '../../shared/button/button';

// const Register = () => {
//     const { 
//         register, 
//         handleSubmit, 
//         formState: { errors } 
//     } = useForm();

//     // const dispatch = useDispatch();
//     // const history = useHistory();

//     const onSubmitHandler = (data) => {
//         console.log(data);
//     }

//     return (
//         <div className='login-container'>
//             <section className='text-section'>
//                 <h1>Signup</h1>
//                 <span>We do not share your personal details with anyone</span>
//             </section>
//             <div className='login-form'>
//                 <form onSubmit={handleSubmit(onSubmitHandler)}>  
//                     <Input 
//                         label='First-Name'
//                         name='fname'
//                         type='text'
//                         required 
//                     />
//                     <Input 
//                         label='Last-Name'
//                         name='lname'
//                         type='text'
//                         required 
//                     /> 
//                     <Input 
//                         label='Email'
//                         name='email'
//                         type='email'
//                         required 
//                     />
//                     <Input 
//                         label='Password'
//                         name='password'
//                         type='password'
//                         required 
//                     />
//                     <Input 
//                         label='Confirm-Password'
//                         name='confirm-password'
//                         type='password'
//                         required 
//                     /> 
//                     <Button>
//                         Signup
//                     </Button>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default Register;