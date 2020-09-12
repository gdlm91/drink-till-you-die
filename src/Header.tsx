import React from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faUndo } from "@fortawesome/free-solid-svg-icons";

import "./Header.scss";
import { useAccount, useGame } from "./hooks";
import Players from "./Players";

const Header: React.FC = () => {
  const { account, unregister } = useAccount();
  const { resetGame } = useGame();

  return (
    <header>
      <div className="container-button-players">
        <div className="players-options">
          <Players />
        </div>
        <div className="buttons">
          {account?.accountId && (
            <>
              <Button
                variant="outline-warning"
                size="lg"
                onClick={resetGame}
                disabled={account.loading}
                title="Reset the game"
              >
                <FontAwesomeIcon icon={faUndo} />
              </Button>
              <Button
                variant="outline-danger"
                size="lg"
                onClick={unregister}
                disabled={account.loading}
              >
                <FontAwesomeIcon icon={faSignOutAlt} />
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
