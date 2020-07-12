import React from "react";
import Modal, { ModalProps } from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

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
        <Modal.Title id="contained-modal-title-vcenter">
          {player.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{action.explanation}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ActionModal;
