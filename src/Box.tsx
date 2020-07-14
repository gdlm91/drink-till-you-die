import React from "react";
import { Action, Player } from "./types";
import Token from "./Token";
import "./Box.scss";

const fakePlayers: Player[] = [
  { name: "cinthia", emoji: "smiley", connected: true, accountId: "fake2" },
  {
    name: "Gerardo",
    emoji: "heart_eyes",
    connected: true,
    accountId: "fake3",
  },
  { name: "Britney", emoji: ":alien:", connected: true, accountId: "fake4" },
];

interface Props {
  action: Action;
}

const Box: React.FC<Props> = ({ action }) => {
  return (
    <div className="container-box">
      <h1>{action.id}</h1>
      <p>{action.action}</p>
      <div className="tokens">
        {fakePlayers.map((player) => (
          <Token player={player} key={player.accountId} />
        ))}
      </div>
    </div>
  );
};

export default Box;
