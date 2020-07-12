import React from "react";
import { Action, Player } from "./types";
import Token from "./Token";
import "./Box.css";

const fakePlayers: Player[] = [
  { name: "cinthia", emoji: "smiley", active: false, accountId: "fake2" },
  {
    name: "Gerardo",
    emoji: "heart_eyes",
    active: false,
    accountId: "fake3",
  },
  { name: "Britney", emoji: ":alien:", active: true, accountId: "fake4" },
];

interface Props {
  action: Action;
}

const Box: React.FC<Props> = ({ action }) => {
  return (
    <>
      <h1>{action.id}</h1>
      <p>{action.action}</p>
      <div className="tokens">
        {fakePlayers.map((player) => (
          <Token player={player} key={player.accountId} />
        ))}
      </div>
    </>
  );
};

export default Box;
