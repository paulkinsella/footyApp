import React from "react";
import "./App.scss";
import { Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import LandingPage from './LandingPage/LandingPage';
import Test from "./Test";

const App = () => (
  <div className='app'>
    <Main />
  </div>
);

const Main = () => {
  return <>
  <Switch>
    <Route exact path ='/previous-games' component={Test}></Route>
    <Route exact path ='/landing-page' component={LandingPage}></Route>
    <Route exact path ='/top-scorer' component={Test}></Route>
    <Route exact path ='/competition-tables' component={Test}></Route>
    <Route exact path ='/live-game' component={Test}></Route>
    <Route exact path ='/contact' component={''}></Route>
  </Switch></>
};

export default App;