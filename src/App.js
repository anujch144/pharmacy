import React, { useState } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Login from "./Components/Login";
import Dashboard from './Components/Dashboard';
import SideNav from './Components/SideNav';

function App() {

    return (
        <div>  
          <Login/>
          <BrowserRouter>
          <Switch>
            <Route path="/dashboard" Component={Dashboard}/>
          </Switch>
          </BrowserRouter>
          {/* <SideNav/> */}
        </div>
    );
}
export default App;