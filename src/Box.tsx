import React from "react";
import { Action, User } from "./types";
import Token from "./Token";

const fakeUser: User = { name: "cinthia", emoji: "smiley" };
const fakeUser2: User = { name: "Gerardo", emoji: "heart_eyes" };
const fakeUser3: User = { name: "Britney", emoji: ":alien:" };
const fakeUser4: User = { name: "Lisa", emoji: ":crown:" };
const fakeUser5: User = { name: "Lisa", emoji: ":scream:" };

interface Props {
  action: Action;
}

const Box: React.FC<Props> = ({ action }) => {
  return (
    <>
      <h1>{action.id}</h1>
      <p>{action.action}</p>
      <Token user={fakeUser} />
      <Token user={fakeUser2} />
      <Token user={fakeUser3} />
    </>
  );
};

export default Box;
