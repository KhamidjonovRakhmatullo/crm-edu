import React from "react";
import { Table, TableCell, TableHeader, TableOrderNumber } from "../../styles/materialsStyle";
import { TableText10px } from "../../styles/groupsStd/groupsStyle";

const SmsLogs = () => {

  return (
      <Table $borderRadius>
        <thead>
                <TableHeader $leftBorderRadius></TableHeader>
                <TableHeader>Date</TableHeader>
                <TableHeader>SMS</TableHeader>
                <TableHeader>Reciever</TableHeader>
                <TableHeader $rightBorderRadius>Sender</TableHeader>
        </thead>
        <tbody>
                <TableCell><TableOrderNumber>1</TableOrderNumber></TableCell>
                <TableCell $Font500>2024.06.07 | 00:11</TableCell>
                <TableCell $Color2nd $Font500>lorem ipsum lorem</TableCell>
                <TableCell>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "4px",
                      }}
                    >
                      Adam Smith
                      <TableText10px>010-2002-1001</TableText10px>
                    </div>
                  </TableCell>
                <TableCell $Color2nd $Font500>John Doe</TableCell>
        </tbody>
      </Table>
  );
};

export default SmsLogs;
