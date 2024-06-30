import React from "react";
  import {
    ProfileAvatar,
    ProfileBG,
    ProfileBox,
    ProfileContactInfo,
    ProfileInfo,
    ProfileType,
  } from "../styles/profileStd/profileStyle";
import EditProfile from "./editProfile";

const TeacherProfile = ({resultData}) => {
  return (
    <div>
      <ProfileBox>
        <ProfileBG>
          <ProfileAvatar>
            {resultData.teacher.photo || resultData.teacher.fullName[0]}
          </ProfileAvatar>
          {/* <ProfileEditModal/> modal has exported */}
          <EditProfile />
        </ProfileBG>
        <ProfileInfo>
          {resultData.teacher.fullName}
          <div style={{ display: "flex", gap: "4px" }}>
            <ProfileType>{resultData.teacher.position}</ProfileType>
            <ProfileType>{resultData.teacher.position}</ProfileType>
          </div>
          <ProfileContactInfo>
            <span>Branch:</span>
            <p>{resultData.teacher.worksIn}</p>
          </ProfileContactInfo>
          <ProfileContactInfo>
            <span>Phone:</span>
            <p>{resultData.teacher.phoneNumber}</p>
          </ProfileContactInfo>
          <ProfileContactInfo>
            <span>KakaoId:</span>
            <p>{resultData.teacher.telegram}</p>
          </ProfileContactInfo>
          <ProfileContactInfo>
            <span>Percent:</span>
            <p>{resultData.teacher.percent}</p>
          </ProfileContactInfo>
          <ProfileContactInfo>
            <span>Balance:</span>
            <p>{resultData.teacher.balance}</p>
          </ProfileContactInfo>
        </ProfileInfo>
      </ProfileBox>
    </div>
  );
};

export default TeacherProfile;
