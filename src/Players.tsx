import React from "react";

import { User } from "./types";
import "./Players.css";
import Token from "./Token";

const fakeUsers: User[] = [
  { name: "cinthia", emoji: "smiley" },
  { name: "Gerardo", emoji: "heart_eyes" },
  { name: "Britney", emoji: ":alien:" },
  { name: "Lady Gaga", emoji: ":alien:" },
  { name: "Arianna Grande", emoji: ":alien:" },
  { name: "Ricky", emoji: ":alien:" },
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
