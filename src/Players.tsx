import React from "react";
import "./Players.css";
import Token from "./Token";
import { usePlayers } from "./hooks";

function Players() {
  const { players } = usePlayers();

  return (
    <div className="Players-container">
      {players &&
        Object.values(players).map((player) => (
          <div className="emoji-player" key={player.accountId}>
            <Token player={player} />
          </div>
        ))}
    </div>
  );
}

export default Players;
