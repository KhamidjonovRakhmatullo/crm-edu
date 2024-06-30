import React from "react";
import {
  TeachersContainer,
  TeachersTopFilters,
} from "../styles/teachersStd/teachersStyle";
import {
  InputContainer,
  InputStyledIcon,
  SearchIcon,
  Table,
  TableAvatarLetter,
  TableCell,
  TableHeader,
  TableNameAndAvatar,
  TableOrderNumber,
  TablePhoneNumber,
  TableTr,
} from "../styles/materialsStyle";
import { Link } from "react-router-dom";
import AddNewStudentModal from "./addNewStudentModal";
import { GroupsBg } from "../styles/studentsStd/studentsStyle";
import EditTable from "./tableEdit/tableEdit";
import seachIcon from "../../assets/leadsAssets/search.svg";
import { studentsMock } from "../mock/studentsMock/studentsMock";
// import resetIcon from "../../assets/leadsAssets/reset.svg";

const StudentsComponent = () => {
  const data = studentsMock.maindata;
  return (
    <TeachersContainer>
      <TeachersTopFilters>
      <InputContainer>
          <SearchIcon src={seachIcon} alt="icon" />
          <InputStyledIcon $maxWidth318 type="text" placeholder="Search teacher..." />
      </InputContainer>
        {/* <ResetButton $maxWidth100px>
          <img src={resetIcon} alt="icon" />
          Reset filter
        </ResetButton> */}
        <AddNewStudentModal />
      </TeachersTopFilters>
      

      <Table $borderRadius>
        <thead>
          <tr>
            <TableHeader $leftBorderRadius></TableHeader>
            <TableHeader>Full name</TableHeader>
            <TableHeader>Phone Number</TableHeader>
            <TableHeader>Groups</TableHeader>
            <TableHeader>Courses</TableHeader>
            <TableHeader>Teachers</TableHeader>
            <TableHeader $rightBorderRadius></TableHeader>
          </tr>
        </thead>
        <tbody>
          {data.map((value, key) => {
            return (
                <TableTr key={key}>
                   <Link to={`${value.id}`} style={{ display: "contents" }}>
                  <TableCell>
                    <TableOrderNumber>{value.id || "no data"}</TableOrderNumber>
                  </TableCell>
                  <TableCell>
                    <TableNameAndAvatar>
                      <TableAvatarLetter>
                        {value.table.fullName.split(" ")[0][0]}
                      </TableAvatarLetter>
                      {value.table.fullName || "no data"}
                    </TableNameAndAvatar>
                  </TableCell>
                  <TableCell><TablePhoneNumber>{value.table.phoneNumber}</TablePhoneNumber></TableCell>
                  <TableCell><GroupsBg>{value.table.group}</GroupsBg></TableCell>
                  <TableCell $Color2nd $Font500> {value.table.course}</TableCell>
                  <TableCell>{value.table.teacher || "no data"}</TableCell>
                  </Link>
                  <TableCell><EditTable/></TableCell>
                </TableTr>
            );
          })}
        </tbody>
      </Table>

      <div style={{ border :"0px solid red", display: "flex", justifyContent: "end", alignItems: 'center', gap :"20px", marginTop: "20px"}}> 
      
      <select name="" id="" style={{
        border: "1px solid #2C2669", 
        padding: '10px 10px', 
        backgroundColor: "transparent", 
        borderRadius: "6px"
        }}>
        <option value="adw">25 per page</option>
        <option value="adw">30 per page</option>
        <option value="adw">40 per page</option>
      </select>
      </div>
    </TeachersContainer>
  );
};

export default StudentsComponent;
