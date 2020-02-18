import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

// Components:
import Navigation from './components/Navigation';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import FriendsList from './components/FriendsList';

function App() {
  return (
    <div className="App">
      <h1>App!</h1>
      <Navigation />
      <Switch>
          <Route path='/login' component={Login} />
          <ProtectedRoute exact path='/friends' component={FriendsList} />
      </Switch>
    </div>
  );
}

export default App;
