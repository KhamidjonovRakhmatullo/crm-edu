import React from "react";
import {
  ExitButton,
  ModalBody,
  ModalContainer,
  ModalTitel,
} from "../../styles/profileStd/profileModalStyle";
import {
    AddButtonBlue,
  CheckBoxLabel,
  CheckBoxStyled,
  InputStyled,
  InputTitle,
  InputWrapper,
  SendButton,
} from "../../styles/materialsStyle";
import ClearIcon from "@mui/icons-material/Clear";
import { Modal } from "@mui/material";

const StaffModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div style={{ width: "25%" }}>
          <AddButtonBlue onClick={handleOpen}>+ Add New employee</AddButtonBlue>

      <Modal open={open} onClose={handleClose}>
        <ModalContainer>
          <ExitButton>
            <ClearIcon onClick={handleClose} style={{ marginRight: "15px" }} />
          </ExitButton>
          <ModalBody>
            <ModalTitel>Create new employee</ModalTitel>
            <InputWrapper>
              <InputTitle>Full name</InputTitle>
              <InputStyled
                type="text"
                placeholder="Enter full name"
                name="full-name"
              />
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
              <InputTitle>Telegram username</InputTitle>
              <InputStyled
                type="text"
                placeholder="@edumansim"
                name="telegram-username"
              />
            </InputWrapper>
            <InputWrapper>
              <InputTitle>Upload photo</InputTitle>
              <InputStyled
                type="file"
                placeholder=""
                name="photo"
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
            <InputWrapper>
              <InputTitle>Roles</InputTitle>
              <div style={{display: "flex", gap: "40px"}}>
              <CheckBoxLabel $gap8>
              <CheckBoxStyled
                type="radio"
                name="role"
              />
              CEO
              </CheckBoxLabel>
              <CheckBoxLabel $gap8>
              <CheckBoxStyled
                type="radio"
                name="role"
              />
              Administrator
              </CheckBoxLabel>
              </div>
            </InputWrapper>
            <InputWrapper>
              <InputTitle>Branches</InputTitle>
              <div style={{display: "flex", gap: "40px"}}>
              <CheckBoxLabel $gap8>
              <CheckBoxStyled
                type="radio"
                name="branch"
              />
              Demo 1
              </CheckBoxLabel>
              <CheckBoxLabel $gap8>
              <CheckBoxStyled
                type="radio"
                name="branch"
              />
              Demo 2
              </CheckBoxLabel>
              <CheckBoxLabel $gap8>
              <CheckBoxStyled
                type="radio"
                name="branch"
              />
              Demo 3
              </CheckBoxLabel>
              <CheckBoxLabel $gap8>
              <CheckBoxStyled
                type="radio"
                name="branch"
              />
              Demo 4
              </CheckBoxLabel>
              </div>
            </InputWrapper>

            <SendButton>Create employee</SendButton>
          </ModalBody>
        </ModalContainer>
      </Modal>
    </div>
  );
};

export default StaffModal;