import React from "react";
import { Action, User } from "./types";
import Token from "./Token";
import "./Box.css";

const fakeUser: User = { name: "cinthia", emoji: "smiley", active: false };
const fakeUser2: User = { name: "Gerardo", emoji: "heart_eyes", active: false };
const fakeUser3: User = { name: "Britney", emoji: ":alien:", active: true };

interface Props {
  action: Action;
}

const Box: React.FC<Props> = ({ action }) => {
  return (
    <>
      <h1>{action.id}</h1>
      <p>{action.action}</p>
      <div className="tokens">
        <Token user={fakeUser} />
        <Token user={fakeUser2} />
        <Token user={fakeUser3} />
      </div>
    </>
  );
};

export default Box;
