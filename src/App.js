import './App.css';
import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar';
import Shop from './views/shop';
import Home from './views/home';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <div>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/cart" exact>
          <Shop/>
        </Route>
      </div>
    </BrowserRouter>
  )
}

export default App

