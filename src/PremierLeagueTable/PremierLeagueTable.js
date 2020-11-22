import React from "react";
import FootyConstants from "../constants/FootyConstants";
import "./PremierLeagueTable.scss";
import TeamLogos from "../TeamLogos";

export class PremierLeagueTable extends React.Component {
  state = {
    leagueTable: [
        { position: "", team: {} },
        { position: "", team: {} },
        { position: "", team: {} },
        { position: "", team: {} },
        { position: "", team: {} },
        { position: "", team: {} },
        { position: "", team: {} },
        { position: "", team: {} },
        { position: "", team: {} },
        { position: "", team: {} },
        { position: "", team: {} },
        { position: "", team: {} },
        { position: "", team: {} },
        { position: "", team: {} },
        { position: "", team: {} },
        { position: "", team: {} },
        { position: "", team: {} },
        { position: "", team: {} },
        { position: "", team: {} },
        { position: "", team: {} },
      ],
      mufcForm: { form: "" },

  };

  async componentDidMount() {
    const API_KEY = FootyConstants.API_KEY;
    const leagueTable = FootyConstants.LEAGUE_TABLE;
    
     //GET LEAGUE TABLE

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
          console.log("Form2", this.state.mufcForm)
  
          this.setState({
            leagueTable: data.standings[0].table.slice(
              data.standings[0].table.length - 20,
              data.standings[0].table.length
            ),
          });
        });

  }

  render() {
    const renderRows = () => {
      return this.state.leagueTable.map(row => <tr  className={
        this.state.leagueTable[0].team.name === FootyConstants.MUFC
          ? "mufcPos"
          : "League"
      }>
        <td className="customRow">{row.position}</td>
        <td className="customColumnCrest"><img className="tableCrest" alt="" src={row.team.crestUrl} /></td>
        <td className="customRow">{row.team.name}</td>
        <td className="customRow">{row.playedGames}</td>
        <td className="customColumnW">{row.won}</td>
        <td className="customColumnL">{row.lost}</td>
        <td className="customColumnD">{row.draw}</td>
        <td className="customRow">{row.points}</td>
        </tr>)
      }
    return (
      <><div className="title">Premier League</div>
         <table className="leagueTable">
         <tr>
           <th className="customColumnPos">Pos</th>
           <th className="customColumnCrest">
             {" "}
             <img
               src={TeamLogos["Premier League"]}
               className="tableCrest"
               alt="logo"
             />
           </th>
           <th className="customColumnTeam">Team</th>
           <th className="customColumnGP">Gp</th>
           <th className="customColumnW">W</th>
           <th className="customColumnL">L</th>
           <th className="customColumnD">D</th>
           <th className="customColumnPts">Pts</th>
         </tr>
         {renderRows()}
       </table></>
          
    );
  }
}
