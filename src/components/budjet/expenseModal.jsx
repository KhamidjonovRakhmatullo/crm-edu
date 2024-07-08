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
  CheckBoxWrapper,
  InputStyled,
  InputTitle,
  InputWrapper,
  SendButton,
  TextAreaStyled,
} from "../styles/materialsStyle";
import ClearIcon from "@mui/icons-material/Clear";
import { Modal } from "@mui/material";

const ExpenseModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div style={{ width: "20%" }}>
      <AddButtonBlue onClick={handleOpen}>+ Add new category</AddButtonBlue>

      <Modal open={open} onClose={handleClose}>
        <ModalContainer>
          <ExitButton>
            <ClearIcon onClick={handleClose} style={{ marginRight: "15px" }} />
          </ExitButton>
          <ModalBody>
            <ModalTitel>Create new expense</ModalTitel>
            <InputWrapper>
              <InputTitle>Description</InputTitle>
              <TextAreaStyled placeholder="Enter text"/>
            </InputWrapper>
            <InputWrapper>
              <InputTitle>Date</InputTitle>
              <InputStyled
                type="date"
                name="date"
              />
            </InputWrapper>
            <InputWrapper>
              <InputTitle>Select category</InputTitle>
              <InputStyled
                type="text"
                name="select"
                placeholder="Select"
              />
            </InputWrapper>
            <InputWrapper>
              <InputTitle>Select employee</InputTitle>
              <InputStyled
                type="text"
                name="select"
                placeholder="Select"
              />
            </InputWrapper>
            <InputWrapper>
              <InputTitle>Amount</InputTitle>
              <InputStyled
                type="number"
                name="amount"
                placeholder="Enter amount"
              />
            </InputWrapper>
            <InputWrapper>
              <InputTitle>Payment method</InputTitle>
              <div style={{display: 'flex', justifyContent: "space-between", width: "60%"}}>
              <CheckBoxWrapper>
                <CheckBoxLabel $gap8>
                  <CheckBoxStyled type="radio" name="radio" />
                  Cash
                </CheckBoxLabel>
                <CheckBoxLabel $gap8>
                  <CheckBoxStyled type="radio" name="radio" />
                  Transfer
                </CheckBoxLabel>
                <CheckBoxLabel $gap8>
                  <CheckBoxStyled type="radio" name="radio" />
                  Card
                </CheckBoxLabel>
              </CheckBoxWrapper>
              <CheckBoxWrapper>
                <CheckBoxLabel $gap8>
                  <CheckBoxStyled type="radio" name="radio" />
                  Cash
                </CheckBoxLabel>
                <CheckBoxLabel $gap8>
                  <CheckBoxStyled type="radio" name="radio" />
                  Cash
                </CheckBoxLabel>
                <CheckBoxLabel $gap8>
                  <CheckBoxStyled type="radio" name="radio" />
                  Cash
                </CheckBoxLabel>
              </CheckBoxWrapper>
              </div>
            </InputWrapper>
            <SendButton>Create expense</SendButton>
          </ModalBody>
        </ModalContainer>
      </Modal>
    </div>
  );
};

export default ExpenseModal;
