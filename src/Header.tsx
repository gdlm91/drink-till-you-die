import React from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

import "./Header.scss";
import { useAccount } from "./hooks";
import Players from "./Players";

const Header: React.FC = () => {
  const { account, unregister } = useAccount();

  return (
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
  );
};

export default Header;
