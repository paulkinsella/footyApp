import React from "react";
import "./App.css";
import FootyConstants from "./constants/FootyConstants";

export class LiveGame extends React.Component {
  state = {
    liveGame: { homeTeam: {}, awayTeam: {} },
    liveGameScore: {
      fullTime: {
        homeTeam: "",
        awayTeam: "",
      },
    },
    liveGameFlag: false,
    liveGameChamp: false,
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
        console.log("live game data", data);
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
  }

  render() {
    const getNoLiveGame = () => {
      return (
        <tr>
          <td>Game Coming Up...</td>
          <td className="noLiveGame"></td>
          <td>Game Coming Up...</td>
        </tr>
      );
    };
    return (
      <>
      <br />
        <table>
          <tr>
            <th className="customColumn">Home Team</th>
            <th className="customColumn">Live Game</th>
            <th className="customColumn">Away Team</th>
          </tr>
          {this.state.liveGameFlag ? (
            <tr>
              <td>{this.state.liveGame.homeTeam.name}</td>
              <td className="live">
                {this.state.liveGameScore.fullTime.homeTeam} -{" "}
                {this.state.liveGameScore.fullTime.awayTeam}
              </td>
              <td>{this.state.liveGame.awayTeam.name}</td>
            </tr>
          ) : (
            getNoLiveGame()
          )}
        </table>
      </>
    );
  }
}
