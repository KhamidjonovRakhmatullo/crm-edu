import * as React from 'react';
// import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { EditProfile } from '../styles/profileStd/profileStyle';
import EditIcon from '@mui/icons-material/Edit';
import { ExitButton, ModalBody, ModalContainer, ModalTitel } from '../styles/profileStd/profileModalStyle';
import ClearIcon from '@mui/icons-material/Clear';
import { InputStyled, InputTitle, InputWrapper, SendButton } from '../styles/materialsStyle';


const ProfileEditModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <div>
      <EditProfile  onClick={handleOpen}>
            <EditIcon sx={{fontSize: "16px"}}/>
            Edit profile
      </EditProfile>
      <Modal
        open={open}
        onClose={handleClose}
      >
       <ModalContainer>
        <ExitButton>
         <ClearIcon onClick={handleClose} style={{marginRight: "15px"}}/>
        </ExitButton>
        <ModalBody>
          <ModalTitel>Edit Profile</ModalTitel>
          <InputWrapper>
          <InputTitle>Full name</InputTitle>
          <InputStyled
            type="text"
            placeholder="Enter full name"
            name="user-email"
          />
        </InputWrapper>
          <InputWrapper>
          <InputTitle>Upload photo</InputTitle>
          <InputStyled
            type="file"
            placeholder="Upload photo"
            name="user-email"
          />
        </InputWrapper>
        <InputWrapper>
          <InputTitle>Telegram username</InputTitle>
          <InputStyled
            type="text"
            placeholder="Enter username"
            name="user-email"
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
        <InputWrapper>
          <InputTitle>Edit password</InputTitle>
          <InputStyled
            type="password"
            placeholder="Enter password"
            name="user-email"
          />
        </InputWrapper>

        <SendButton>Next</SendButton>
        </ModalBody>
       </ModalContainer>
      </Modal>
    </div>
  )
}

export default ProfileEditModal
