import React from 'react';

import Input from '../../shared/input/input';
import Button from '../../shared/button/button';

import './login.scss';

const Login = () => {
    return (
        <div className='login-container'>
            <section className='text-section'>
                <h1>Login</h1>
                <span>Get access to your Orders, Wishlist and Recommendations</span>
            </section>
            <div className='login-form'>
                <form>  
                    <Input 
                        label='Email'
                        name='email'
                        type='email'
                        required 
                    />
                    <Input 
                        label='Password'
                        name='password'
                        required 
                    /> 
                    <Button>
                        Login
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default Login;