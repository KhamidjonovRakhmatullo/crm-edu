import React from "react";
import {
  TeachersContainer,
  TeachersTopFilters,
} from "../styles/teachersStd/teachersStyle";
import {
  Table,
  TableAvatarLetter,
  TableCell,
  TableHeader,
  TableNameAndAvatar,
  TableOrderNumber,
  TableTr,
} from "../styles/materialsStyle";
import { Link } from "react-router-dom";
// import AddTeacherModal from '../addTeacherModal'
import { groupMock } from "../mock/groupsMock/groupsTableMock";
import { TableText10px } from "../styles/groupsStd/groupsStyle";
import AddNewGroupModal from "./addNewGroupModal";

const GroupsComponent = () => {
  const data = groupMock.maindata;
  return (
    <TeachersContainer>
      <TeachersTopFilters>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <AddNewGroupModal />
      </TeachersTopFilters>

      <Table>
        <thead>
          <tr>
            <TableHeader $leftBorderRadius></TableHeader>
            <TableHeader>Group name</TableHeader>
            <TableHeader>Course</TableHeader>
            <TableHeader>Teacher</TableHeader>
            <TableHeader>Days</TableHeader>
            <TableHeader $textCenterTH>Room</TableHeader>
            <TableHeader $textCenterTH>Students</TableHeader>
          </tr>
        </thead>
        <tbody>
          {data.map((value, key) => {
            return (
              <Link to={`${value.id}`} style={{ display: "contents" }}>
                <TableTr key={key}>
                  <TableCell>
                    <TableOrderNumber>{value.group.id}</TableOrderNumber>
                  </TableCell>
                  <TableCell>
                    <TableNameAndAvatar>
                      <TableAvatarLetter>
                        {value.group.groupName.split(" ")[0][0]}
                      </TableAvatarLetter>
                      {value.group.groupName}
                    </TableNameAndAvatar>
                  </TableCell>
                  <TableCell $Color2nd>{value.group.course}</TableCell>
                  <TableCell> {value.group.teacher}</TableCell>
                  <TableCell>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "4px",
                      }}
                    >
                      {value.group.startTime} - {value.group.endTime}
                      <TableText10px>{value.group.days}</TableText10px>
                    </div>
                  </TableCell>
                  <TableCell $TextCenter>{value.group.room}</TableCell>
                  <TableCell $TextCenter>{value.group.students}</TableCell>
                </TableTr>
              </Link>
            );
          })}
        </tbody>
      </Table>
    </TeachersContainer>
  );
};

export default GroupsComponent;
