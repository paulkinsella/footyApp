import React from "react";
import FootyConstants from "../constants/FootyConstants";
import "./LastFive.scss";
import TeamLogos from "../TeamLogos";

export class LastFive extends React.Component {
  state = {
    lastThree: [
      {
        matchDay: "",
        competition: { name: "" },
        homeTeam: {},
        awayTeam: {},
        score: { fullTime: { homeTeam: "", awayTeam: "" } },
        season: { utcDate: "" },
      },
      {
        matchDay: "",
        competition: { name: "" },
        homeTeam: {},
        awayTeam: {},
        score: { fullTime: { homeTeam: "", awayTeam: "" } },
        season: { utcDate: "" },
      },
      {
        matchDay: "",
        competition: { name: "" },
        homeTeam: {},
        awayTeam: {},
        score: { fullTime: { homeTeam: "", awayTeam: "" } },
        season: { utcDate: "" },
      },
      {
        matchDay: "",
        competition: { name: "" },
        homeTeam: {},
        awayTeam: {},
        score: { fullTime: { homeTeam: "", awayTeam: "" } },
        season: { utcDate: "" },
      },
      {
        matchDay: "",
        competition: { name: "" },
        homeTeam: {},
        awayTeam: {},
        score: { fullTime: { homeTeam: "", awayTeam: "" } },
        season: { utcDate: "" },
      },
    ],
  };

