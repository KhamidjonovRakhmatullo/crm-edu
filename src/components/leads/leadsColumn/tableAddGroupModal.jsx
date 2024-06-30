import React from "react";
import {
  ExitButton,
  ModalBody,
  ModalContainer,
  ModalTitel,
} from "../../styles/profileStd/profileModalStyle";
import {
  InputStyled,
  InputTitle,
  InputWrapper,
  SendButton,
} from "../../styles/materialsStyle";
import ClearIcon from "@mui/icons-material/Clear";
import { Modal } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import AddIcon from '@mui/icons-material/Add';

const TableAddGroupModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div style={{ width: "100%" }}>
        <MenuItem onClick={handleOpen}>
            <AddIcon sx={{fontSize: "20px", marginRight: "10px"}}/>
            Add to group
        </MenuItem>

      <Modal open={open} onClose={handleClose}>
        <ModalContainer>
          <ExitButton>
            <ClearIcon onClick={handleClose} style={{ marginRight: "15px" }} />
          </ExitButton>
          <ModalBody>
            <ModalTitel>Add to group</ModalTitel>
            <InputWrapper>
              <InputTitle>Select group</InputTitle>
              <InputStyled
                type="text"
                placeholder="Add to group"
                name="last-name"
              />
            </InputWrapper>
            <InputWrapper>
              <InputTitle>Date from</InputTitle>
              <InputStyled
                type="date"
                placeholder="Select date"
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

export default TableAddGroupModal;