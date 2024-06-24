import React from "react";
import {
  ExitButton,
  ModalBody,
  ModalContainer,
  ModalTitel,
} from "../../styles/profileStd/profileModalStyle";
import { SendButton, TextAreaStyled } from "../../styles/materialsStyle";
import ClearIcon from "@mui/icons-material/Clear";
import { MenuItem, Modal } from "@mui/material";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";
import { SmsTemplates } from "../../styles/leadsStd/leadStyle";

const TableSmsModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div style={{ width: "100%" }}>
      <MenuItem onClick={handleOpen}>
        <FilterDramaIcon sx={{ fontSize: "20px", marginRight: "10px" }} />
        Sms
      </MenuItem>

      <Modal open={open} onClose={handleClose}>
        <ModalContainer>
          <ExitButton>
            <ClearIcon onClick={handleClose} style={{ marginRight: "15px" }} />
          </ExitButton>
          <ModalBody>
            <ModalTitel>Send sms</ModalTitel>
            <TextAreaStyled placeholder="Enter sms" />
            <SendButton>Send</SendButton>

            <div style={{display: 'flex', flexDirection :"column", alignItems: "start", gap: "9px"}}>
            <ModalTitel>SMS Templates</ModalTitel>
            <SmsTemplates>Your child did not come to class today</SmsTemplates>
            <SmsTemplates>Please pay for the course on time!</SmsTemplates>
            <SmsTemplates>Lorem ipsum dolor sit.</SmsTemplates>
            </div>
          </ModalBody>
        </ModalContainer>
      </Modal>
    </div>
  );
};

export default TableSmsModal;