  async componentDidMount() {
    const API_KEY = FootyConstants.API_KEY;
    const prevGameUrl = FootyConstants.PREV_GAME_URL;

    //GET TOP SCORER

    await fetch(prevGameUrl, {
      method: "GET",
      headers: {
        "X-Auth-Token": API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("LastFive", data.matches[0]);
        this.setState({ numOfPrevMatchs: data.count });
        this.setState({
          lastThree: data.matches.slice(
            data.matches.length - 5,
            data.matches.length
          ),
        });
      });
  }

  render() {
    return (
      <>
        <div className="title">Last Five games</div>
        <hr></hr>
        <div className="lastFiveCardContainer">
          <div class="lastFive-container">
          <div class="lastFiveCard">
          <div className="headerContainer">
            <header className="lastFiveHeader">
              {this.state.lastThree[0].competition.name}
              <div className="cardDate">
                {this.state.lastThree[0].utcDate}
              </div>
             </header>
          </div>
          <div className="gameContainer">
            <tr className="pastGames">
              <td className="customTableCrest">
                <img
                  src={TeamLogos[this.state.lastThree[0].homeTeam.name]}
                  className="cardLogo"
                  alt="logo"
                />
              </td>

              <td className="teamName">
                {this.state.lastThree[0].homeTeam.name}
              </td>
              <td className="gameScore">
                {this.state.lastThree[0].score.fullTime.homeTeam}
              </td>
            </tr>
            <tr className="pastGames">
              <td className="customTableCrest">
                <img
                  src={TeamLogos[this.state.lastThree[0].awayTeam.name]}
                  className="cardLogo"
                  alt="logo"
                />
              </td>

              <td className="teamName">
                {this.state.lastThree[0].awayTeam.name}
              </td>
              <td className="gameScore">
                {this.state.lastThree[0].score.fullTime.awayTeam}
              </td>
            </tr>
          </div>
        </div>

            <div class="lastFiveCard">
              <div className="headerContainer">
                <header className="lastFiveHeader">
                  {this.state.lastThree[1].competition.name}
                  <div className="cardDate">
                    {this.state.lastThree[1].utcDate}
                  </div>
                </header>
              </div>
              <div className="gameContainer">
                <tr className="pastGames">
                  <td className="customTableCrest">
                    <img
                      src={TeamLogos[this.state.lastThree[1].homeTeam.name]}
                      className="cardLogo"
                      alt="logo"
                    />
                  </td>

                  <td className="teamName">
                    {this.state.lastThree[1].homeTeam.name}
                  </td>
                  <td className="gameScore">
                    {" "}
                    {this.state.lastThree[1].score.fullTime.homeTeam}
                  </td>
                </tr>
                <tr className="pastGames">
                  <td className="customTableCrest">
                    <img
                      src={TeamLogos[this.state.lastThree[1].awayTeam.name]}
                      className="cardLogo"
                      alt="logo"
                    />
                  </td>

                  <td className="teamName">
                    {this.state.lastThree[1].awayTeam.name}
                  </td>
                  <td className="gameScore">
                    {this.state.lastThree[1].score.fullTime.awayTeam}
                  </td>
                </tr>
              </div>
            </div>

            <div class="lastFiveCard">
              <div className="headerContainer">
                <header className="lastFiveHeader">
                  {this.state.lastThree[2].competition.name}
                  <div className="cardDate">
                    {this.state.lastThree[2].utcDate}
                  </div>
                </header>
              </div>
              <div className="gameContainer">
                <tr className="pastGames">
                  <td className="customTableCrest">
                    <img
                      src={TeamLogos[this.state.lastThree[2].homeTeam.name]}
                      className="cardLogo"
                      alt="logo"
                    />
                  </td>

                  <td className="teamName">
                    {this.state.lastThree[2].homeTeam.name}
                  </td>
                  <td className="gameScore">
                    {this.state.lastThree[2].score.fullTime.homeTeam}
                  </td>
                </tr>
                <tr className="pastGames">
                  <td className="customTableCrest">
                    <img
                      src={TeamLogos[this.state.lastThree[2].awayTeam.name]}
                      className="cardLogo"
                      alt="logo"
                    />
                  </td>

                  <td className="teamName">
                    {this.state.lastThree[2].awayTeam.name}
                  </td>
                  <td className="gameScore">
                    {this.state.lastThree[2].score.fullTime.awayTeam}
                  </td>
                </tr>
              </div>
            </div>

            <div class="lastFiveCard">
              <div className="headerContainer">
                <header className="lastFiveHeader">
                  {this.state.lastThree[3].competition.name}
                  <div className="cardDate">
                    {this.state.lastThree[3].utcDate}
                  </div>
                </header>
              </div>
              <div className="gameContainer">
                <tr className="pastGames">
                  <td className="customTableCrest">
                    <img
                      src={TeamLogos[this.state.lastThree[3].homeTeam.name]}
                      className="cardLogo"
                      alt="logo"
                    />
                  </td>

                  <td className="teamName">
                    {this.state.lastThree[3].homeTeam.name}
                  </td>
                  <td className="gameScore">
                    {this.state.lastThree[3].score.fullTime.homeTeam}
                  </td>
                </tr>
                <tr className="pastGames">
                  <td className="customTableCrest">
                    <img
                      src={TeamLogos[this.state.lastThree[3].awayTeam.name]}
                      className="cardLogo"
                      alt="logo"
                    />
                  </td>

                  <td className="teamName">
                    {this.state.lastThree[3].awayTeam.name}
                  </td>
                  <td className="gameScore">
                    {this.state.lastThree[3].score.fullTime.awayTeam}
                  </td>
                </tr>
              </div>
            </div>

            <div class="lastFiveCard">
              <div className="headerContainer">
                <header className="lastFiveHeader">
                  {this.state.lastThree[4].competition.name}
                  <div className="cardDate">
                    {this.state.lastThree[4].utcDate}
                  </div>
                </header>
              </div>
              <div className="gameContainer">
                <tr className="pastGames">
                  <td className="customTableCrest">
                    <img
                      src={TeamLogos[this.state.lastThree[4].homeTeam.name]}
                      className="cardLogo"
                      alt="logo"
                    />
                  </td>

                  <td className="teamName">
                    {this.state.lastThree[4].homeTeam.name}
                  </td>
                  <td className="gameScore">
                    {this.state.lastThree[4].score.fullTime.homeTeam}
                  </td>
                </tr>
                <tr className="pastGames">
                  <td className="customTableCrest">
                    <img
                      src={TeamLogos[this.state.lastThree[4].awayTeam.name]}
                      className="cardLogo"
                      alt="logo"
                    />
                  </td>

                  <td className="teamName">
                    {this.state.lastThree[4].awayTeam.name}
                  </td>
                  <td className="gameScore">
                    {this.state.lastThree[4].score.fullTime.awayTeam}
                  </td>
                </tr>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
