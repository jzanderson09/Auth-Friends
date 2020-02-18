import React, { Component } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import './FriendsList.scss';

// Components:
import FriendsForm from './FriendsForm';
import Friend from './Friend';

class FriendsList extends Component {
    constructor() {
        super();
        this.state = {
            friendsList: []
        };
    }

    componentDidMount() {
        axiosWithAuth()
        .get('/friends')
        .then(res => this.setState({ friendsList: res.data }))
        .catch(err => console.log(err));
    }

    deleteFriend = id => {
        const confirmation = window.confirm('Are you sure you want to delete this friend?');
        if (confirmation) {
            axiosWithAuth()
                .delete(`/friends/${id}`)
                .then(console.log('Success, friend deleted!'))
                .catch(err => console.log(err));
        }
    }

    render() {
        if (this.state.friendsList) {
            return (
                <div className='FriendsList'>
                    <FriendsForm />
                    {this.state.friendsList.map(friend => 
                        <Friend
                            key={friend.id}
                            id={friend.id}
                            name={friend.name} 
                            age={friend.age} 
                            email={friend.email}
                            deleteFriend={this.deleteFriend}
                        /> 
                    )}
                </div>
            );
        }
        else {
            return (
                <div className='FriendsList'>
                    <p>loading friends...</p>
                </div>
            );
        }
    }
};

export default FriendsList;