import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import './FriendsForm.scss';

const FriendsForm = () => {
    const [friend, setFriend] = useState({
        name: '',
        age: '',
        email: ''
    });

    const friendHandler = e => {
        e.preventDefault();
        setFriend({
            ...friend,
            [e.target.name]: e.target.value
        });
    };

    const submitForm = e => {
        axiosWithAuth()
            .post('/friends', friend)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
        window.alert('Success!  New friend added!');
        setFriend({ name: '', age: '', email: '' });
    }

    return (
        <div className='FriendsForm'>
            <form onSubmit={submitForm}>
                <input 
                    type='text'
                    name='name'
                    value={friend.name}
                    placeholder='Name'
                    onChange={friendHandler}
                />
                <input 
                    type='text'
                    name='age'
                    value={friend.age}
                    placeholder='Age'
                    onChange={friendHandler}
                />
                <input 
                    type='text'
                    name='email'
                    value={friend.email}
                    placeholder='Email'
                    onChange={friendHandler}
                />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default FriendsForm;