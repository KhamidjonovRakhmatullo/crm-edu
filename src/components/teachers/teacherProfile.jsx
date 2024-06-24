import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  TeacherInfoPages,
  TeacherProfileContainer,
  TeachersProfileTopPages,
} from "../styles/teachersStd/teachersStyle";
import {
  ProfileAvatar,
  ProfileBG,
  ProfileBox,
  ProfileContactInfo,
  ProfileInfo,
  ProfileType,
} from "../styles/profileStd/profileStyle";
import { teacherData } from "../mock/teachersMock/teacherInfoMock";
import TeacherGroup from "./teacherGroup";
import EditProfile from "./editProfile";
// import TeacherSalary from "./teacherSalary";

const TeacherProfile = () => {
  //data by id
  let { id } = useParams();
  const resultData = teacherData.maindata.find(
    (value) => value.id === parseInt(id)
  );

  //page change
  const [active, setActive] = useState(false);

  const handleProfilePage = () => {
    setActive(false);
  };
  const handleGroupsPage = () => {
    setActive(true);
  };
  return (
    <TeacherProfileContainer>
      <TeachersProfileTopPages>
        <TeacherInfoPages onClick={handleProfilePage} borderType="left">
          Profile
        </TeacherInfoPages>
        <TeacherInfoPages $BorderNoSides onClick={handleGroupsPage}>Groups</TeacherInfoPages>
        <TeacherInfoPages borderType="right">Salary</TeacherInfoPages>
      </TeachersProfileTopPages>

      {active ? (
        <TeacherGroup resultData={resultData}/>
      ) : (
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
            <div style={{display: "flex", gap: "4px"}}>
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
      )}
    </TeacherProfileContainer>
  );
};

export default TeacherProfile;
