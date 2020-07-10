import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix,
} from "@fortawesome/free-solid-svg-icons";
import "./Dice.css";

export type DiceValues = 1 | 2 | 3 | 4 | 5 | 6;

interface Props {
  onChange: (value: DiceValues, rolling: boolean) => void;
}

const Dice: React.FC<Props> = ({ onChange }) => {
  const [value, setValue] = useState<DiceValues>(1);
  const [isRolling, setIsRolling] = useState(false);

  const diceIcon = {
    1: <FontAwesomeIcon icon={faDiceOne} />,
    2: <FontAwesomeIcon icon={faDiceTwo} />,
    3: <FontAwesomeIcon icon={faDiceThree} />,
    4: <FontAwesomeIcon icon={faDiceFour} />,
    5: <FontAwesomeIcon icon={faDiceFive} />,
    6: <FontAwesomeIcon icon={faDiceSix} />,
  };

  function diceRoll(rollsLeft: number) {
    const newValue = generateRandomInt(1, 6) as DiceValues;
    const newIsRolling = rollsLeft > 0;
    setValue(newValue);
    setIsRolling(newIsRolling);

    onChange(newValue, newIsRolling);
  }

  function generateRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function handleDiceThrow(e: React.MouseEvent) {
    if (isRolling) return;

    let rolls = generateRandomInt(5, 15);

    for (let rollsLeft = rolls; rollsLeft >= 0; rollsLeft--) {
      setTimeout(() => {
        diceRoll(rollsLeft);
      }, 250 * (rolls - rollsLeft));
    }
  }

  return (
    <div className="Dice">
      <p>Hola soy dadito</p>
      <button className={`dice d-${value}`} onClick={handleDiceThrow}>
        {diceIcon[value]}
      </button>
    </div>
  );
};

export default Dice;
