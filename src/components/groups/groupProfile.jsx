import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { groupMock } from "../mock/groupsMock/groupsTableMock";
import {
  DivSpaceBetween,
  StudentsRoomWrapper,
  TeacherGroupAvatar,
  TeacherGroupBox,
  TeacherGroupCourse,
  TeacherGroupDateWrapper,
  TeacherGroupLabel,
  TeacherGroupLessonDays,
  TeacherGroupName,
  TeacherGroupRoom,
  TeacherGroupStartDate,
  TeacherInfoPages,
  TeachersProfileTopPages,
} from "../styles/teachersStd/teachersStyle";
import { SendButton } from "../styles/materialsStyle";
import { GroupProfileContainer } from "../styles/groupsStd/groupsStyle";

const GroupProfile = () => {
  let { id } = useParams();
  const data = groupMock.maindata.find((value) => value.id === id);

  //page change
  const [active, setActive] = useState(true);

  const handleAttandancePage = () => {
    setActive(true);
  };
  const handlePricePage = () => {
    setActive(false);
  };

  return (
    <GroupProfileContainer>
      <TeacherGroupBox>
        <TeacherGroupAvatar>{data.group.groupName[0]}</TeacherGroupAvatar>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            gap: "12px",
          }}
        >
          <DivSpaceBetween>
            <TeacherGroupName>{data.group.groupName || "no data"}</TeacherGroupName>
            <TeacherGroupLabel>Group name</TeacherGroupLabel>
          </DivSpaceBetween>
          <DivSpaceBetween>
            <TeacherGroupCourse>{data.group.course || "no data"}</TeacherGroupCourse>
            <TeacherGroupLabel>Course</TeacherGroupLabel>
          </DivSpaceBetween>
          <DivSpaceBetween>
            <TeacherGroupStartDate>{data.group.teacher || "no data"}</TeacherGroupStartDate>
            <TeacherGroupLabel>Teacher name</TeacherGroupLabel>
          </DivSpaceBetween>
          <DivSpaceBetween>
            <TeacherGroupStartDate>
              03.24.2024 - 07.29.2024
            </TeacherGroupStartDate>
            <TeacherGroupLabel>Training dates</TeacherGroupLabel>
          </DivSpaceBetween>
          <DivSpaceBetween>
            <StudentsRoomWrapper>
              <TeacherGroupRoom>{data.group.students || "no data"}</TeacherGroupRoom>
              <TeacherGroupRoom>{data.group.room || "no data"}</TeacherGroupRoom>
            </StudentsRoomWrapper>
            <TeacherGroupLabel>Students & room</TeacherGroupLabel>
          </DivSpaceBetween>
        </div>
        <hr
          style={{
            backgroundColor: "#2C2669",
            height: "1.4px",
            margin: "50px 0px 20px 0px",
          }}
        />
        <DivSpaceBetween>
          <TeacherGroupDateWrapper>
            <TeacherGroupName>
              {data.group.startTime}-{data.group.endTime || "no data"}
            </TeacherGroupName>
            <TeacherGroupLessonDays>{data.group.days || "no data"}</TeacherGroupLessonDays>
          </TeacherGroupDateWrapper>
          <SendButton $maxWidhtFitContent style={{ padding: "8px 40px" }}>
            199.00$
          </SendButton>
        </DivSpaceBetween>
      </TeacherGroupBox>

      <TeachersProfileTopPages style={{marginTop: "40px"}}>
        <TeacherInfoPages onClick={handleAttandancePage} borderType="left">
        Attandance
        </TeacherInfoPages>
        <TeacherInfoPages $BorderNoSides onClick={handlePricePage}>Individual prices</TeacherInfoPages>
        <TeacherInfoPages borderType="right">History</TeacherInfoPages>
      </TeachersProfileTopPages>
      {active ? `Attandance` : `Individual prices`}
    </GroupProfileContainer>
  );
};

export default GroupProfile;
