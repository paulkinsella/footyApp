import React from "react";
import { NavLink } from 'react-router-dom';
import "./LandingPage.scss";
import TeamLogos from "../TeamLogos";

const LandingPage = () => {
  const className = "c-LandingPage";

  const renderImage = () => {
    return <div className={`${className}__overlayImage`}>
      <img src={TeamLogos["Manchester United FC"]} alt="" />
    </div>
  }

  return (
    <div className={`${className}`}>
      {renderImage()}
      <div class={`${className}__squareContainer`}>
        <div class="grid-1 callout primary">
          <div className={`${className}__cardTitle`}>
            <NavLink exact activeClassName="current" to='/previous-games'>Previous Games</NavLink>
            </div>
        </div>

        <div class="grid-2 callout warning">
          <div className={`${className}__cardTitle`}>
          <NavLink exact activeClassName="current" to='/top-scorer'>Top Scorers</NavLink>
          </div>
        </div>

        <div class="grid-3 callout alert">
          <div className={`${className}__cardTitle`}>
            <NavLink exact activeClassName="current" to='/competition-tables'>Competition Tables</NavLink>
            </div>
        </div>

        <div class="grid-4 callout success">
          <div className={`${className}__cardTitle`}>
            <NavLink exact activeClassName="current" to='/live-game'>Live Game</NavLink>
            </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
