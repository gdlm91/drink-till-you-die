import React from "react";
import { Player } from "./types";
import "emoji-mart/css/emoji-mart.css";
import { Emoji } from "emoji-mart";
import "./Token.css";

interface Props {
  player: Player;
}

const Token: React.FC<Props> = ({ player }) => {
  return (
    <>
      <div className={player.active ? "active emoji" : "emoji"}>
        <Emoji emoji={player.emoji} size={player.active ? 55 : 40} />
      </div>
    </>
  );
};

export default Token;
