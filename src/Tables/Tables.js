import React from "react";
import FootyConstants from "../constants/FootyConstants";
import "./Tables.scss";
import { PremierLeagueTable } from "../PremierLeagueTable/PremierLeagueTable";
import { ChampionsLeagueTable } from "../ChampionsLeagueTable";
const className = "c-Tables";

export class Tables extends React.Component {
  state = {
    liveGameChamp: false,
    liveGameFlag: false,
  };

  async componentDidMount() {
    const API_KEY = FootyConstants.API_KEY;
    const liveGameUrl = FootyConstants.LIVE_GAME_URL;
   
    await fetch(liveGameUrl, {
      method: "GET",
      headers: {
        "X-Auth-Token": API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.matches[0]) {
          this.setState({ liveGameFlag: true });
         if (data.matches[0].competition.name === "UEFA Champions League") {
            this.setState({ liveGameChamp: true });
          } else {
            this.setState({ liveGameChamp: false });
          }
        } else {
          return this.setState({ liveGame: false });
        }
      });

  }

  render() {
    
  const showTable = () => {
    this.setState({ liveGameChamp: true });
  };

  const resetTable = () => {
    this.setState({ liveGameChamp: false });
  };

    return (
      <div className={`${className}`}>
           <div className={`${className}__container`}>
           <div className={`${className}__header`}>
           <span>
             <button className={`${className}__customButton`} onClick={resetTable}>Premier League</button>
        </span>
       <span>
       <button className={`${className}__customButton`} onClick={showTable}>Champions League</button>
     </span>
             </div>
             <hr className={`${className}__ruler`}></hr>
             {this.state.liveGameChamp ? <ChampionsLeagueTable /> :
          <PremierLeagueTable /> }
        </div>
        </div>
      )
  }
}

export default Tables