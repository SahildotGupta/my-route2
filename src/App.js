import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import About from './components/About';
import Login from './components/Login';


function App() {
  return (
    <div className="wrapper">
 
      <nav>
        <ul>
          <li><a href="/About">About</a></li>
          <li><a href="/Login">Login</a></li>
          
        </ul>
      </nav>
      <BrowserRouter>
      <Switch>
      <Route path="/About">
            <About />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

