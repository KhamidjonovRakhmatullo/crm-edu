import React from "react";
import {
  ExitButton,
  ModalBody,
  ModalContainer,
  ModalTitel,
} from "../styles/profileStd/profileModalStyle";
import {
    AddButtonBlue,
  InputStyled,
  InputTitle,
  InputWrapper,
  SendButton,
} from "../styles/materialsStyle";
import ClearIcon from "@mui/icons-material/Clear";
import { Modal } from "@mui/material";
import { WrapperSpaceBetween } from "../styles/groupsStd/groupsStyle";

const AddNewGroupModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div style={{ width: "25%" }}>
          <AddButtonBlue onClick={handleOpen}>+ Add Group</AddButtonBlue>

      <Modal open={open} onClose={handleClose}>
        <ModalContainer>
          <ExitButton>
            <ClearIcon onClick={handleClose} style={{ marginRight: "15px" }} />
          </ExitButton>
          <ModalBody>
            <ModalTitel>Create new group</ModalTitel>
            <InputWrapper>
              <InputTitle>Group name</InputTitle>
              <InputStyled
                type="text"
                placeholder="Enter group name"
                name="last-name"
              />
            </InputWrapper>
            <WrapperSpaceBetween $gap30px>
            <InputWrapper>
              <InputTitle>Upload photo</InputTitle>
              <InputStyled
                type="file"
                // placeholder="Upload file"
                name="last-name"
              />
            </InputWrapper>
            <InputWrapper>
              <InputTitle>Select course</InputTitle>
              <InputStyled
                type="text"
                placeholder="Enter group name"
                name="last-name"
              />
            </InputWrapper>
            </WrapperSpaceBetween>
            <InputWrapper>
              <InputTitle>Select teacher</InputTitle>
              <InputStyled
                type="text"
                placeholder="Select teacher"
                name="last-name"
              />
            </InputWrapper>
            <InputWrapper>
              <InputTitle>Select lesson start time</InputTitle>
              <InputStyled
                type="text"
                placeholder="Start times..."
                name="last-name"
              />
            </InputWrapper>
            <WrapperSpaceBetween $gap30px>
            <InputWrapper>
              <InputTitle>Select days</InputTitle>
              <InputStyled
                type="text"
                placeholder="Select days"
                name="last-name"
              />
            </InputWrapper>
            <InputWrapper>
              <InputTitle>Select room</InputTitle>
              <InputStyled
                type="text"
                placeholder="Select room"
                name="last-name"
              />
            </InputWrapper>
            </WrapperSpaceBetween>
            <WrapperSpaceBetween $gap30px>
            <InputWrapper>
              <InputTitle>Select start date</InputTitle>
              <InputStyled
                type="date"
                placeholder="Select date"
                name="last-name"
              />
            </InputWrapper>
            <InputWrapper>
              <InputTitle>Select end date</InputTitle>
              <InputStyled
                type="date"
                placeholder="Select date"
                name="last-name"
              />
            </InputWrapper>
            </WrapperSpaceBetween>

            <SendButton>Create from where</SendButton>
          </ModalBody>
        </ModalContainer>
      </Modal>
    </div>
  );
};

export default AddNewGroupModal;