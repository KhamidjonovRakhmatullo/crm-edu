import React from "react";
import {
  ExitButton,
  ModalBody,
  ModalContainer,
  ModalTitel,
} from "../styles/profileStd/profileModalStyle";
import { AddButtonBlue, InputStyled, InputTitle, InputWrapper, SendButton, TextAreaStyled } from "../styles/materialsStyle";
import ClearIcon from "@mui/icons-material/Clear";
import {  Modal } from "@mui/material";

const AddBlogModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div style={{ width: "25%" }}>
     <AddButtonBlue onClick={handleOpen}>+ Add new blog</AddButtonBlue>

      <Modal open={open} onClose={handleClose}>
        <ModalContainer>
          <ExitButton>
            <ClearIcon onClick={handleClose} style={{ marginRight: "15px" }} />
          </ExitButton>
          <ModalBody>
            <ModalTitel>Create new blog</ModalTitel>
            <InputWrapper>
              <InputTitle>Title</InputTitle>
              <InputStyled type="text" name="" placeholder="Write title name"/>
            </InputWrapper>
            <InputWrapper>
              <InputTitle>Content</InputTitle>
              <TextAreaStyled placeholder="Wtire content" />
            </InputWrapper>
            
            <SendButton>Create Blog</SendButton>
          </ModalBody>
        </ModalContainer>
      </Modal>
    </div>
  );
};

export default AddBlogModal;
