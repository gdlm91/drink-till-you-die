import React from "react";

import Dice from "./Dice";
import { useDice, useCurrentPlayer, useAccount } from "./hooks";

const ControlledDice: React.FC = () => {
  const { dice, roll } = useDice();
  const { currentPlayer } = useCurrentPlayer();
  const { account } = useAccount();

  const isDisabled = account?.accountId !== currentPlayer?.accountId;

  const handleOnClick = () => {
    if (isDisabled) {
      return;
    }

    roll();
  };

  return dice && dice.isRolling !== undefined ? (
    <Dice
      controlled={true}
      isRolling={dice?.isRolling}
      value={dice!.value}
      onClick={handleOnClick}
      disabled={isDisabled}
    />
  ) : null;
};

export default ControlledDice;
