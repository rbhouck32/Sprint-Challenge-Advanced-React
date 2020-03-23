import React, { useState } from "react";

const PlayerCard = props => {
  console.log("player.js:", props);
  return (
    <div className="Card-Container">
      <h2>{props.players.name}</h2>
      <p>Country: {props.players.country}</p>
      <p>Searches: {props.players.searches}</p>
      <p>Rank: {`${props.players.id + 1}`}</p>
    </div>
  );
};

export default PlayerCard;
