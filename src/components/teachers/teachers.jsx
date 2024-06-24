import React from 'react'
import { TeachersContainer, TeachersTopFilters } from '../styles/teachersStd/teachersStyle'
import { InputContainer, InputStyledIcon, SearchIcon, Table, TableAvatarLetter, TableCell, TableHeader, TableNameAndAvatar, TableOrderNumber, TablePhoneNumber, TableTr } from '../styles/materialsStyle'
import { Link } from 'react-router-dom'
import { teacherData } from '../mock/teachersMock/teacherInfoMock'
import AddTeacherModal from './addTeacherModal'
import seachIcon from "../../assets/leadsAssets/search.svg";

const TeachersComponent = () => {
    const data = teacherData.maindata
  return (
    <TeachersContainer>
        <TeachersTopFilters>
        <InputContainer>
          <SearchIcon src={seachIcon} alt="icon" />
          <InputStyledIcon $maxWidth318 type="text" placeholder="Search teacher..." />
        </InputContainer>
       <AddTeacherModal/>
        </TeachersTopFilters>

        <Table>
            <thead>
                <tr>
                    <TableHeader $leftBorderRadius></TableHeader>
                    <TableHeader>Full name</TableHeader>
                    <TableHeader>Phone number</TableHeader>
                    <TableHeader>Groups</TableHeader>
                    <TableHeader>Percent</TableHeader>
                </tr>
            </thead>
            <tbody>
                {data.map((value, key)=> {
                    return(
                        <Link to={`${value.id}`} style={{display: "contents"}}>
                        <TableTr key={key}>
                          <TableCell><TableOrderNumber $minWidth12px></TableOrderNumber></TableCell>
                          <TableCell>
                              <TableNameAndAvatar>
                                  <TableAvatarLetter>
                                    {value.teacher.fullName.split(" ")[0][0]}{value.teacher.fullName.split(" ")[1][0]}
                                  </TableAvatarLetter>
                                  {value.teacher.fullName}
                              </TableNameAndAvatar>
                          </TableCell>
                          <TableCell><TablePhoneNumber>{value.teacher.phoneNumber}</TablePhoneNumber></TableCell>
                          <TableCell $Color2nd>{value.teacher.groups}</TableCell>
                          <TableCell $Color2nd>{value.teacher.percent}</TableCell>
                       </TableTr>
                      </Link>
                    )
                })}
            </tbody>
        </Table>
    </TeachersContainer>
  )
}

export default TeachersComponent