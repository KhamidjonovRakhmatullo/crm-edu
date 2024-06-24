import React from "react";
import {
  ExitButton,
  ModalBody,
  ModalContainer,
  ModalTitel,
} from "../../styles/profileStd/profileModalStyle";
import {
  AddButton,
  InputStyled,
  InputTitle,
  InputWrapper,
  SendButton,
} from "../../styles/materialsStyle";
import ClearIcon from "@mui/icons-material/Clear";
import { Modal } from "@mui/material";

const AddSectionModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div style={{ width: "100%" }}>
      <AddButton onClick={handleOpen}>+</AddButton>

      <Modal open={open} onClose={handleClose}>
        <ModalContainer>
          <ExitButton>
            <ClearIcon onClick={handleClose} style={{ marginRight: "15px" }} />
          </ExitButton>
          <ModalBody>
            <ModalTitel>Add section</ModalTitel>
            <InputWrapper>
              <InputTitle>Section name</InputTitle>
              <InputStyled
                type="text"
                placeholder="Enter section name"
                name="last-name"
              />
            </InputWrapper>

            <SendButton>Create from where</SendButton>
          </ModalBody>
        </ModalContainer>
      </Modal>
    </div>
  );
};

export default AddSectionModal;