import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Shop from './views/shop';
import Home from './views/home';

export default class App extends Component{
  /* Processing/background data section */

  /*
  return -> actually has the HTML/pseudo-HTML/pseudo-Javascript/React code
  Each react component - be it functional or class based - is intended to be a single HTML element
  Inside of the render's return we are mostly writing in HTML -> if you want to use JavaScript, you put it in curly brackets
  */
 render() {
    return (
      <div className="App">
        {/* Navbar custom component being placed in the App component's html */}
        < Navbar /> 
        
        {/* Routher being set up to swap between Home and Shop components*/}
        <Switch>
          <Route exact path='/' render={() => <Home />} />
          <Route path='/shop' render={() => <Shop title={'League | Shop'} />}/>
        </Switch>
      </div>
    );
  }
}
