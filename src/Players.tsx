import React from "react";

import { User } from "./types";
import "./Players.css";
import Token from "./Token";

const fakeUsers: User[] = [
  { name: "cinthia", emoji: "smiley", active: false },
  { name: "Gerardo", emoji: "heart_eyes", active: false },
  { name: "Britney", emoji: ":alien:", active: true },
  { name: "Lady Gaga", emoji: ":alien:", active: false },
  { name: "Arianna Grande", emoji: ":alien:", active: false },
  { name: "Ricky", emoji: ":alien:", active: false },
];

function Players() {
  return (
    <div className="Players-container">
      {fakeUsers.map((user) => (
        <div className="emoji-player">
          <Token user={user} />
        </div>
      ))}
    </div>
  );
}

export default Players;
