import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import PrivateRoute from './utils/PrivateRoute';

function App() {
  return (
      <div>
        <Switch>
          <PrivateRoute exact path="/home" component={ Home }/>
          <Route path="api/login" component={ Login } />
          <Route path="" component={ Login } />
        </Switch>       
      </div>
  );
}

export default App;
