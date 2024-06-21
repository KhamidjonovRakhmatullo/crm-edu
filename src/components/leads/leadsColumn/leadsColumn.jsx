import React from "react";
import { Table, TableHeader, TableCell, TablePhoneNumber, TableAvatarLetter, TableNameAndAvatar, TableOrderNumber, TableTr  } from "../../styles/materialsStyle";
import EditMenu from "../leadsGrid/editMenu";
import { sectionData } from "../../mock/leadMock/sectionData";

const LeadsColumn = () => {
    const data = sectionData.maindata
  return (
    <div style={{width: "100%"}}>
      <Table>
            <thead>
                <tr>
                    <TableHeader></TableHeader>
                    <TableHeader>Lead name</TableHeader>
                    <TableHeader>Phone number</TableHeader>
                    <TableHeader>From where</TableHeader>
                    <TableHeader>Section</TableHeader>
                    <TableHeader></TableHeader>
                </tr>
            </thead>
            <tbody>
                {data.map((value, key)=> {
                    return(
                        <TableTr key={key}>
                          <TableCell><TableOrderNumber>{value.id}</TableOrderNumber></TableCell>
                          <TableCell>
                              <TableNameAndAvatar>
                                  <TableAvatarLetter>{value.name[0]}</TableAvatarLetter> 
                                  {value.name}
                              </TableNameAndAvatar>
                          </TableCell>
                          <TableCell><TablePhoneNumber>{value.phoneNumber}</TablePhoneNumber></TableCell>
                          <TableCell>{value.fromWhere}</TableCell>
                          <TableCell>{value.level}</TableCell>
                          <TableCell><EditMenu/></TableCell>
                       </TableTr>
                    )
                })}
            </tbody>
        </Table>
    </div>
  );
};

export default LeadsColumn;
