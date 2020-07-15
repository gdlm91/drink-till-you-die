import React from "react";
import "./Players.css";
import Token from "./Token";
import { usePlayers } from "./hooks";
import { Player } from "./types";

function Players() {
  const { players } = usePlayers();

  return (
    <div className="Players-container">
      {players &&
        Object.values<Player>(players).map((player) => (
          <div className="emoji-player" key={player.accountId}>
            <Token player={player} />
          </div>
        ))}
    </div>
  );
}

export default Players;
