import React, { useState } from "react";
import "emoji-mart/css/emoji-mart.css";
import { Picker, EmojiData } from "emoji-mart";
import Modal, { ModalProps } from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./RegistrationModal.scss";
import { Emoji } from "emoji-mart";
import InputGroup from "react-bootstrap/InputGroup";

interface Props extends ModalProps {
  onSubmit: ({ name, emoji }: { name: string; emoji: string }) => void;
  loading: boolean;
}

const RegistrationModal: React.FC<Props> = ({
  onSubmit,
  loading,
  ...props
}) => {
  const [name, setName] = useState("");
  const [emoji, setEmoji] = useState(":crown:");

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

    onSubmit({ name, emoji });
  };

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Form onSubmit={handleOnSubmit}>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Bienvenido!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="user">
            <Form.Label>Escoge usuario y ficha!</Form.Label>
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
            Guardar
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default RegistrationModal;
