import React from "react";
import { Player } from "./types";
import Token from "./Token";
import "./PlayersStart.css";

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
