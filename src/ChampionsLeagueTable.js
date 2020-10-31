import React from "react";
import FootyConstants from "./constants/FootyConstants";
import "./App.scss";
import TeamLogos from "./TeamLogos";

export class ChampionsLeagueTable extends React.Component {
  state = {
    champLeagueTable: [
      { position: "", team: {} },
      { position: "", team: {} },
      { position: "", team: {} },
      { position: "", team: {} },
    ],
  };

  async componentDidMount() {
    const API_KEY = FootyConstants.API_KEY;
    const champLeagueTable = FootyConstants.CHAMP_LEAGUE_TABLE;

    //GET LEAGUE TABLE

    await fetch(champLeagueTable, {
      method: "GET",
      headers: {
        "X-Auth-Token": API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          champLeagueTable: data.standings[21].table.slice(
            data.standings[21].table.length - 4,
            data.standings[21].table.length
          ),
        });
        console.log("Table", this.state.champLeagueTable);
      });
  }

  render() {
    return (
     <> <div className="title">Champions League Group H</div>
      <table className="leagueTable">
        <tr>
          <th className="customColumnTwo">Pos</th>
          <th className="customColumnTwo">
            {" "}
            <img
              src={TeamLogos.champLeague}
              className="tableCrest"
              alt="logo"
            />
          </th>
          <th className="customColumnTeam">Team</th>
          <th className="customColumnTwo">Gp</th>
          <th className="customColumnTwo">W</th>
          <th className="customColumnTwo">L</th>
          <th className="customColumnTwo">D</th>
          <th className="customColumnTwo">Pts</th>
        </tr>
        <tr className={"champsLeague"}>
          <td className="customRow">
            {this.state.champLeagueTable[0].position}
          </td>
          <td className="customRow">
            <img
              className="tableCrest"
              src={this.state.champLeagueTable[0].team.crestUrl}
              alt=""
            />
          </td>
          <td className="customColumnTeam">
            {this.state.champLeagueTable[0].team.name}
          </td>
          <td className="customRow">
            {this.state.champLeagueTable[0].playedGames}
          </td>
          <td className="customRow">{this.state.champLeagueTable[0].won}</td>
          <td className="customRow">{this.state.champLeagueTable[0].lost}</td>
          <td className="customRow">{this.state.champLeagueTable[0].draw}</td>
          <td className="customRow">{this.state.champLeagueTable[0].points}</td>
        </tr>
        <tr className={"champsLeague"}>
          <td className="customRow">
            {this.state.champLeagueTable[1].position}
          </td>
          <td className="customRow">
            <img
              className="tableCrest"
              src={this.state.champLeagueTable[1].team.crestUrl}
              alt=""
            />
          </td>
          <td className="customRow">
            {this.state.champLeagueTable[1].team.name}
          </td>
          <td className="customRow">
            {this.state.champLeagueTable[1].playedGames}
          </td>
          <td className="customRow">{this.state.champLeagueTable[1].won}</td>
          <td className="customRow">{this.state.champLeagueTable[1].lost}</td>
          <td className="customRow">{this.state.champLeagueTable[1].draw}</td>
          <td className="customRow">{this.state.champLeagueTable[1].points}</td>
        </tr>
        <tr className={"champsLeague"}>
          <td className="customRow">
            {this.state.champLeagueTable[2].position}
          </td>
          <td className="customRow">
            <img
              className="tableCrest"
              src={this.state.champLeagueTable[2].team.crestUrl}
              alt=""
            />
          </td>
          <td className="customRow">
            {this.state.champLeagueTable[2].team.name}
          </td>
          <td className="customRow">
            {this.state.champLeagueTable[2].playedGames}
          </td>
          <td className="customRow">{this.state.champLeagueTable[2].won}</td>
          <td className="customRow">{this.state.champLeagueTable[2].lost}</td>
          <td className="customRow">{this.state.champLeagueTable[2].draw}</td>
          <td className="customRow">{this.state.champLeagueTable[2].points}</td>
        </tr>
        <tr className={"champsLeague"}>
          <td className="customRow">
            {this.state.champLeagueTable[3].position}
          </td>
          <td className="customRow">
            <img
              className="tableCrest"
              src={this.state.champLeagueTable[3].team.crestUrl}
              alt=""
            />
          </td>
          <td className="customRow">
            {this.state.champLeagueTable[3].team.name}
          </td>
          <td className="customRow">
            {this.state.champLeagueTable[3].playedGames}
          </td>
          <td className="customRow">{this.state.champLeagueTable[3].won}</td>
          <td className="customRow">{this.state.champLeagueTable[3].lost}</td>
          <td className="customRow">{this.state.champLeagueTable[3].draw}</td>
          <td className="customRow">{this.state.champLeagueTable[3].points}</td>
        </tr>
      </table></>
    );
  }
}
