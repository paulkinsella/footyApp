import React from "react";
import FootyConstants from "./constants/FootyConstants";
import "./App.scss";
import TeamLogos from "./TeamLogos";

export class TopScorer extends React.Component {
  state = {
    topScorer: { scorer: [] },
    loading: true,
    teamFlag1: null,
    teamFlag2: null,
    teamFlag3: null,
    teamFlag4: null,
    teamFlag5: null,
  };

  async componentDidMount() {
    const API_KEY = FootyConstants.API_KEY;
    const topScorerUrl = FootyConstants.TOP_SCORER_URL;

    //GET TOP SCORER
    await fetch(topScorerUrl, {
      method: "GET",
      headers: {
        "X-Auth-Token": API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("scorer", data);
        this.setState({
          topScorer: {
            scorer: data.scorers.slice(
              data.scorers.length - 5,
              data.scorers.length
            ),
          },
        });

        if (TeamLogos[data.scorers[0].team.name]) {
          this.setState({
            teamFlag1: TeamLogos[data.scorers[0].team.name],
          });
        } else {
          this.setState({ teamFlag1: TeamLogos["Premier League"] });
        }

        if (TeamLogos[data.scorers[1].team.name]) {
          this.setState({
            teamFlag2: TeamLogos[data.scorers[1].team.name],
          });
        } else {
          this.setState({ teamFlag2: TeamLogos["Premier League"] });
        }

        if (TeamLogos[data.scorers[2].team.name]) {
          this.setState({
            teamFlag3: TeamLogos[data.scorers[2].team.name],
          });
        } else {
          this.setState({ teamFlag3: TeamLogos["Premier League"] });
        }

        if (TeamLogos[data.scorers[3].team.name]) {
          this.setState({
            teamFlag4: TeamLogos[data.scorers[3].team.name],
          });
        } else {
          this.setState({ teamFlag4: TeamLogos["Premier League"] });
        }

        if (TeamLogos[data.scorers[4].team.name]) {
          this.setState({
            teamFlag5: TeamLogos[data.scorers[4].team.name],
          });
        } else {
          this.setState({ teamFlag5: TeamLogos["Premier League"] });
        }
        // console.log("New Top Scorer",this.state.topScorer.scorer)
        // this.setState({ teamFlag1: TeamLogos["Premier League"] });
      });
    console.log("Flag 1:", this.state.teamFlag1);
    console.log("Flag 2:", this.state.teamFlag2);
    console.log("Flag 3:", this.state.teamFlag3);
    console.log("Flag 4:", this.state.teamFlag4);
    console.log("Flag 5:", this.state.teamFlag5);
  }

  render() {
    const renderCard = () => {
      return this.state.topScorer.scorer.map((card) => (
        <div class="card">
          <header class="article-header">
            <div>
              <div class="category-title">{card.team.name}</div>
            </div>
            <h2 class="article-title">{card.player.name}</h2>
          </header>
          <div class="author">
            <div class="profile">
              <img src={this.state.teamFlag1} className="App-logo2" alt="" />
            </div>
            <div class="info">
              <div class="caption">{card.numberOfGoals}</div>
            </div>
          </div>
          <div class="tags">
            <div>Premier League</div>
            <div>Top Scorers</div>
          </div>
        </div>
      ));
    };
    return (
      <>
        <div className="newCardContainer">
          <div class="card-container">{renderCard()}</div>
        </div>
      </>
    );
  }
}
