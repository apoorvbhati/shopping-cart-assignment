import React, { useState } from "react";

import Button from "../../shared/button/button";
import Input from "../../shared/input/input";

import "./login.scss";

const Login = ({history}) => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [inputError, setInputError] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    history.push('/')
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
  };

  return (
    <div className="login-container">
      <section className="text-section">
        <h2 className="title">Login</h2>
        <span>Get access to your Orders, Wishlist and Recommensations</span>
      </section>
      <div className="login-form">
        <form onSubmit={handleSubmit}>
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
            <Button
                type="submit"
                className="buttons"
                disabled={inputError.email || inputError.password}
            >
                Login
            </Button>
        </form>
      </div>
    </div>
  );
};
export default Login;
