import React from "react";
import "./App.scss";
import FootyConstants from "./constants/FootyConstants";
import TeamLogos from "./TeamLogos";

export class UpComing extends React.Component {
  state = {
    upComing: { homeTeam: {}, awayTeam: {} },
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
        this.setState({ upComing: data.matches[0] });
        this.setState({ compName: data.matches[0].competition.name });
      });

    //GET MUFC DATA
  }
  render() {
    return (
      <div class="formGuide">
        <img className="ball" src={TeamLogos.fBall} alt="" /> {"  "}
        {this.state.upComing.homeTeam.name} -VS-{" "}
        {this.state.upComing.awayTeam.name}
        {"  "}
        <img className="ball" src={TeamLogos.fBall} alt="" />
        <div className="compName">{this.state.compName}</div>
      </div>
    );
  }
}
