import React from "react";

import "./BoxStart.scss";
import { usePosition } from "./hooks";
import Token from "./Token";

const BoxStart: React.FC = () => {
  const { players } = usePosition(0);

  return (
    <div className="BoxStart">
      {" "}
      <h1>
        Drink till you die{" "}
        <span role="img" aria-label="beer icon">
          🍻
        </span>
      </h1>
      <div className="players">
        {players &&
          players.map((player) => (
            <div className="emoji-player" key={player.accountId}>
              <Token player={player} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default BoxStart;
