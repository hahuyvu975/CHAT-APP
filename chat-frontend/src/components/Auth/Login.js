import React, { useState } from 'react'
import loginImage from '../../assets/images/login.svg';
// import axios from 'axios';
// import AuthService from '../../services/authService';

import { useDispatch } from 'react-redux';
import { login } from '../../store/actions/authAction';

import './Auth.scss'
export const Login = ( {history}) => {

    const dispatch = useDispatch();

    const [email, setEmail] = useState('john.doe@gmail.com');
    const [password, setPassword] = useState('secret');

    const submitForm = (e) => {
        e.preventDefault();

        dispatch(login({ email, password }, history))



        // AuthService.login({ email, password }).then(res => console.log(res));
        // axios.post(`http://localhost:3000/login`, {email,password})
        //     .then(res => {
        //         console.log('res', res);
        //     })
        //     .catch(err => {
        //         console.log('err', err);
        //     });    
        console.log({ email, password });
    }

    return (
        <div id='auth-container'>
            <div id='auth-card'>
                <div className='card-shadow'>
                    <div id='image-section'>
                        <img src={loginImage} alt='Login' />
                    </div>

                    <div id='form-section'>
                        <h2>Welcome back</h2>
                        <form onSubmit={submitForm}>
                            <div className='input-field mb-1'>
                                <input
                                    onChange={e => setEmail(e.target.value)}
                                    value={email}
                                    required='required'
                                    type='text'
                                    placeholder='Email' />
                            </div>

                            <div className='input-field mb-2'>
                                <input
                                    onChange={e => setPassword(e.target.value)}
                                    value={password}
                                    required='required'
                                    type='password'
                                    placeholder='Password' />
                            </div>

                            <button>Login</button>
                        </form>

                        <p>
                            Don't have an account?
                            <a href='/register'> Register </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login