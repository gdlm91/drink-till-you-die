import React from "react";
import Modal, { ModalProps } from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Emoji } from "emoji-mart";
import "./ActionModal.css";

import { Action, Player } from "./types";

interface Props extends ModalProps {
  player: Player;
  action: Action;
}

const ActionModal: React.FC<Props> = (props) => {
  const { action, player, onHide } = props;

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title className="modal-action-name">
          <Emoji emoji={player.emoji} size={35} /> {player.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{action.explanation}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button className="colorful-button" onClick={onHide}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ActionModal;
