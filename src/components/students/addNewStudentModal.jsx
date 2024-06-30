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
import { WrapperSpaceBetween } from "../styles/groupsStd/groupsStyle";

const AddNewStudentModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div style={{ width: "25%" }}>
          <AddButtonBlue onClick={handleOpen}>+ Add New Student</AddButtonBlue>

      <Modal open={open} onClose={handleClose}>
        <ModalContainer>
          <ExitButton>
            <ClearIcon onClick={handleClose} style={{ marginRight: "15px" }} />
          </ExitButton>
          <ModalBody>
            <ModalTitel>Add new student</ModalTitel>
            <InputWrapper>
              <InputTitle>Full name</InputTitle>
              <InputStyled
                type="text"
                placeholder="Enter full name"
                name="full-name"
              />
            </InputWrapper>
            <InputWrapper>
              <InputTitle>Date of birth</InputTitle>
              <InputStyled
                type="date"
                placeholder="Select date"
                name="birth-date"
              />
            </InputWrapper>
            <InputWrapper>
              <InputTitle>Gender</InputTitle>
              <div style={{display: "flex", gap: "40px"}}>
              <CheckBoxLabel $gap8>
              <CheckBoxStyled
                type="radio"
                name="gender"
              />
              Male
              </CheckBoxLabel>
              <CheckBoxLabel $gap8>
              <CheckBoxStyled
                type="radio"
                name="gender"
              />
              Female
              </CheckBoxLabel>
              </div>
            </InputWrapper>
            <InputWrapper>
              <InputTitle>Phone number</InputTitle>
              <InputStyled
                type="number"
                placeholder="010-0110-1001"
                name="phone-number"
              />
            </InputWrapper>
            <InputWrapper>
              <InputTitle>Parent phone number</InputTitle>
              <InputStyled
                type="number"
                placeholder="010-0110-1001"
                name="phone-number-parent"
              />
            </InputWrapper>
            <InputWrapper>
              <InputTitle>Password</InputTitle>
              <InputStyled
                type="password"
                placeholder="Enter password"
                name="password"
              />
            </InputWrapper>
            <WrapperSpaceBetween $gap30px>
            <InputWrapper>
              <InputTitle>Select days</InputTitle>
              <InputStyled
                type="text"
                placeholder="Select days"
                name="days"
              />
            </InputWrapper>
            <InputWrapper>
              <InputTitle>Date from</InputTitle>
              <InputStyled
                type="date"
                name="date"
              />
            </InputWrapper>
            </WrapperSpaceBetween>

            <SendButton>Add student</SendButton>
          </ModalBody>
        </ModalContainer>
      </Modal>
    </div>
  );
};

export default AddNewStudentModal;