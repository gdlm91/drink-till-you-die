import React, { useState, useEffect } from "react";
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
import { DiceValues } from "./types";

interface Props {
  controlled?: boolean;
  onChange?: (value: DiceValues, rolling: boolean) => void;
  // controlled props
  onClick?: () => void;
  value?: DiceValues;
  isRolling?: boolean;
}

const Dice: React.FC<Props> = ({
  onChange,
  isRolling,
  value,
  controlled,
  onClick,
}) => {
  const [_value, _setValue] = useState<DiceValues>(1);
  const [_isRolling, _setIsRolling] = useState(false);

  const diceIcon = {
    1: <FontAwesomeIcon icon={faDiceOne} />,
    2: <FontAwesomeIcon icon={faDiceTwo} />,
    3: <FontAwesomeIcon icon={faDiceThree} />,
    4: <FontAwesomeIcon icon={faDiceFour} />,
    5: <FontAwesomeIcon icon={faDiceFive} />,
    6: <FontAwesomeIcon icon={faDiceSix} />,
  };

  const generateRandomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const diceRoll = () => {
    let rolls = generateRandomInt(5, 15);

    for (let rollsLeft = rolls; rollsLeft >= 0; rollsLeft--) {
      setTimeout(() => {
        const newValue = generateRandomInt(1, 6) as DiceValues;
        const newIsRolling = rollsLeft > 0;
        _setValue(newValue);
        _setIsRolling(newIsRolling);

        onChange && onChange(newValue, newIsRolling);
      }, 250 * (rolls - rollsLeft));
    }
  };

  const handleDiceThrow = () => {
    if (_isRolling) return;

    if (!controlled) {
      return diceRoll();
    }

    onClick && onClick();
  };

  // keep internal value sync with controlled value
  useEffect(() => {
    if (value) {
      _setValue(value);
    }
  }, [value]);

  // keep internal rolling sync with controlled rolling
  // if rolling, will generate random numbers until external rolling is false
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (isRolling === undefined) {
      return;
    }

    if (isRolling === false) {
      return _setIsRolling(false);
    }

    interval = setInterval(() => {
      _setValue(generateRandomInt(1, 6) as DiceValues);
    }, 250);

    return () => {
      clearInterval(interval);
    };
  }, [isRolling]);

  return (
    <div className="Dice">
      <button className={`dice d-${_value}`} onClick={handleDiceThrow}>
        {diceIcon[_value]}
      </button>
    </div>
  );
};

export default Dice;
