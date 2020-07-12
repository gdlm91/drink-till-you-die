import React, { useState } from "react";
import "emoji-mart/css/emoji-mart.css";
import { Picker, EmojiData } from "emoji-mart";
import Modal, { ModalProps } from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

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
          <Modal.Title id="contained-modal-title-vcenter">Welcome!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            disabled={loading}
            type="text"
            placeholder="First name"
            value={name}
            onChange={(e) => handleNameChange(e as any)}
          />
          <Picker set="apple" emoji={emoji} onSelect={handleEmojiPick} />
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" disabled={loading}>
            Guardar
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default RegistrationModal;
