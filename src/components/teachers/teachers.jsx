import React from 'react'
import { TeachersContainer, TeachersTopFilters } from '../styles/teachersStd/teachersStyle'
import { InputStyled, SendButton, Table, TableAvatarLetter, TableCell, TableHeader, TableNameAndAvatar, TableOrderNumber, TablePhoneNumber, TableTr } from '../styles/materialsStyle'
import { Link } from 'react-router-dom'
import { teacherData } from '../mock/teachersMock/teacherInfoMock'

const TeachersComponent = () => {
    const data = teacherData.maindata
  return (
    <TeachersContainer>
        <TeachersTopFilters>
        <InputStyled $maxWidth318px type="search" placeholder="Serch student"></InputStyled>
        <SendButton $maxWidhtFitContent>+ Add teacher</SendButton>
        </TeachersTopFilters>

        <Table>
            <thead>
                <tr>
                    <TableHeader></TableHeader>
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
                                  <TableAvatarLetter>{value.teacher.fullName[0]}</TableAvatarLetter> 
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