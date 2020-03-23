import React, { Component } from "react";
import { render } from "react-dom";
import PlayerCard from "./PlayerCard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    fetch(`http://localhost:5000/api/players`)
      .then(res => res.json())
      .then(player => {
        console.log("componentDidMount JSON res", player);
        this.setState({ ...this.state, players: player });
      })
      .catch(err => {
        console.error(err);
        this.setState({ players: [] });
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Women's World Cup Ranking by Search Interest</h1>
        {this.state.players.map(player => (
          <PlayerCard players={player} key={player.id} />
        ))}
      </div>
    );
  }
}

export default App;
