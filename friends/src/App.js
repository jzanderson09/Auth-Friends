import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

// Components:
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <h1>App!</h1>
      <Route exact path='/' component={Login}/>
    </div>
  );
}

export default App;
