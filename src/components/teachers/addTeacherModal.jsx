import React from "react";
import {
  ExitButton,
  ModalBody,
  ModalContainer,
  ModalTitel,
} from "../styles/profileStd/profileModalStyle";
import {
  AddButtonBlue,
  CheckBoxLabel,
    CheckBoxStyled,
  InputStyled,
  InputTitle,
  InputWrapper,
  SendButton,
} from "../styles/materialsStyle";
import ClearIcon from "@mui/icons-material/Clear";
import { Modal } from "@mui/material";

const AddTeacherModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div style={{width: "25%"}}>
       <AddButtonBlue onClick={handleOpen}>
             + Add Teacher
            </AddButtonBlue>
      <Modal open={open} onClose={handleClose}>
        <ModalContainer>
          <ExitButton>
            <ClearIcon onClick={handleClose} style={{ marginRight: "15px" }} />
          </ExitButton>
          <ModalBody>
            <ModalTitel>Add new teacher</ModalTitel>
            <InputWrapper>
              <InputTitle>Full name</InputTitle>
              <InputStyled
                type="text"
                placeholder="Enter full name"
                name="techer-full-name"
              />
            </InputWrapper>
            <InputWrapper>
              <InputTitle>Telegram username</InputTitle>
              <InputStyled
                type="text"
                placeholder="Enter username"
                name="teacher-telegram"
              />
            </InputWrapper>
            <InputWrapper>
              <InputTitle>Upload photo</InputTitle>
              <InputStyled
                type="text"
                placeholder="Upload photo"
                name="teacher-photo"
              />
            </InputWrapper>
            <InputWrapper>
              <InputTitle>Percent (%)</InputTitle>
              <InputStyled
                type="text"
                placeholder="Enter percent"
                name="teacher-photo"
              />
            </InputWrapper>
            <InputWrapper>
              <InputTitle>Branches</InputTitle>
              <div style={{display: "flex", gap: "40px"}}>
              <CheckBoxLabel $gap8>
              <CheckBoxStyled
                type="checkbox"
                name="branch"
              />
              Demo Branch
              </CheckBoxLabel>
              <CheckBoxLabel $gap8>
              <CheckBoxStyled
                type="checkbox"
                name="branch"
              />
              Demo Branch
              </CheckBoxLabel>
              <CheckBoxLabel $gap8>
              <CheckBoxStyled
                type="checkbox"
                name="branch"
              />
              Demo Branch
              </CheckBoxLabel>
              </div>
            </InputWrapper>

            <InputWrapper>
              <InputTitle>Phone number</InputTitle>
              <InputStyled
                type="number"
                placeholder="010-1234-5678"
                name="user-email"
              />
            </InputWrapper>
            <InputWrapper>
              <InputTitle>Password</InputTitle>
              <InputStyled
                type="password"
                placeholder="Enter password"
                name="teacher-password"
              />
            </InputWrapper>

            <SendButton>Create lead</SendButton>
          </ModalBody>
        </ModalContainer>
      </Modal>
    </div>
  );
};

export default AddTeacherModal;
