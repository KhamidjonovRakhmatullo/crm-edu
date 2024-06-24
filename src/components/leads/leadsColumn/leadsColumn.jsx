import React from "react";
import { Table, TableHeader, TableCell, TablePhoneNumber, TableAvatarLetter, TableNameAndAvatar, TableOrderNumber, TableTr  } from "../../styles/materialsStyle";
import { sectionData } from "../../mock/leadMock/sectionData";
import EditTable from "./tableEdit";

const LeadsColumn = () => {
    const data = sectionData.maindata
  return (
    <div style={{width: "100%"}}>
      <Table>
            <thead>
                <tr>
                    <TableHeader $leftBorderRadius></TableHeader>
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
                              <TableAvatarLetter>{value.name.split(" ")[0][0]}{value.name.split(" ")[1][0]}</TableAvatarLetter> 
                                  {value.name}
                              </TableNameAndAvatar>
                          </TableCell>
                          <TableCell><TablePhoneNumber>{value.phoneNumber}</TablePhoneNumber></TableCell>
                          <TableCell>{value.fromWhere}</TableCell>
                          <TableCell>{value.level}</TableCell>
                          <TableCell><EditTable/></TableCell>
                       </TableTr>
                    )
                })}
            </tbody>
        </Table>
    </div>
  );
};

export default LeadsColumn;
