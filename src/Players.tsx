import React from "react";

import { Player } from "./types";
import "./Players.css";
import Token from "./Token";

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
    <div className="Players-container">
      {fakePlayers.map((player) => (
        <div className="emoji-player">
          <Token player={player} />
        </div>
      ))}
    </div>
  );
}

export default Players;
