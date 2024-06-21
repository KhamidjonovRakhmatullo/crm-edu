import React from 'react'
import { ProfileBox, ProfileAvatar, ProfileBG, ProfileContactInfo, ProfileContainer, ProfileInfo, ProfileType } from '../styles/profileStd/profileStyle'
import avatar from '../../assets/profileAssets/Avatar.png'
import ProfileEditModal from './profileEditModal';

const ProfileComponent = () => {
  return (
    <ProfileContainer>
      <ProfileBox>
        <ProfileBG>
         <ProfileAvatar>
          <img src={avatar} alt="avatar" />
         </ProfileAvatar>  
         <ProfileEditModal/> {/* modal has exported */}
        </ProfileBG>
        <ProfileInfo> 
          Adam Smith
          <ProfileType>CEO</ProfileType>
          <ProfileContactInfo>
            <span>KakaoTalk:</span>
            <p>@andrewsmith</p>
          </ProfileContactInfo>
          <ProfileContactInfo>
            <span>Phone:</span>
            <p>010-1234-5678</p>
          </ProfileContactInfo>
        </ProfileInfo>
      </ProfileBox>
    </ProfileContainer>
  )
}

export default ProfileComponent