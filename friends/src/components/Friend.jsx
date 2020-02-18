import React from 'react';
import './Friend.scss';

const Friend = ({ id, name, age, email, deleteFriend }) => {
    return (
        <div className='Friend'>
            <div className='delete-button'>
                <span onClick={() => deleteFriend(id)}>X</span>
            </div>
            <div className='text'>
                <p>Name: {name}</p>
                <p>Age: {age}</p>
                <p>Email: {email}</p>
            </div>
        </div>
    );
};

export default Friend;