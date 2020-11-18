import React from "react";
import { NavLink } from 'react-router-dom';
import TeamLogos from "./TeamLogos";
import "./App.scss";
import FootyConstants from "./constants/FootyConstants";
import { TopScorer } from "./TopScorer";
import { PremierLeagueTable } from "./PremierLeagueTable/PremierLeagueTable";
import { ChampionsLeagueTable } from "./ChampionsLeagueTable";
import { Sample } from "./Sample";
import { UpComing } from "./UpComing";
import { ChampLeagueTopScorer } from "./ChampionsLeagueTopScorer/ChampLeagueTopScorer";
import { LiveGame } from './LiveGame/LiveGame'
import { LastFive } from './LastFive/LastFive'


class footyApp extends React.Component {
  state = {
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
    const Navigation = () => {
      return <>
      <nav>
        
          <NavLink exact activeClassName="current" to='/'>Home</NavLink><br />
          <NavLink exact activeClassName="current" to='/test'>Test</NavLink><br />
          <NavLink exact activeClassName="current" to='/contact'>Contact</NavLink>
        
      </nav>
     </>
    };

		const getNoLiveGame = () => {
      return (
				<table className="custom">
        <tr>
          <td>Game Coming Up...</td>
          <td className="noLiveGame">-</td>
          <td>Game Coming Up...</td>
        </tr></table>
      );
    };

  const showTable = () => {
      this.setState({ liveGameChamp: true });
    };

    const resetTable = () => {
      this.setState({ liveGameChamp: false });
    };

    const getTopScorer = () => {
      if (this.state.liveGameChamp) {
        return <ChampLeagueTopScorer/>;
      } else {
        return <TopScorer/>;
      }
    };

    return (
      <div className="App">
        <div className="container">
          {Navigation()}
          <img
            src={
              this.state.liveGameChamp
                ? TeamLogos.champLeague
                : TeamLogos["Premier League"]
            }
            className={this.state.liveGameChamp ? 'champLeague-logo' : 'league-logo'}
            alt="logo"
          />
          {this.state.loading ? (
            <div className="loaderContainer">
              <div class="loader"></div>
            </div>
          ) : (
            getTopScorer()
          )}

          <LastFive/>
          <br />
          {this.state.liveGameFlag ? <LiveGame/> : getNoLiveGame() }
         
          <br />
          <div className="buttonContainer">
            <button className="button" onClick={showTable}>
              Champions League
            </button>
          
            <div className="buttonContainer"></div>
            <button className="button" onClick={resetTable}>
              Premier League
            </button>
          </div>
          {this.state.liveGameChamp ? (
            <ChampionsLeagueTable/>
          ) : (
            <>
              {" "}
              <div className="sample">
              <Sample></Sample>
              </div>
              <div className="title">Premier League</div>
              <PremierLeagueTable/>
            </>
          )}
          <UpComing/>
          </div>
      </div>
    );
  }
}

export default footyApp;
