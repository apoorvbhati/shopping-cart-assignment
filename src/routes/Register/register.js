import React from 'react';

import Input from '../../shared/input/input';
import Button from '../../shared/button/button';

const Register = () => {
    return (
        <div className='login-container'>
            <section className='text-section'>
                <h1>Signup</h1>
                <span>We do not share your personal details with anyone</span>
            </section>
            <div className='login-form'>
                <form>  
                    <Input 
                        label='First-Name'
                        name='fname'
                        type='text'
                        required 
                    />
                    <Input 
                        label='Last-Name'
                        name='lname'
                        type='text'
                        required 
                    /> 
                    <Input 
                        label='Email'
                        name='email'
                        type='email'
                        required 
                    />
                    <Input 
                        label='Password'
                        name='password'
                        type='password'
                        required 
                    />
                    <Input 
                        label='Confirm-Password'
                        name='confirm-password'
                        type='password'
                        required 
                    /> 
                    <Button>
                        Signup
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default Register;