import React, { useState } from "react";
import Button from "react-bootstrap/Button";

import "./App.css";
import { DiceValues, Action, Player } from "./types";
import { usePlayer } from "./hooks";
import Board from "./Board";
import Dice from "./Dice";
import Players from "./Players";
import ActionModal from "./ActionModal";
import RegistrationModal from "./RegistrationModal";

const fakeAction: Action = {
  id: 23,
  action: "beben todos",
  explanation: "Beben todos!",
};

const fakePlayer: Player = {
  accountId: "fake1",
  name: "Lula",
  emoji: "",
  active: false,
};

function App() {
  const { player, register } = usePlayer();
  const [actionModalShow, setActionModal] = useState(false);

  function handleOnDiceChange(value: DiceValues, rolling: boolean) {
    console.log({ value, rolling });
  }

  const handleOfRegister = (name: string, emoji: string) => {
    register({ name, emoji });
  };

  return (
    <div className="App">
      <header>
        <div className="container-title-players">
          <h1>Drink till you die 🍻</h1>
          <Players />
        </div>
      </header>
      <Board />
      <Dice onChange={handleOnDiceChange} />
      <Button variant="primary" onClick={() => setActionModal(true)}>
        Launch vertically centered modal
      </Button>
      <ActionModal
        show={actionModalShow}
        onHide={() => setActionModal(false)}
        action={fakeAction}
        player={fakePlayer}
      />
      <RegistrationModal
        loading={!!player?.loading}
        show={player?.requestRegistration}
        onSubmit={handleOfRegister}
      />
    </div>
  );
}

export default App;
