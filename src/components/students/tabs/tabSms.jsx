import React from "react";
import {
  Table,
  TableCell,
  TableHeader,
  TableOrderNumber,
  TableTr,
} from "../../styles/materialsStyle";


const TabSms = () => {
  return (
    <div>
      <Table $borderRadius>
        <thead>
          <tr>
            <TableHeader $leftBorderRadius></TableHeader>
            <TableHeader>SMS</TableHeader>
            <TableHeader>Sender</TableHeader>
            <TableHeader $textCenterTH $rightBorderRadius>Date</TableHeader>
          </tr>
        </thead>
        <tbody>
          <TableTr>
            <TableCell>
              <TableOrderNumber $Color2nd>1</TableOrderNumber>
            </TableCell>
            <TableCell $Font400>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </TableCell>
            <TableCell $Color2nd $Font400>
               John Doe
            </TableCell>
            <TableCell $Color2nd $Font400 $TextCenter>
              05.31.2024 | 21:32
            </TableCell>
          </TableTr>
        </tbody>
      </Table>
    </div>
  );
};

export default TabSms;
