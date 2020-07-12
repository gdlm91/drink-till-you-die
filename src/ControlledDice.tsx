import React from "react";

import Dice from "./Dice";
import { useDice } from "./hooks";

const ControlledDice: React.FC = () => {
  const { dice, roll } = useDice();

  return dice && dice.isRolling !== undefined ? (
    <Dice
      controlled={true}
      isRolling={dice?.isRolling}
      value={dice!.value}
      onClick={roll}
    />
  ) : null;
};

export default ControlledDice;
