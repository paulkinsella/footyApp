import React from "react";
import "./App.scss";
import { Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import LandingPage from './LandingPage/LandingPage';
import Test from "./Test";
import PreviousGames from "./PreviousGames/PreviousGames";
import Tables from "./Tables/Tables";
import TopScorerSection from "./TopScorerSection/TopScorerSection";

const App = () => (
  <div className='app'>
    <Main />
  </div>
);

const Main = () => {
  return <>
  <Switch>
  <Route exact path ='/' component={LandingPage}></Route>
    <Route exact path ='/previous-games' component={PreviousGames}></Route>
    <Route exact path ='/landing-page' component={LandingPage}></Route>
    <Route exact path ='/top-scorer' component={TopScorerSection}></Route>
    <Route exact path ='/competition-tables' component={Tables}></Route>
    <Route exact path ='/live-game' component={HomePage}></Route>
    <Route exact path ='/contact' component={''}></Route>
  </Switch></>
};

export default App;