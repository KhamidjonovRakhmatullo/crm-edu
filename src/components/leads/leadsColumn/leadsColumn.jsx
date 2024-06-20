import React from "react";
import { Table, TableHeader, TableCell, LeadPhoneNumber, LeadName, LeadNameAndAvatar, LeadsOrderNumber  } from "../../styles/leadsStd/leadStyle";
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
                        <tr key={key}>
                          <TableCell><LeadsOrderNumber>{value.id}</LeadsOrderNumber></TableCell>
                          <TableCell>
                              <LeadNameAndAvatar>
                                  <LeadName>{value.name[0]}</LeadName> 
                                  {value.name}
                              </LeadNameAndAvatar>
                          </TableCell>
                          <TableCell><LeadPhoneNumber>{value.phoneNumber}</LeadPhoneNumber></TableCell>
                          <TableCell>{value.fromWhere}</TableCell>
                          <TableCell>{value.level}</TableCell>
                          <TableCell><EditMenu/></TableCell>
                       </tr>
                    )
                })}
            </tbody>
        </Table>
    </div>
  );
};

export default LeadsColumn;
