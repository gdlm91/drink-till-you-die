import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

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

const App: React.FC = () => {
  const { player, register, unregister } = usePlayer();
  const [actionModalShow, setActionModal] = useState(false);

  const handleOnDiceChange = (value: DiceValues, rolling: boolean) => {
    console.log({ value, rolling });
  };

  return (
    <main className="App">
      <header>
        <div className="container-title-players">
          <h1>
            Drink till you die{" "}
            <span role="img" aria-label="beer icon">
              🍻
            </span>
          </h1>

          <div className="players-options">
            <Players />
            {player?.accountId && (
              <Button
                variant="outline-danger"
                size="lg"
                onClick={unregister}
                disabled={player.loading}
              >
                <FontAwesomeIcon icon={faSignOutAlt} />
              </Button>
            )}
          </div>
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
        onSubmit={register}
      />
    </main>
  );
};

export default App;
