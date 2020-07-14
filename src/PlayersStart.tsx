import React from "react";
import { Player } from "./types";
import Token from "./Token";
import "./PlayersStart.css";

const fakePlayers: Player[] = [
  { name: "cinthia", emoji: "smiley", active: false, accountId: "fake5" },
  { name: "Gerardo", emoji: "heart_eyes", active: false, accountId: "fake6" },
  { name: "Britney", emoji: ":alien:", active: true, accountId: "fake7" },
  { name: "Lady Gaga", emoji: ":alien:", active: false, accountId: "fake8" },
  {
    name: "Arianna Grande",
    emoji: ":alien:",
    active: false,
    accountId: "fake9",
  },
  { name: "Ricky", emoji: ":alien:", active: false, accountId: "fake10" },
];

function Players() {
  return (
    <div className="PlayersStar-container">
      {fakePlayers.map((player) => (
        <div className="emoji-player-Start" key={player.accountId}>
          <Token player={player} />
        </div>
      ))}
    </div>
  );
}

export default Players;