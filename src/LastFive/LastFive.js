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
    const renderCard = () => {
      return this.state.lastThree.map(card => <div class="lastFiveCard">
      <div className="headerContainer">
        <header className="lastFiveHeader">
          {card.competition.name}
          <div className="cardDate">
            {card.utcDate}
          </div>
         </header>
      </div>
      <div className="gameContainer">
        <tr className="pastGames">
          <td className="customTableCrest">
            <img
              src={TeamLogos[card.homeTeam.name]}
              className="cardLogo"
              alt="logo"
            />
          </td>

          <td className="teamName">
            {card.homeTeam.name}
          </td>
          <td className="gameScore">
            {card.score.fullTime.homeTeam}
          </td>
        </tr>
        <tr className="pastGames">
          <td className="customTableCrest">
            <img
              src={TeamLogos[card.awayTeam.name]}
              className="cardLogo"
              alt="logo"
            />
          </td>

          <td className="teamName">
            {card.awayTeam.name}
          </td>
          <td className="gameScore">
            {card.score.fullTime.awayTeam}
          </td>
        </tr>
      </div>
    </div> )
    }


    return (
      <>
      <hr></hr>
        <div className="title">Last Five games</div>
        <hr></hr>
        <div className="lastFiveCardContainer">
          <div class="lastFive-container">
          {renderCard()}
          </div>
        </div>
      </>
    );
  }
}
