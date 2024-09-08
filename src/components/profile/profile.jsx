import React, { useEffect, useState } from 'react'
import { ProfileBox, ProfileAvatar, ProfileBG, ProfileContactInfo, ProfileContainer, ProfileInfo, ProfileType } from '../styles/profileStd/profileStyle'
import avatar from '../../assets/profileAssets/Avatar.png'
import { BaseURL } from '../../config/dataUri';
import axios from 'axios';
import Modal from '@mui/material/Modal';
import { EditProfile } from '../styles/profileStd/profileStyle';
import EditIcon from '@mui/icons-material/Edit';
import { ExitButton, ModalBody, ModalContainer, ModalTitel } from '../styles/profileStd/profileModalStyle';
import ClearIcon from '@mui/icons-material/Clear';
import { InputStyled, InputTitle, InputWrapper, SendButton } from '../styles/materialsStyle';

const ProfileComponent = () => {
  
  // Modal state
  const [open, setOpen] = React.useState(false);
  const handleOpen = (profile) => {
    setEditData(profile); // Set the profile being edited
    setNewName(profile.name || "");
    setNewSurname(profile.surname || "");
    setNewPhone_number(profile.phone_number || "");
    setNewEmail(profile.email || "");
    setNewCompany_name(profile.company_name || "");
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  // Data states 
  const [dataList, setDataList] = useState([]);
  const [editData, setEditData] = useState(null);
  const [newName, setNewName] = useState("");
  const [newSurname, setNewSurname] = useState("");
  const [newPhone_number, setNewPhone_number] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newCompany_name, setNewCompany_name] = useState("");

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const token = localStorage.getItem("token")

    try {
      const response = await axios.get(`${BaseURL}/auth/me`, {
        // method: "GET",  issue with fetch()
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("TEST 1", response.data.data)
      if(!response.ok){
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      console.log("TEST 2")
      setDataList(response.data.data || []); // Assuming the response structure has a "data" field.

      console.log("TEST 3")
    } catch (error) {
      console.error("Fetch data is NOT successful", error);
    }
  };
  
  // const fetchData = async () => {
  //   const token = localStorage.getItem("token")

  //   try {
  //     const response = await axios.get(`${BaseURL}/auth/me`, {
  //       // method: "GET",  issue with fetch()
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     console.log("TEST 1", response.data.data)
  //     if(!response.ok){
  //       throw new Error(`HTTP error! Status: ${response.status}`);
  //     }
  //     console.log("TEST 2")
  //     setDataList(response.data.data || []); // Assuming the response structure has a "data" field.

  //     console.log("TEST 3")
  //   } catch (error) {
  //     console.error("Fetch data is NOT successful", error);
  //   }
  // };


  const handleEdit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (!editData) return;
    try {
      const response = await axios.put(`${BaseURL}/auth/update/${editData._id}`, {
        name: newName,
        surname: newSurname,
        phone_number: newPhone_number,
        email: newEmail,
        company_name: newCompany_name,
      });
      // Optionally update the state with the new data.
      console.log(response.data.data);
      handleClose();
      fetchData(); // Refresh the data list after update.
    } catch (error) {
      console.error(`Error updating data!`, error);
    }
  };
  return (
    <ProfileContainer>
      {dataList.map((value, key)=> {
        return(
      <ProfileBox key={key}>
        <ProfileBG>
         <ProfileAvatar>
          <img src={avatar} alt="avatar" />
         </ProfileAvatar>  
         <EditProfile  onClick={()=> handleOpen(value)}>
            <EditIcon sx={{fontSize: "16px"}}/>
            Edit profile.
         </EditProfile>
        </ProfileBG>
        <ProfileInfo> 
          <div style={{display: 'flex', gap: "6px"}}>
         <div> {value.name || "no data"}</div>
          {value.surname || "no data"}
          </div>
          <ProfileType> {value.role || "no data"}</ProfileType>
          <ProfileContactInfo>
            <span>KakaoTalk:</span>
            <p>@{value.kakaoId || "no data"}</p>
          </ProfileContactInfo>
          <ProfileContactInfo>
            <span>Phone:</span>
            <p>{value.phone_number || "no data"}</p>
          </ProfileContactInfo>
        </ProfileInfo>
      </ProfileBox>
       )
      })}

      <Modal
        open={open}
        onClose={handleClose}
      >
       <ModalContainer component="form" onSubmit={handleEdit}>
        <ExitButton>
         <ClearIcon onClick={handleClose} style={{marginRight: "15px"}}/>
        </ExitButton>
        <ModalBody>
          <ModalTitel>Edit Profile</ModalTitel>
          <InputWrapper>
          <InputTitle>Name</InputTitle>
          <InputStyled
            type="text"
            name="newName"
            value={newName}
            onChange={(e)=> setNewName(e.target.value)}
          />
        </InputWrapper>
          <InputWrapper>
          <InputTitle>Surname</InputTitle>
          <InputStyled
            type="text"
            name="newSurname"
            value={newSurname}
            onChange={(e)=> setNewSurname(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <InputTitle>Phone number</InputTitle>
          <InputStyled
            type="number"
            name="newPhone_number"
            value={newPhone_number}
            onChange={(e)=> setNewPhone_number(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <InputTitle>Email</InputTitle>
          <InputStyled
            type="text"
            name="newEmail"
            value={newEmail}
            onChange={(e)=> setNewEmail(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <InputTitle>Company name</InputTitle>
          <InputStyled
            type="text"
            name="NewCompany_name"
            value={newCompany_name}
            onChange={(e)=> setNewCompany_name(e.target.value)}
          />
        </InputWrapper>

        <SendButton type="submit">Save Changes</SendButton>
        </ModalBody>
       </ModalContainer>
      </Modal>
    </ProfileContainer>
  )
}

export default ProfileComponent
