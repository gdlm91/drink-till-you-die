import React from "react";
import Modal, { ModalProps } from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Action } from "./types";

interface Props extends ModalProps {
  action: Action;
}

const ActionModal: React.FC<Props> = (props) => {
  const { action, onHide, user } = props;

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {user.name}
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
