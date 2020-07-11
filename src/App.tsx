import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./App.css";
import Board from "./Board";
import Dice from "./Dice";
import Players from "./Players";
import ActionModal from "./ActionModal";
import { DiceValues, Action, User } from "./types";

const fakeAction: Action = {
  id: 23,
  action: "beben todos",
  explanation: "Beben todos!",
};

const fakeUser: User = {
  name: "Lula",
  emoji: "",
};

interface Props {
  action: Action;
}

interface Props {
  user: User;
}

function App() {
  const [modalShow, setModalShow] = useState(false);

  function handleOnDiceChange(value: DiceValues, rolling: boolean) {
    console.log({ value, rolling });
  }

  return (
    <div className="App">
      <header>
        <div className="container-title-players">
          <h1>Drink till you die 🍻</h1>
          <Players />
        </div>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Launch vertically centered modal
        </Button>

        <ActionModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          action={fakeAction}
          user={fakeUser}
        />
        <Board />
      </header>
      <Dice onChange={handleOnDiceChange} />
    </div>
  );
}

export default App;
