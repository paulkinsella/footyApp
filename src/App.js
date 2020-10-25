import React from "react";
import TeamLogos from "./TeamLogos";
import "./App.css";
import FootyConstants from "./constants/FootyConstants";
import { PrevGames } from "./PrevGames";
import { TopScorer } from "./TopScorer";
import { PremierLeagueTable } from "./PremierLeagueTable";
import { ChampionsLeagueTable } from "./ChampionsLeagueTable";
import { Sample } from "./Sample";
import { UpComing } from "./UpComing";

class footyApp extends React.Component {
  state = {
    liveGame: { homeTeam: {}, awayTeam: {} },
    liveGameScore: {
      fullTime: {
        homeTeam: "",
        awayTeam: "",
      },
    },
    liveGameFlag: false,
    loading: true,
    upComing: { homeTeam: {}, awayTeam: {} },
    champGame: false,
    liveGameChamp: false,
  };

  async componentDidMount() {
    const API_KEY = FootyConstants.API_KEY;
    const topScorerUrl = FootyConstants.TOP_SCORER_URL;
    const mufcDataUrl = FootyConstants.MUFC_DATA_URL;
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
          this.setState({ liveGame: data.matches[0] });
          this.setState({ liveGameScore: data.matches[0].score });
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

    //GET MUFC DATA

    await fetch(mufcDataUrl, {
      method: "GET",
      headers: {
        "X-Auth-Token": API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ mufcCrest: data.crestUrl });
      });

    //GET TOP SCORER LOADING
    await fetch(topScorerUrl, {
      method: "GET",
      headers: {
        "X-Auth-Token": API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ compTopScorer: data.scorers[0], loading: false });
      });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <img
            src={
              this.state.liveGameChamp
                ? TeamLogos.champLeague
                : TeamLogos["Premier League"]
            }
            className="league-logo"
            alt="logo"
          />
          {this.state.loading ? (
            <div className="loaderContainer">
              <div class="loader"></div>
            </div>
          ) : (
            <TopScorer></TopScorer>
          )}

          <PrevGames></PrevGames>
          <br />
          {this.state.liveGameChamp ? (
            <ChampionsLeagueTable></ChampionsLeagueTable>
          ) : (
            <>
              {" "}
              <Sample></Sample>
              <div className="title">Premier League</div>
              <PremierLeagueTable></PremierLeagueTable>
            </>
          )}
          <UpComing></UpComing>
        </div>
      </div>
    );
  }
}

export default footyApp;
