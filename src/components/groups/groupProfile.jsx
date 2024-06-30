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
import Attandance from "./attandance";
import IndividualPrices from "./individualPrices";
import History from "./history";
import GroupProfileModal from "./groupProfileModal";

const GroupProfile = () => {
  let { id } = useParams();
  const data = groupMock.maindata.find((value) => value.id === id);

  //page change
  const [currentPage, setCurrentPage] = useState('page1');

  function PageState() {
    const pages = {
      page1: <Attandance />,
      page2: <IndividualPrices />,
      page3: <History />,
    };
    return pages[currentPage];
  }
  return (
    <GroupProfileContainer>
      <TeacherGroupBox>
       <DivSpaceBetween style={{marginBottom: "27px"}}>
       <TeacherGroupAvatar>{data.group.groupName[0]}</TeacherGroupAvatar>
       <GroupProfileModal />
       </DivSpaceBetween>
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
      {/* //////////PAGES CONTROLLER////////////// */}
      <TeachersProfileTopPages style={{marginTop: "40px"}}>
        <TeacherInfoPages borderType="left" onClick={()=> setCurrentPage("page1")} colorActive={currentPage === "page1"}>
        Attandance
        </TeacherInfoPages>
        <TeacherInfoPages $BorderNoSides onClick={() => setCurrentPage("page2")} colorActive={currentPage === "page2"}>
          Individual prices
        </TeacherInfoPages>
        <TeacherInfoPages borderType="right" onClick={() => setCurrentPage("page3")} colorActive={currentPage === "page3"}>
          History
        </TeacherInfoPages>
      </TeachersProfileTopPages>
      { PageState()}
    </GroupProfileContainer>
  );
};

export default GroupProfile;
