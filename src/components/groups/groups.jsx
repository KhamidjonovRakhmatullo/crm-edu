import React from "react";
import {
  TeachersContainer,
  TeachersTopFilters,
} from "../styles/teachersStd/teachersStyle";
import {
  InputContainer,
  InputStyledIcon,
  ResetButton,
  SearchIcon,
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
import seachIcon from "../../assets/leadsAssets/search.svg";
import resetIcon from "../../assets/leadsAssets/reset.svg";

const GroupsComponent = () => {
  const data = groupMock.maindata;
  return (
    <TeachersContainer>
    
      <TeachersTopFilters>
      <div style={{display: "flex", gap: "6px"}}>
      <InputContainer>
          <SearchIcon src={seachIcon} alt="icon" />
          <InputStyledIcon $maxWidth170 type="text" placeholder="Search teacher..." />
        </InputContainer>
        <InputContainer>
          <SearchIcon src={seachIcon} alt="icon" />
          <InputStyledIcon $maxWidth170 type="text" placeholder="Search teacher..." />
        </InputContainer>
        <InputContainer>
          <SearchIcon src={seachIcon} alt="icon" />
          <InputStyledIcon $maxWidth170 type="text" placeholder="Search teacher..." />
        </InputContainer>
        <ResetButton>
          <img src={resetIcon} alt="icon" />
          Reset filter
        </ResetButton>
      </div>
        <AddNewGroupModal />
      </TeachersTopFilters>

      <Table $borderRadius>
        <thead>
          <tr>
            <TableHeader $leftBorderRadius></TableHeader>
            <TableHeader>Group name</TableHeader>
            <TableHeader>Course</TableHeader>
            <TableHeader>Teacher</TableHeader>
            <TableHeader>Days</TableHeader>
            <TableHeader $textCenterTH>Room</TableHeader>
            <TableHeader $textCenterTH $rightBorderRadius>Students</TableHeader>
          </tr>
        </thead>
        <tbody>
          {data.map((value, key) => {
            return (
              <Link to={`${value.id}`} style={{ display: "contents" }}>
                <TableTr key={key}>
                  <TableCell>
                    <TableOrderNumber>{value.id || "no data"}</TableOrderNumber>
                  </TableCell>
                  <TableCell>
                    <TableNameAndAvatar>
                      <TableAvatarLetter>
                        {value.group.groupName.split(" ")[0][0]}
                      </TableAvatarLetter>
                      {value.group.groupName || "no data"}
                    </TableNameAndAvatar>
                  </TableCell>
                  <TableCell $Color2nd $Font500>{value.group.course || "no data"}</TableCell>
                  <TableCell> {value.group.teacher || "no data"}</TableCell>
                  <TableCell>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "4px",
                      }}
                    >
                      {value.group.startTime} - {value.group.endTime || "no data"}
                      <TableText10px>{value.group.days || "no data"}</TableText10px>
                    </div>
                  </TableCell>
                  <TableCell $TextCenter>{value.group.room || "no data"}</TableCell>
                  <TableCell $TextCenter>{value.group.students || "no data"}</TableCell>
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
