import React from "react";
import FootyConstants from "./constants/FootyConstants";
import "./App.css";
import TeamLogos from "./TeamLogos";

export class PrevGames extends React.Component {
  state = {
    numOfPrevMatchs: "",
    lastThree: [
      {
        matchDay: "",
        homeTeam: {},
        awayTeam: {},
        score: { fullTime: { homeTeam: "", awayTeam: "" } },
        season: { startDate: "" },
      },
      {
        matchDay: "",
        homeTeam: {},
        awayTeam: {},
        score: { fullTime: { homeTeam: "", awayTeam: "" } },
        season: { startDate: "" },
      },
      {
        matchDay: "",
        homeTeam: {},
        awayTeam: {},
        score: { fullTime: { homeTeam: "", awayTeam: "" } },
        season: { startDate: "" },
      },
    ],
    mufcForm: { form: "" },
  };

  async componentDidMount() {
    const API_KEY = FootyConstants.API_KEY;
    const prevGameUrl = FootyConstants.PREV_GAME_URL;
    const leagueTable = FootyConstants.LEAGUE_TABLE;

    await fetch(prevGameUrl, {
      method: "GET",
      headers: {
        "X-Auth-Token": API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ numOfPrevMatchs: data.count });
        this.setState({
          lastThree: data.matches.slice(
            data.matches.length - 3,
            data.matches.length
          ),
        });
      });

    await fetch(leagueTable, {
      method: "GET",
      headers: {
        "X-Auth-Token": API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Prev", data.standings[0].table);
        for (let i = 0; i < data.standings[0].table.length; i++) {
          if (data.standings[0].table[i].team.name === FootyConstants.MUFC) {
            this.setState({ mufcForm: data.standings[0].table[i] });
          }
        }
        console.log("Form2", this.state.mufcForm);

        this.setState({
          leagueTable: data.standings[0].table.slice(
            data.standings[0].table.length - 20,
            data.standings[0].table.length
          ),
        });
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
        <div className="tableBody">
          <img
            src={TeamLogos[FootyConstants.MUFC]}
            className="App-logo"
            alt="logo"
          />
          <div className="title">Last 3 Fixtures</div>
          <div class="tooltip">
            <span class="tooltiptext">{this.state.mufcForm.form}</span>
            <table>
              <tr>
                <th className="customColumn">Home Team</th>
                <th className="customColumn">Score</th>
                <th className="customColumn">Away Team</th>
              </tr>

              <tr>
                <td>
                  <img
                    src={TeamLogos[this.state.lastThree[0].homeTeam.name]}
                    className="App-logo3"
                    alt="logo"
                  />{" "}
                  {this.state.lastThree[0].homeTeam.name}
                </td>
                <td className="complete">
                  <p className="matchDay">
                    Match Day {this.state.lastThree[0].matchday}
                  </p>
                  {this.state.lastThree[0].score.fullTime.homeTeam} -{" "}
                  {this.state.lastThree[0].score.fullTime.awayTeam}
                </td>
                <td>
                  {this.state.lastThree[0].awayTeam.name}{" "}
                  <img
                    src={TeamLogos[this.state.lastThree[0].awayTeam.name]}
                    className="App-logo3"
                    alt="logo"
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <img
                    src={TeamLogos[this.state.lastThree[1].homeTeam.name]}
                    className="App-logo3"
                    alt="logo"
                  />{" "}
                  {this.state.lastThree[1].homeTeam.name}
                </td>
                <td className="complete">
                  <p className="matchDay">
                    Match Day {this.state.lastThree[1].matchday}
                  </p>
                  {this.state.lastThree[1].score.fullTime.homeTeam} -{" "}
                  {this.state.lastThree[1].score.fullTime.awayTeam}
                  <br />
                </td>
                <td>
                  {this.state.lastThree[1].awayTeam.name}{" "}
                  <img
                    src={TeamLogos[this.state.lastThree[1].awayTeam.name]}
                    className="App-logo3"
                    alt="logo"
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <img
                    src={TeamLogos[this.state.lastThree[2].homeTeam.name]}
                    className="App-logo3"
                    alt="logo"
                  />
                  {this.state.lastThree[2].homeTeam.name}
                </td>
                <td
                  className={this.state.champGame ? "champsLeague" : "complete"}
                >
                  <p className="matchDay">
                    Match Day {this.state.lastThree[2].matchday}
                  </p>
                  {this.state.lastThree[2].score.fullTime.homeTeam} -{" "}
                  {this.state.lastThree[2].score.fullTime.awayTeam}
                  <br />
                  <br />
                </td>
                <td>
                  {this.state.lastThree[2].awayTeam.name}{" "}
                  <img
                    src={TeamLogos[this.state.lastThree[2].awayTeam.name]}
                    className="App-logo3"
                    alt="logo"
                  />
                </td>
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
          </div>
        </div>
      </>
    );
  }
}
