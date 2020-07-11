import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./App.css";
import Board from "./Board";
import Dice from "./Dice";
import Players from "./Players";
import ActionModal from "./ActionModal";
import { DiceValues, Action, User } from "./types";
import RegistrationModal from "./RegistrationModal";

const fakeAction: Action = {
  id: 23,
  action: "beben todos",
  explanation: "Beben todos!",
};

const fakeUser: User = {
  name: "Lula",
  emoji: "",
  active: false,
};

interface Props {
  action: Action;
}

interface Props {
  user: User;
}

function App() {
  const [actionModalShow, setActionModal] = useState(false);
  const [registrationModalShow, setRegistrationModal] = useState(false);

  function handleOnDiceChange(value: DiceValues, rolling: boolean) {
    console.log({ value, rolling });
  }

  const handleOfRegister = (name: string, emoji: string) => {
    setRegistrationModal(false);
    console.log({ name, emoji });
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
        user={fakeUser}
      />
      <Button variant="primary" onClick={() => setRegistrationModal(true)}>
        Registration
      </Button>
      <RegistrationModal
        show={registrationModalShow}
        onSubmit={handleOfRegister}
      />
    </div>
  );
}

export default App;
