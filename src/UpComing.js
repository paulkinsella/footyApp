import React from "react";
import "./App.scss";
import FootyConstants from "./constants/FootyConstants";
import TeamLogos from "./TeamLogos";

export class UpComing extends React.Component {
  state = {
    upComing: { homeTeam: {}, awayTeam: {}, competition: { name: "" } },
  };

  async componentDidMount() {
    const API_KEY = FootyConstants.API_KEY;
    const nextMatch = FootyConstants.NEXT_MATCH;

    await fetch(nextMatch, {
      method: "GET",
      headers: {
        "X-Auth-Token": API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Upcoming", data);
        this.setState({ upComing: data.matches[0] });
        this.setState({ compName: data.matches[0].competition.name });
      });

    //GET MUFC DATA
  }
  render() {
    const renderImage = () => {
      if (this.state.upComing.competition.name === FootyConstants.CHAMP) {
        return (
          <img className="upComing-match" src={TeamLogos.champLeague} alt="" />
        );
      } else {
        return (
          <img
            className="upComing-match"
            src={TeamLogos["Premier League"]}
            alt=""
          />
        );
      }
    };
    return (
      <div class="formGuide">
        {renderImage()} {"  "}
        {this.state.upComing.homeTeam.name} -VS-{" "}
        {this.state.upComing.awayTeam.name}
        {"  "}
        {renderImage()}
        <div className="compName">{this.state.compName}</div>
      </div>
    );
  }
}
