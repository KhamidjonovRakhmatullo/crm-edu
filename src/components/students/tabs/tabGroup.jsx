import React from "react";
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
} from "../../styles/teachersStd/teachersStyle";
import groupsMock from "../../mock/teachersMock/groupsMock";
import {
  SendButton,
  Table,
  TableCell,
  TableHeader,
  TableOrderNumber,
  TableTr,
} from "../../styles/materialsStyle";
import {
  GroupsBg,
  TabGroupContainer,
} from "../../styles/studentsStd/studentsStyle";

const TabGroup = () => {
  const data = groupsMock.maindata;
  return (
    <div>
      <TabGroupContainer>
        {data.map((value, key) => {
          return (
            <TeacherGroupBox key={key}>
              <TeacherGroupAvatar $marginBottom27>
                {value.groupName[0]}
              </TeacherGroupAvatar>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignContent: "center",
                  gap: "12px",
                }}
              >
                <DivSpaceBetween>
                  <TeacherGroupName $weight2nd>{value.groupName}</TeacherGroupName>
                  <TeacherGroupLabel>Group name</TeacherGroupLabel>
                </DivSpaceBetween>
                <DivSpaceBetween>
                  <TeacherGroupCourse $color2nd>{value.courseType}</TeacherGroupCourse>
                  <TeacherGroupLabel>Course</TeacherGroupLabel>
                </DivSpaceBetween>
                <DivSpaceBetween>
                  <TeacherGroupStartDate>
                    John
                  </TeacherGroupStartDate>
                  <TeacherGroupLabel>Teacher name</TeacherGroupLabel>
                </DivSpaceBetween>
                <DivSpaceBetween>
                  <TeacherGroupStartDate>
                    {value.startedDate} - 2023-09-15
                  </TeacherGroupStartDate>
                  <TeacherGroupLabel>Training dates</TeacherGroupLabel>
                </DivSpaceBetween>
                <DivSpaceBetween>
                  <StudentsRoomWrapper>
                    <TeacherGroupRoom>{value.numberStudents}</TeacherGroupRoom>
                    <TeacherGroupRoom>{value.roomNumber}</TeacherGroupRoom>
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
                    {value.time.from}-{value.time.to}
                  </TeacherGroupName>
                  <TeacherGroupLessonDays>
                    {value.lessonDays}
                  </TeacherGroupLessonDays>
                </TeacherGroupDateWrapper>
                <SendButton $maxWidhtFitContent style={{ padding: "8px 40px" }}>
                  199.00$
                </SendButton>
              </DivSpaceBetween>
            </TeacherGroupBox>
          );
        })}
      </TabGroupContainer>

      <Table $borderRadius style={{marginTop: "40px"}}>
        <thead>
          <tr>
            <TableHeader $leftBorderRadius></TableHeader>
            <TableHeader>Date</TableHeader>
            <TableHeader>Amount</TableHeader>
            <TableHeader>Groups</TableHeader>
            <TableHeader $rightBorderRadius>Receiver</TableHeader>
          </tr>
        </thead>
        <tbody>
          {data.map((value, key) => {
            return (
              <TableTr key={key}>
                <TableCell>
                  <TableOrderNumber>1</TableOrderNumber>
                </TableCell>
                <TableCell $Color2nd $Font500>
                     01.09.2023
                </TableCell>
                <TableCell $Color2nd $Font500>
                  -0$
                </TableCell>
                <TableCell>
                  <GroupsBg>New elementary</GroupsBg>
                </TableCell>
                <TableCell>Emily Johnson</TableCell>
              </TableTr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default TabGroup;
