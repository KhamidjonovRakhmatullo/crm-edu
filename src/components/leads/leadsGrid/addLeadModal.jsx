import React from 'react'
import { ExitButton, ModalBody, ModalContainer, ModalTitel } from '../../styles/profileStd/profileModalStyle';
import { InputStyled, InputTitle, InputWrapper, SendButton } from '../../styles/materialsStyle';
import ClearIcon from '@mui/icons-material/Clear';
import { Modal } from '@mui/material';

const AddLeadModal = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
      <div>
        <SendButton  onClick={handleOpen}>
             + Add Lead
            </SendButton>
        <Modal
          open={open}
          onClose={handleClose}
        >
         <ModalContainer>
          <ExitButton>
           <ClearIcon onClick={handleClose} style={{marginRight: "15px"}}/>
          </ExitButton>
          <ModalBody>
            <ModalTitel>Add new lead</ModalTitel>
            <InputWrapper>
            <InputTitle>Last name</InputTitle>
            <InputStyled
              type="text"
              placeholder="Enter last name"
              name="last-name"
            />
          </InputWrapper>

          <InputWrapper>
            <InputTitle>Phone number</InputTitle>
            <InputStyled
              type="number"
              placeholder="010-1234-5678"
              name="user-email"
            />
          </InputWrapper>
  
          <SendButton>Create lead</SendButton>
          </ModalBody>
         </ModalContainer>
        </Modal>
      </div>
  )
}

export default AddLeadModal