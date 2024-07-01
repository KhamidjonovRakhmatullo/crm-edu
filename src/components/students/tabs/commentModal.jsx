import React from "react";
import {
  ExitButton,
  ModalBody,
  ModalContainer,
  ModalTitel,
} from "../../styles/profileStd/profileModalStyle";
import { AddButtonBlue, SendButton, TextAreaStyled } from "../../styles/materialsStyle";
import ClearIcon from "@mui/icons-material/Clear";
import {  Modal } from "@mui/material";

const CommentModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div style={{ width: "25%" }}>
     <AddButtonBlue onClick={handleOpen}>+ Leave a new comment</AddButtonBlue>

      <Modal open={open} onClose={handleClose}>
        <ModalContainer>
          <ExitButton>
            <ClearIcon onClick={handleClose} style={{ marginRight: "15px" }} />
          </ExitButton>
          <ModalBody>
            <ModalTitel>Create comment</ModalTitel>
            <TextAreaStyled placeholder="Enter comment" />
            <SendButton>Create comment</SendButton>
          </ModalBody>
        </ModalContainer>
      </Modal>
    </div>
  );
};

export default CommentModal;
