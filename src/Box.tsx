import React from "react";
import { Action } from "./types";
import Token from "./Token";
import "./Box.scss";
import { usePosition } from "./hooks";

interface Props {
  action: Action;
}

const Box: React.FC<Props> = ({ action }) => {
  const { players } = usePosition(action.id);

  return (
    <div className="container-box">
      <h1>{action.id}</h1>
      <p>{action.action}</p>
      <div className="tokens">
        {players &&
          players.map((player) => (
            <Token player={player} key={player.accountId} />
          ))}
      </div>
    </div>
  );
};

export default Box;
