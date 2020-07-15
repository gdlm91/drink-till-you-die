import React from "react";
import { Player } from "./types";
import "emoji-mart/css/emoji-mart.css";
import { Emoji } from "emoji-mart";

import "./Token.scss";
import { useCurrentPlayer } from "./hooks";

interface Props {
  player: Player;
}

const Token: React.FC<Props> = ({ player }) => {
  const { currentPlayer } = useCurrentPlayer();

  const isActivePlayer =
    currentPlayer && currentPlayer.accountId === player.accountId;

  return (
    <div
      className={isActivePlayer ? "active Token" : "Token"}
      title={player.name}
    >
      <span className="lg-emoji">
        <Emoji emoji={player.emoji} size={isActivePlayer ? 55 : 40} />
      </span>
      <span className="sm-emoji">
        <Emoji emoji={player.emoji} size={isActivePlayer ? 35 : 25} />
      </span>
    </div>
  );
};

export default Token;
