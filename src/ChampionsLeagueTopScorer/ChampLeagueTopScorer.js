import React from "react";
import FootyConstants from "../constants/FootyConstants";
import './ChampionsLeagueTopScorer.scss';
import TeamLogos from "../TeamLogos";

export class ChampLeagueTopScorer extends React.Component {
  state = {
    loading: true,
    teamFlag1: null,
    teamFlag2: null,
    teamFlag3: null,
    teamFlag4: null,
    teamFlag5: null,
    compTopScorer: {
      numberOfGoals: "",
      player: {},
      team: {},
    },
    compSecondTopScorer: {
      numberOfGoals: "",
      player: {},
      team: {},
    },
    compThirdTopScorer: {
      numberOfGoals: "",
      player: {},
      team: {},
    },
    compFourthTopScorer: {
      numberOfGoals: "",
      player: {},
      team: {},
    },
    compFifthTopScorer: {
      numberOfGoals: "",
      player: {},
      team: {},
    },
  };

  async componentDidMount() {
    const API_KEY = FootyConstants.API_KEY;
    const champTopScorer = FootyConstants.CHAMP_LEAGUE_TOP_SCORER;

    //GET TOP SCORER
    await fetch(champTopScorer, {
      method: "GET",
      headers: {
        "X-Auth-Token": API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
          console.log("data2", data)
        this.setState({ compTopScorer: data.scorers[0], loading: false });
        this.setState({ compSecondTopScorer: data.scorers[1] });
        this.setState({ compThirdTopScorer: data.scorers[2] });
        this.setState({ compFourthTopScorer: data.scorers[3] });
        this.setState({ compFifthTopScorer: data.scorers[4] });

        if (TeamLogos[data.scorers[0].team.name]) {
          this.setState({
            teamFlag1: TeamLogos[data.scorers[0].team.name],
          });
        } else {
          this.setState({ teamFlag1: TeamLogos.champLeague })
        }

        if (TeamLogos[data.scorers[1].team.name]) {
          this.setState({
            teamFlag2: TeamLogos[data.scorers[1].team.name],
          });
        } else {
          this.setState({ teamFlag2: TeamLogos.champLeague });
        }

        if (TeamLogos[data.scorers[2].team.name]) {
          this.setState({
            teamFlag3: TeamLogos[data.scorers[2].team.name],
          });
        } else {
          this.setState({ teamFlag3: TeamLogos.champLeague });
        }

        if (TeamLogos[data.scorers[3].team.name]) {
          this.setState({
            teamFlag4: TeamLogos[data.scorers[3].team.name],
          });
        } else {
          this.setState({ teamFlag4: TeamLogos.champLeague });
        }

        if (TeamLogos[data.scorers[4].team.name]) {
          this.setState({
            teamFlag5: TeamLogos[data.scorers[4].team.name],
          });
        } else {
          this.setState({ teamFlag5: TeamLogos.champLeague });
        }
      });
  }

  render() {
    return (
      <>
      <div className="newchampCardContainer">
        <div class="champCard-container">
            <div class="champCard">
              <header class="article-header">
                <div class="title-container">
                  <div class="category-title">
                    {this.state.compFifthTopScorer.team.name}
                  </div>
                </div>
                <h2 class="article-title">
                  {this.state.compFifthTopScorer.player.name}
                </h2>
              </header>
              <div class="author">
                <div class="profile">
                  <img
                    src={this.state.teamFlag5}
                    className="App-logo2"
                    alt=""
                  />
                </div>
                <div class="info">
                  <div class="caption">
                    {this.state.compFifthTopScorer.numberOfGoals}
                  </div>
                </div>
              </div>
              <div class="tags">
                <div>Champions League</div>
                <div>Top Scorers</div>
              </div>
            </div>

            <div class="champCard">
              <header class="article-header">
                <div>
                  <div class="category-title">
                    {this.state.compFourthTopScorer.team.name}
                  </div>
                </div>
                <h2 class="article-title">
                  {this.state.compFourthTopScorer.player.name}
                </h2>
              </header>
              <div class="author">
                <div class="profile">
                  <img
                    src={this.state.teamFlag4}
                    className="App-logo2"
                    alt=""
                  />
                </div>
                <div class="info">
                  <div class="caption">
                    {this.state.compFourthTopScorer.numberOfGoals}
                  </div>
                </div>
              </div>
              <div class="tags">
                <div>Champions League</div>
                <div>Top Scorers</div>
              </div>
            </div>

            <div class="champCard">
              <header class="article-header">
                <div>
                  <div class="category-title">
                    {this.state.compThirdTopScorer.team.name}
                  </div>
                </div>
                <h2 class="article-title">
                  {this.state.compThirdTopScorer.player.name}
                </h2>
              </header>
              <div class="author">
                <div class="profile">
                  <img
                    src={this.state.teamFlag3}
                    className="App-logo2"
                    alt=""
                  />
                </div>
                <div class="info">
                  <div class="caption">
                    {this.state.compThirdTopScorer.numberOfGoals}
                  </div>
                </div>
              </div>
              <div class="tags">
                <div>Champions League</div>
                <div>Top Scorers</div>
              </div>
            </div>

            <div class="champCard">
              <header class="article-header">
                <div>
                  <div class="category-title">
                    {this.state.compSecondTopScorer.team.name}
                  </div>
                </div>
                <h2 class="article-title">
                  {this.state.compSecondTopScorer.player.name}
                </h2>
              </header>
              <div class="author">
                <div class="profile">
                  <img
                    src={this.state.teamFlag2}
                    className="App-logo2"
                    alt=""
                  />
                </div>
                <div class="info">
                  <div class="caption">
                    {this.state.compSecondTopScorer.numberOfGoals}
                  </div>
                </div>
              </div>
              <div class="tags">
                <div>Champions League</div>
                <div>Top Scorers</div>
              </div>
            </div>

            <div class="champCard">
              <header class="article-header">
                <div>
                  <div class="category-title">
                    {this.state.compTopScorer.team.name}
                  </div>
                </div>
                <h2 class="article-title">
                  {this.state.compTopScorer.player.name}
                </h2>
              </header>
              <div class="author">
                <div class="profile">
                  <img
                    src={this.state.teamFlag1}
                    className="App-logo2"
                    alt=""
                  />
                </div>
                <div class="info">
                  <div class="caption">
                    {this.state.compTopScorer.numberOfGoals}
                  </div>
                </div>
              </div>
              <div class="tags">
                <div>Champions League</div>
                <div>Top Scorers</div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
