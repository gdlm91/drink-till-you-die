import React from "react";
import { Player } from "./types";
import "./Players.css";
import Token from "./Token";

const fakePlayers: Player[] = [
  { name: "cinthia", emoji: "smiley", connected: true, accountId: "fake5" },
  { name: "Gerardo", emoji: "heart_eyes", connected: true, accountId: "fake6" },
  { name: "Britney", emoji: ":alien:", connected: true, accountId: "fake7" },
  { name: "Lady Gaga", emoji: ":alien:", connected: true, accountId: "fake8" },
  {
    name: "Arianna Grande",
    emoji: ":alien:",
    connected: true,
    accountId: "fake9",
  },
  { name: "Ricky", emoji: ":alien:", connected: true, accountId: "fake10" },
];

function Players() {
  return (
    <div className="Players-container">
      {fakePlayers.map((player) => (
        <div className="emoji-player" key={player.accountId}>
          <Token player={player} />
        </div>
      ))}
    </div>
  );
}

export default Players;
