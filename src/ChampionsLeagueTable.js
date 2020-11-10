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

  const renderRows = () => {
    return this.state.champLeagueTable.map(row => <tr className={"champsLeague"}>
      <td className="customRow">{row.position}</td>
      <td className="customRow"><img className="tableCrest" src={row.team.crestUrl} /></td>
      <td className="customRow">{row.team.name}</td>
      <td className="customRow">{row.playedGames}</td>
      <td className="customRow">{row.won}</td>
      <td className="customRow">{row.lost}</td>
      <td className="customRow">{row.draw}</td>
      <td className="customRow">{row.points}</td>
      </tr>)
    }

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
        {renderRows()}
      </table></>
    );
  }
}
