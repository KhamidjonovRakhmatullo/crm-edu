import React from "react";
import {
  ExitButton,
  ModalBody,
  ModalContainer,
  ModalTitel,
} from "../../styles/profileStd/profileModalStyle";
import {
  AddButtonBlue,
  InputStyled,
  InputTitle,
  InputWrapper,
  SendButton,
} from "../../styles/materialsStyle";
import ClearIcon from "@mui/icons-material/Clear";
import { Modal } from "@mui/material";

const BranchModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div style={{ width: "25%" }}>
      <AddButtonBlue onClick={handleOpen}>+ Add new branch</AddButtonBlue>

      <Modal open={open} onClose={handleClose}>
        <ModalContainer>
          <ExitButton>
            <ClearIcon onClick={handleClose} style={{ marginRight: "15px" }} />
          </ExitButton>
          <ModalBody>
            <ModalTitel>Create new branch</ModalTitel>
            <InputWrapper>
              <InputTitle>Branch name</InputTitle>
              <InputStyled
                type="text"
                name="branch-name"
                placeholder="Enter branch name"
              />
            </InputWrapper>

            <SendButton>Create branch</SendButton>
          </ModalBody>
        </ModalContainer>
      </Modal>
    </div>
  );
};

export default BranchModal;
