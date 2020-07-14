import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

import "./App.scss";
import { Action, Player } from "./types";
import { useAccount } from "./hooks";
import Board from "./Board";
import ControlledDice from "./ControlledDice";
import Players from "./Players";
import ActionModal from "./ActionModal";
import RegistrationModal from "./RegistrationModal";
import BoxStart from "./BoxStart";
import BoxEnd from "./BoxEnd";

const fakeAction: Action = {
  id: 23,
  action: "beben todos",
  explanation: "Beben todos!",
};

const fakePlayer: Player = {
  accountId: "fake1",
  name: "Lula",
  emoji: ":crown:",
  connected: true,
};

const App: React.FC = () => {
  const { account, register, unregister } = useAccount();
  const [actionModalShow, setActionModal] = useState(false);

  return (
    <main className="App">
      <header>
        <div className="container-button-players">
          <div className="players-options">
            <Players />
          </div>
          <div className="button-sign-out">
            {account?.accountId && (
              <Button
                variant="outline-danger"
                size="lg"
                onClick={unregister}
                disabled={account.loading}
              >
                <FontAwesomeIcon icon={faSignOutAlt} />
              </Button>
            )}
          </div>
        </div>
      </header>

      <BoxStart />
      <Board />
      <BoxEnd />

      <ControlledDice />

      <ActionModal
        show={actionModalShow}
        onHide={() => setActionModal(false)}
        action={fakeAction}
        player={fakePlayer}
        emoji={fakePlayer}
      />

      <RegistrationModal
        loading={!!account?.loading}
        show={account?.requestRegistration}
        onSubmit={register}
      />
    </main>
  );
};

export default App;
