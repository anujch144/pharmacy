import React, { useState } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Login from './Components/Login';
import Admindash from './Components/Admindash';
import Salesdash from './Components/Salesdash';


function App() {

    return (
        <div>
          <BrowserRouter>
          <Switch>
            <Route path='/login' component={Login}/>
            <Route path='/admindash' component={Admindash}/>
            <Route path='/salesdash' component={Salesdash}/>
          </Switch>
          </BrowserRouter>
        </div>
    );
}
export default App;