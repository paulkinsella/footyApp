import React from "react";
import "./App.scss";
import { Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Test from './Test';

const App = () => (
  <div className='app'>
    <Main />
  </div>
);

const Main = () => {
  return <>
  <Switch>
    <Route exact path ='/' component={HomePage}></Route>
    <Route exact path ='/test' component={Test}></Route>
    <Route exact path ='/contact' component={''}></Route>
  </Switch></>
};

export default App;