import React, { useState } from "react";
import { Picker, EmojiData, Emoji } from "emoji-mart";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import "emoji-mart/css/emoji-mart.css";

import "./RegistrationModal.scss";
import { useAccount } from "./hooks";

const RegistrationModal: React.FC = () => {
  const { account, register } = useAccount();
  const [name, setName] = useState("");
  const [emoji, setEmoji] = useState(":crown:");
  const loading = !account || account.loading;

  const handleNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
    setName(value);
  };

  const handleEmojiPick = (emoji: EmojiData) => {
    setEmoji(emoji.id || "");
  };

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (loading) {
      return;
    }

    register({ name, emoji });
  };

  return (
    <Modal
      show={account?.requestRegistration}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Form onSubmit={handleOnSubmit}>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">Welcome!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="user">
            <Form.Label>Choose a user and avatar</Form.Label>
            <InputGroup className="large">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">
                  <Emoji emoji={emoji} size={30} />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                required
                size="lg"
                disabled={loading}
                type="text"
                placeholder="Ingrese usuario aquí"
                value={name}
                onChange={(e) => handleNameChange(e as any)}
              />
            </InputGroup>
            <InputGroup className="small">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">
                  <Emoji emoji={emoji} size={15} />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                required
                disabled={loading}
                type="text"
                placeholder="Ingrese usuario aquí"
                value={name}
                onChange={(e) => handleNameChange(e as any)}
              />
            </InputGroup>
          </div>
          <div className="picker">
            <Picker
              set="apple"
              emoji={emoji}
              onSelect={handleEmojiPick}
              style={{ width: "100%" }}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="colorful-button" type="submit" disabled={loading}>
            Save
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default RegistrationModal;
