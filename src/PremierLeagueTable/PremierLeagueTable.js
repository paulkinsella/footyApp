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
    return (
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
         <tr
           className={
             this.state.leagueTable[0].team.name === FootyConstants.MUFC
               ? "mufcPos"
               : "champsLeague"
           }
         >
           <td className="customRow">
             {this.state.leagueTable[0].position}
           </td>
           <td className="customRowLogo">
             <img
               className="tableCrest"
               src={this.state.leagueTable[0].team.crestUrl}
               alt=""
             />
           </td>
           <td className="customColumnTeam">
             {this.state.leagueTable[0].team.name}
           </td>
           <td className="customRow">
             {this.state.leagueTable[0].playedGames}
           </td>
           <td className="customRowW">{this.state.leagueTable[0].won}</td>
           <td className="customRowL">
             {this.state.leagueTable[0].lost}
           </td>
           <td className="customRowD">
             {this.state.leagueTable[0].draw}
           </td>
           <td className="customRowPts">
             {this.state.leagueTable[0].points}
           </td>
         </tr>
         <tr
           className={
             this.state.leagueTable[1].team.name === FootyConstants.MUFC
               ? "mufcPos"
               : "champsLeague"
           }
         >
           <td className="customRow">
             {this.state.leagueTable[1].position}
           </td>
           <td className="customRowLogo">
             <img
               className="tableCrest"
               src={this.state.leagueTable[1].team.crestUrl}
               alt=""
             />
           </td>
           <td className="customRow">
             {this.state.leagueTable[1].team.name}
           </td>
           <td className="customRow">
             {this.state.leagueTable[1].playedGames}
           </td>
           <td className="customRowW">{this.state.leagueTable[1].won}</td>
           <td className="customRowL">
             {this.state.leagueTable[1].lost}
           </td>
           <td className="customRowD">
             {this.state.leagueTable[1].draw}
           </td>
           <td className="customRowPts">
             {this.state.leagueTable[1].points}
           </td>
         </tr>
         <tr
           className={
             this.state.leagueTable[2].team.name === FootyConstants.MUFC
               ? "mufcPos"
               : "champsLeague"
           }
         >
           <td className="customRow">
             {this.state.leagueTable[2].position}
           </td>
           <td className="customRowLogo">
             <img
               className="tableCrest"
               src={this.state.leagueTable[2].team.crestUrl}
               alt=""
             />
           </td>
           <td className="customRow">
             {this.state.leagueTable[2].team.name}
           </td>
           <td className="customRow">
             {this.state.leagueTable[2].playedGames}
           </td>
           <td className="customRowW">{this.state.leagueTable[2].won}</td>
           <td className="customRowL">
             {this.state.leagueTable[2].lost}
           </td>
           <td className="customRowD">
             {this.state.leagueTable[2].draw}
           </td>
           <td className="customRowPts">
             {this.state.leagueTable[2].points}
           </td>
         </tr>
         <tr
           className={
             this.state.leagueTable[3].team.name === FootyConstants.MUFC
               ? "mufcPos"
               : "champsLeague"
           }
         >
           <td className="customRow">
             {this.state.leagueTable[3].position}
           </td>
           <td className="customRowLogo">
             <img
               className="tableCrest"
               src={this.state.leagueTable[3].team.crestUrl}
               alt=""
             />
           </td>
           <td className="customRow">
             {this.state.leagueTable[3].team.name}
           </td>
           <td className="customRow">
             {this.state.leagueTable[3].playedGames}
           </td>
           <td className="customRowW">{this.state.leagueTable[3].won}</td>
           <td className="customRowL">
             {this.state.leagueTable[3].lost}
           </td>
           <td className="customRowD">
             {this.state.leagueTable[3].draw}
           </td>
           <td className="customRowPts">
             {this.state.leagueTable[3].points}
           </td>
         </tr>
         <tr
           className={
             this.state.leagueTable[4].team.name === FootyConstants.MUFC
               ? "mufcPos"
               : "europaLeague"
           }
         >
           <td className="customRow">
             {this.state.leagueTable[4].position}
           </td>
           <td className="customRowLogo">
             <img
               className="tableCrest"
               src={this.state.leagueTable[4].team.crestUrl}
               alt=""
             />
           </td>
           <td className="customRow">
             {this.state.leagueTable[4].team.name}
           </td>
           <td className="customRow">
             {this.state.leagueTable[4].playedGames}
           </td>
           <td className="customRowW">{this.state.leagueTable[4].won}</td>
           <td className="customRowL">
             {this.state.leagueTable[4].lost}
           </td>
           <td className="customRowD">
             {this.state.leagueTable[4].draw}
           </td>
           <td className="customRowPts">
             {this.state.leagueTable[4].points}
           </td>
         </tr>
         <tr
           className={
             this.state.leagueTable[5].team.name === FootyConstants.MUFC
               ? "mufcPos"
               : "europaLeague"
           }
         >
           <td className="customRow">
             {this.state.leagueTable[5].position}
           </td>
           <td className="customRowLogo">
             <img
               className="tableCrest"
               src={this.state.leagueTable[5].team.crestUrl}
               alt=""
             />
           </td>
           <td className="customRow">
             {this.state.leagueTable[5].team.name}
           </td>
           <td className="customRow">
             {this.state.leagueTable[5].playedGames}
           </td>
           <td className="customRowW">{this.state.leagueTable[5].won}</td>
           <td className="customRowL">
             {this.state.leagueTable[5].lost}
           </td>
           <td className="customRowD">
             {this.state.leagueTable[5].draw}
           </td>
           <td className="customRowPts">
             {this.state.leagueTable[5].points}
           </td>
         </tr>
         <tr
           className={
             this.state.leagueTable[6].team.name === FootyConstants.MUFC
               ? "mufcPos"
               : "europaLeague"
           }
         >
           <td className="customRow">
             {this.state.leagueTable[6].position}
           </td>
           <td className="customRowLogo">
             <img
               className="tableCrest"
               src={this.state.leagueTable[6].team.crestUrl}
               alt=""
             />
           </td>
           <td className="customRow">
             {this.state.leagueTable[6].team.name}
           </td>
           <td className="customRow">
             {this.state.leagueTable[6].playedGames}
           </td>
           <td className="customRowW">{this.state.leagueTable[6].won}</td>
           <td className="customRowL">
             {this.state.leagueTable[6].lost}
           </td>
           <td className="customRowD">
             {this.state.leagueTable[6].draw}
           </td>
           <td className="customRowPts">
             {this.state.leagueTable[6].points}
           </td>
         </tr>
         <tr
           className={
             this.state.leagueTable[7].team.name === FootyConstants.MUFC
               ? "mufcPos"
               : "customRow"
           }
         >
           <td className="customRow">
             {this.state.leagueTable[7].position}
           </td>
           <td className="customRowLogo">
             <img
               className="tableCrest"
               src={this.state.leagueTable[7].team.crestUrl}
               alt=""
             />
           </td>
           <td className="customRow">
             {this.state.leagueTable[7].team.name}
           </td>
           <td className="customRow">
             {this.state.leagueTable[7].playedGames}
           </td>
           <td className="customRowW">{this.state.leagueTable[7].won}</td>
           <td className="customRowL">
             {this.state.leagueTable[7].lost}
           </td>
           <td className="customRowD">
             {this.state.leagueTable[7].draw}
           </td>
           <td className="customRowPts">
             {this.state.leagueTable[7].points}
           </td>
         </tr>
         <tr
           className={
             this.state.leagueTable[8].team.name === FootyConstants.MUFC
               ? "mufcPos"
               : "customRow"
           }
         >
           <td className="customRow">
             {this.state.leagueTable[8].position}
           </td>
           <td className="customRowLogo">
             <img
               className="tableCrest"
               src={this.state.leagueTable[8].team.crestUrl}
               alt=""
             />
           </td>
           <td className="customRow">
             {this.state.leagueTable[8].team.name}
           </td>
           <td className="customRow">
             {this.state.leagueTable[8].playedGames}
           </td>
           <td className="customRowW">{this.state.leagueTable[8].won}</td>
           <td className="customRowL">
             {this.state.leagueTable[8].lost}
           </td>
           <td className="customRowD">
             {this.state.leagueTable[8].draw}
           </td>
           <td className="customRowPts">
             {this.state.leagueTable[8].points}
           </td>
         </tr>
         <tr
           className={
             this.state.leagueTable[9].team.name === FootyConstants.MUFC
               ? "mufcPos"
               : "customRow"
           }
         >
           <td className="customRow">
             {this.state.leagueTable[9].position}
           </td>
           <td className="customRowLogo">
             <img
               className="tableCrest"
               src={this.state.leagueTable[9].team.crestUrl}
               alt=""
             />
           </td>
           <td className="customRow">
             {this.state.leagueTable[9].team.name}
           </td>
           <td className="customRow">
             {this.state.leagueTable[9].playedGames}
           </td>
           <td className="customRowW">{this.state.leagueTable[9].won}</td>
           <td className="customRowL">
             {this.state.leagueTable[9].lost}
           </td>
           <td className="customRowD">
             {this.state.leagueTable[9].draw}
           </td>
           <td className="customRowPts">
             {this.state.leagueTable[9].points}
           </td>
         </tr>
         <tr
           className={
             this.state.leagueTable[10].team.name === FootyConstants.MUFC
               ? "mufcPos"
               : "customRow"
           }
         >
           <td className="customRow">
             {this.state.leagueTable[10].position}
           </td>
           <td className="customRowLogo">
             <img
               className="tableCrest"
               src={this.state.leagueTable[10].team.crestUrl}
               alt=""
             />
           </td>
           <td className="customRow">
             {this.state.leagueTable[10].team.name}
           </td>
           <td className="customRow">
             {this.state.leagueTable[10].playedGames}
           </td>
           <td className="customRowW">
             {this.state.leagueTable[10].won}
           </td>
           <td className="customRowL">
             {this.state.leagueTable[10].lost}
           </td>
           <td className="customRowD">
             {this.state.leagueTable[10].draw}
           </td>
           <td className="customRowPts">
             {this.state.leagueTable[10].points}
           </td>
         </tr>
         <tr
           className={
             this.state.leagueTable[11].team.name === FootyConstants.MUFC
               ? "mufcPos"
               : "customRow"
           }
         >
           <td className="customRow">
             {this.state.leagueTable[11].position}
           </td>
           <td className="customRowLogo">
             <img
               className="tableCrest"
               src={this.state.leagueTable[11].team.crestUrl}
               alt=""
             />
           </td>
           <td className="customRow">
             {this.state.leagueTable[11].team.name}
           </td>
           <td className="customRow">
             {this.state.leagueTable[11].playedGames}
           </td>
           <td className="customRowW">
             {this.state.leagueTable[11].won}
           </td>
           <td className="customRowL">
             {this.state.leagueTable[11].lost}
           </td>
           <td className="customRowD">
             {this.state.leagueTable[11].draw}
           </td>
           <td className="customRowPts">
             {this.state.leagueTable[11].points}
           </td>
         </tr>
         <tr
           className={
             this.state.leagueTable[12].team.name === FootyConstants.MUFC
               ? "mufcPos"
               : "customRow"
           }
         >
           <td className="customRow">
             {this.state.leagueTable[12].position}
           </td>
           <td className="customRowLogo">
             <img
               className="tableCrest"
               src={this.state.leagueTable[12].team.crestUrl}
               alt=""
             />
           </td>
           <td className="customRow">
             {this.state.leagueTable[12].team.name}
           </td>
           <td className="customRow">
             {this.state.leagueTable[12].playedGames}
           </td>
           <td className="customRowW">
             {this.state.leagueTable[12].won}
           </td>
           <td className="customRowL">
             {this.state.leagueTable[12].lost}
           </td>
           <td className="customRowD">
             {this.state.leagueTable[12].draw}
           </td>
           <td className="customRowPts">
             {this.state.leagueTable[12].points}
           </td>
         </tr>
         <tr
           className={
             this.state.leagueTable[13].team.name === FootyConstants.MUFC
               ? "mufcPos"
               : "customRow"
           }
         >
           <td className="customRow">
             {this.state.leagueTable[13].position}
           </td>
           <td className="customRowLogo">
             <img
               className="tableCrest"
               src={this.state.leagueTable[13].team.crestUrl}
               alt=""
             />
           </td>
           <td className="customRow">
             {this.state.leagueTable[13].team.name}
           </td>
           <td className="customRow">
             {this.state.leagueTable[13].playedGames}
           </td>
           <td className="customRowW">
             {this.state.leagueTable[13].won}
           </td>
           <td className="customRowL">
             {this.state.leagueTable[13].lost}
           </td>
           <td className="customRowD">
             {this.state.leagueTable[13].draw}
           </td>
           <td className="customRowPts">
             {this.state.leagueTable[13].points}
           </td>
         </tr>
         <tr
           className={
             this.state.leagueTable[14].team.name === FootyConstants.MUFC
               ? "mufcPos"
               : "customRow"
           }
         >
           <td className="customRow">
             {this.state.leagueTable[14].position}
           </td>
           <td className="customRowLogo">
             <img
               className="tableCrest"
               src={this.state.leagueTable[14].team.crestUrl}
               alt=""
             />
           </td>
           <td className="customRow">
             {this.state.leagueTable[14].team.name}
           </td>
           <td className="customRow">
             {this.state.leagueTable[14].playedGames}
           </td>
           <td className="customRowW">
             {this.state.leagueTable[14].won}
           </td>
           <td className="customRowL">
             {this.state.leagueTable[14].lost}
           </td>
           <td className="customRowD">
             {this.state.leagueTable[14].draw}
           </td>
           <td className="customRowPts">
             {this.state.leagueTable[14].points}
           </td>
         </tr>
         <tr
           className={
             this.state.leagueTable[15].team.name === FootyConstants.MUFC
               ? "mufcPos"
               : "customRow"
           }
         >
           <td className="customRow">
             {this.state.leagueTable[15].position}
           </td>
           <td className="customRowLogo">
             <img
               className="tableCrest"
               src={this.state.leagueTable[15].team.crestUrl}
               alt=""
             />
           </td>
           <td className="customRow">
             {this.state.leagueTable[15].team.name}
           </td>
           <td className="customRow">
             {this.state.leagueTable[15].playedGames}
           </td>
           <td className="customRowW">
             {this.state.leagueTable[15].won}
           </td>
           <td className="customRowL">
             {this.state.leagueTable[15].lost}
           </td>
           <td className="customRowD">
             {this.state.leagueTable[15].draw}
           </td>
           <td className="customRowPts">
             {this.state.leagueTable[15].points}
           </td>
         </tr>
         <tr
           className={
             this.state.leagueTable[16].team.name === FootyConstants.MUFC
               ? "mufcPos"
               : "customRow"
           }
         >
           <td className="customRow">
             {this.state.leagueTable[16].position}
           </td>
           <td className="customRowLogo">
             <img
               className="tableCrest"
               src={this.state.leagueTable[16].team.crestUrl}
               alt=""
             />
           </td>
           <td className="customRow">
             {this.state.leagueTable[16].team.name}
           </td>
           <td className="customRow">
             {this.state.leagueTable[16].playedGames}
           </td>
           <td className="customRowW">
             {this.state.leagueTable[16].won}
           </td>
           <td className="customRowL">
             {this.state.leagueTable[16].lost}
           </td>
           <td className="customRowD">
             {this.state.leagueTable[16].draw}
           </td>
           <td className="customRowPts">
             {this.state.leagueTable[16].points}
           </td>
         </tr>
         <tr
           className={
             this.state.leagueTable[17].team.name === FootyConstants.MUFC
               ? "mufcPos"
               : "relegationZone"
           }
         >
           <td className="customRow">
             {this.state.leagueTable[17].position}
           </td>
           <td className="customRowLogo">
             <img
               className="tableCrest"
               src={this.state.leagueTable[17].team.crestUrl}
               alt=""
             />
           </td>
           <td className="customRow">
             {this.state.leagueTable[17].team.name}
           </td>
           <td className="customRow">
             {this.state.leagueTable[17].playedGames}
           </td>
           <td className="customRowW">
             {this.state.leagueTable[17].won}
           </td>
           <td className="customRowL">
             {this.state.leagueTable[17].lost}
           </td>
           <td className="customRowD">
             {this.state.leagueTable[17].draw}
           </td>
           <td className="customRowPts">
             {this.state.leagueTable[17].points}
           </td>
         </tr>
         <tr
           className={
             this.state.leagueTable[18].team.name === FootyConstants.MUFC
               ? "mufcPos"
               : "relegationZone"
           }
         >
           <td className="customRow">
             {this.state.leagueTable[18].position}
           </td>
           <td className="customRowLogo">
             <img
               className="tableCrest"
               src={this.state.leagueTable[18].team.crestUrl}
               alt=""
             />
           </td>
           <td className="customRow">
             {this.state.leagueTable[18].team.name}
           </td>
           <td className="customRow">
             {this.state.leagueTable[18].playedGames}
           </td>
           <td className="customRowW">
             {this.state.leagueTable[18].won}
           </td>
           <td className="customRowL">
             {this.state.leagueTable[18].lost}
           </td>
           <td className="customRowD">
             {this.state.leagueTable[18].draw}
           </td>
           <td className="customRowPts">
             {this.state.leagueTable[18].points}
           </td>
         </tr>
         <tr
           className={
             this.state.leagueTable[19].team.name === FootyConstants.MUFC
               ? "mufcPos"
               : "relegationZone"
           }
         >
           <td className="customRow">
             {this.state.leagueTable[19].position}
           </td>
           <td className="customRowLogo">
             <img
               className="tableCrest"
               src={this.state.leagueTable[19].team.crestUrl}
               alt=""
             />
           </td>
           <td className="customRow">
             {this.state.leagueTable[19].team.name}
           </td>
           <td className="customRow">
             {this.state.leagueTable[19].playedGames}
           </td>
           <td className="customRowW">
             {this.state.leagueTable[19].won}
           </td>
           <td className="customRowL">
             {this.state.leagueTable[19].lost}
           </td>
           <td className="customRowD">
             {this.state.leagueTable[19].draw}
           </td>
           <td className="customRowPts">
             {this.state.leagueTable[19].points}
           </td>
         </tr>
       </table>
          
    );
  }
}
