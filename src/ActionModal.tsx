import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Emoji } from "emoji-mart";

import "./ActionModal.css";
import { useCurrentPlayer } from "./hooks";
import { actions } from "./actions";

const ActionModal: React.FC = () => {
  const { currentPlayer, nextPlayer } = useCurrentPlayer();
  const currentAction =
    currentPlayer && currentPlayer?.position > -1
      ? actions[currentPlayer.position - 1]
      : undefined;

  return currentAction && currentPlayer ? (
    <Modal
      show={currentPlayer?.requestAction}
      aria-labelledby="Action required"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title className="modal-action-name">
          <Emoji emoji={currentPlayer.emoji} size={35} /> {currentPlayer.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{currentAction.explanation}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button className="colorful-button" onClick={nextPlayer}>
          Listo! Siguiente jugador.
        </Button>
      </Modal.Footer>
    </Modal>
  ) : null;
};

export default ActionModal;
