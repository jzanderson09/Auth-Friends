import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';

const Navigation = () => {
    return (
        <div className='Navigation'>
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/friends'>Friends List</Link>
        </div>
    );
};

export default Navigation;