import React from "react";
import { ChampLeagueTopScorer } from "../ChampionsLeagueTopScorer/ChampLeagueTopScorer";
import { TopScorer } from "../TopScorer";
import "./TopScorerSection.scss";

const className = "c-TopScorerSection";
const  TopScorerSection = () => {
  
  return (
    <div className={`${className}`}>
         <div className={`${className}__row`}>
         <div className={`${className}__title`}>
        Premier League Top Scorers
      </div>
      <div className={`${className}__cardSection`}>
        <TopScorer />
      </div>
      </div>

      <div className={`${className}__row`}>
         <div className={`${className}__title`}>
        Champions League Top Scorer
      </div>
      <div className={`${className}__cardSection`}>
        <ChampLeagueTopScorer />
      </div>
      </div>
      </div>
    )
}

export default TopScorerSection
