import React from "react";

import "./BoxEnd.scss";
import { usePosition } from "./hooks";
import { actions } from "./actions";
import Token from "./Token";

const BoxEnd: React.FC = () => {
  const { players } = usePosition(actions.length + 1);

  return (
    <div className="BoxEnd">
      {" "}
      <h1>
        Won!!!!{" "}
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

export default BoxEnd;
