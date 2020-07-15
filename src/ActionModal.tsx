import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Emoji } from "emoji-mart";

import "./ActionModal.css";
import { Action, Player } from "./types";

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

const ActionModal: React.FC = () => {
  const [actionModalShow, setActionModal] = useState(false);

  return (
    <Modal
      show={actionModalShow}
      onHide={() => setActionModal(false)}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title className="modal-action-name">
          <Emoji emoji={fakePlayer.emoji} size={35} /> {fakePlayer.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{fakeAction.explanation}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="colorful-button"
          onClick={() => setActionModal(false)}
        >
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ActionModal;
