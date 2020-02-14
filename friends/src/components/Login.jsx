import React, { useState } from 'react';

const Login = () => {
    const [user, setUser] = useState({
        username: '',
        password: ''
    });

    const updateUser = e => {
        e.preventDefault();
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    return (
        <div className='Login'>
            <form>
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
};

export default Login;