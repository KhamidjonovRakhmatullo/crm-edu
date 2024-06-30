import React from "react";
import {
  ExitButton,
  ModalBody,
  ModalContainer,
  ModalTitel,
} from "../../styles/profileStd/profileModalStyle";
import {
  CheckBoxLabel,
  CheckBoxStyled,
  CheckBoxWrapper,
  InputStyled,
  InputTitle,
  InputWrapper,
  SendButton,
  TextAreaStyled,
} from "../../styles/materialsStyle";
import ClearIcon from "@mui/icons-material/Clear";
import { MenuItem, Modal } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { ModalTitle2 } from "../../styles/studentsStd/studentsStyle";

const AddPaymentModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div style={{ width: "100%" }}>
      <MenuItem onClick={handleOpen} style={{ color: "#6053B9" }}>
        <AddIcon
          sx={{ fontSize: "20px", marginRight: "10px", color: "#2C2669" }}
        />
        Add payment
      </MenuItem>

      <Modal open={open} onClose={handleClose}>
        <ModalContainer>
          <ExitButton>
            <ClearIcon onClick={handleClose} style={{ marginRight: "15px" }} />
          </ExitButton>
          <ModalBody>
           <InputWrapper>
           <ModalTitel>Add Payment</ModalTitel>
           <ModalTitle2>Current balance : 200.000 UZS</ModalTitle2>
           </InputWrapper>
            <InputWrapper>
              <InputTitle>Select group</InputTitle>
              <InputStyled
                type="text"
                placeholder="Select group"
                name="group-name"
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
            <InputWrapper>
              <InputTitle>Amount</InputTitle>
              <InputStyled
                type="number"
                placeholder="Enter amount"
                name="amount"
              />
            </InputWrapper>
            <InputWrapper>
              <InputTitle>Payment date</InputTitle>
              <InputStyled
                type="date"
                name="date"
              />
            </InputWrapper>
            <TextAreaStyled placeholder="Enter sms" style={{height: "100px"}}/>
            <SendButton>Add Payment</SendButton>
          </ModalBody>
        </ModalContainer>
      </Modal>
    </div>
  );
};

export default AddPaymentModal;
