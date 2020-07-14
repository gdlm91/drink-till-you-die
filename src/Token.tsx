import React from "react";
import { Player } from "./types";
import "emoji-mart/css/emoji-mart.css";
import { Emoji } from "emoji-mart";

import "./Token.css";
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
      className={isActivePlayer ? "active emoji" : "emoji"}
      title={player.name}
    >
      <Emoji emoji={player.emoji} size={isActivePlayer ? 55 : 40} />
    </div>
  );
};

export default Token;
