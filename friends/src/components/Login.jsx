import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Loader from 'react-loader-spinner';
import './Login.scss';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Login = props => {
    const [user, setUser] = useState({
        username: '',
        password: ''
    });
    const [isLoading, setIsLoading] = useState(false);

    const updateUser = e => {
        e.preventDefault();
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    const submitForm = e => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            axiosWithAuth()
            .post('/login', user)
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                props.history.push('/friends');
            })
            .catch(err => {
                localStorage.removeItem('token');
                console.log(err);
            });
            setIsLoading(false);
        }, 3000);
    };

    if (isLoading) {
        return (
            <div className='Login'>
                <form onSubmit={submitForm}>
                    <input 
                        name='username'
                        type='text'
                        value={user.username}
                        placeholder='Username'
                        onChange={updateUser}
                        autoComplete='off'
                    />
                    <input 
                        name='password'
                        type='password'
                        value={user.password}
                        placeholder='Password'
                        onChange={updateUser}
                        autoComplete='off'
                    />
                    <button>Submit</button>
                </form>
                <Loader 
                    type='Puff'
                    color='black'
                    height={100}
                    width={100}
                />
            </div>
        );
    }
    else {
        return (
            <div className='Login'>
                <form onSubmit={submitForm}>
                    <input 
                        name='username'
                        type='text'
                        value={user.username}
                        placeholder='Username'
                        onChange={updateUser}
                        autoComplete='off'
                    />
                    <input 
                        name='password'
                        type='password'
                        value={user.password}
                        placeholder='Password'
                        onChange={updateUser}
                        autoComplete='off'
                    />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
};

export default Login;