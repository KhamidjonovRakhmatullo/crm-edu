import React from "react";
import {
  DivSpaceBetween,
  StudentsRoomWrapper,
  TeacherGroupAvatar,
  TeacherGroupBox,
  TeacherGroupContainer,
  TeacherGroupCourse,
  TeacherGroupDateWrapper,
  TeacherGroupLabel,
  TeacherGroupLessonDays,
  TeacherGroupName,
  TeacherGroupRoom,
  TeacherGroupStartDate,
} from "../styles/teachersStd/teachersStyle";
import groupsMock from "../mock/teachersMock/groupsMock";
import { SendButton } from "../styles/materialsStyle";

const TeacherGroup = () => {
  const data = groupsMock.maindata;
  return (
    <TeacherGroupContainer>
      {data.map((value, key) => {
        return (
          <TeacherGroupBox key={key}>
            <TeacherGroupAvatar>{value.groupName[0]}</TeacherGroupAvatar>
            <div style={{display: "flex", flexDirection: "column", alignContent: "center", gap:"12px"}}>
            <DivSpaceBetween>
              <TeacherGroupName>{value.groupName}</TeacherGroupName>
              <TeacherGroupLabel>Group name</TeacherGroupLabel>
            </DivSpaceBetween>
            <DivSpaceBetween>
              <TeacherGroupCourse>{value.courseType}</TeacherGroupCourse>
              <TeacherGroupLabel>Course</TeacherGroupLabel>
            </DivSpaceBetween>
            <DivSpaceBetween>
              <TeacherGroupStartDate>{value.startedDate}</TeacherGroupStartDate>
              <TeacherGroupLabel>Start date</TeacherGroupLabel>
            </DivSpaceBetween>
            <DivSpaceBetween>
              <StudentsRoomWrapper>
                <TeacherGroupRoom>{value.numberStudents}</TeacherGroupRoom>
                <TeacherGroupRoom>{value.roomNumber}</TeacherGroupRoom>
              </StudentsRoomWrapper>
              <TeacherGroupLabel>Students & room</TeacherGroupLabel>
            </DivSpaceBetween>
            </div>
            <hr style={{backgroundColor:"#2C2669", height: "1.4px", margin: "50px 0px 20px 0px"}}/>
            <DivSpaceBetween>
              <TeacherGroupDateWrapper>
                <TeacherGroupName>{value.time.from}-{value.time.to}</TeacherGroupName>
                <TeacherGroupLessonDays>{value.lessonDays}</TeacherGroupLessonDays>
              </TeacherGroupDateWrapper>
              <SendButton $maxWidhtFitContent style={{padding: "8px 40px"}}>See group</SendButton>
            </DivSpaceBetween>
          </TeacherGroupBox>
        );
      })}
    </TeacherGroupContainer>
  );
};

export default TeacherGroup;
