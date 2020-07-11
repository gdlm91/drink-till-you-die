import React from "react";
import { User } from "./types";
import "emoji-mart/css/emoji-mart.css";
import { Emoji } from "emoji-mart";
import "./Token.css";

interface Props {
  user: User;
}

const Token: React.FC<Props> = ({ user }) => {
  return (
    <>
      <div title={user.name} className="emoji">
        <Emoji emoji={user.emoji} size={40} />
      </div>
    </>
  );
};

export default Token;
