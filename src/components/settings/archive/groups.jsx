import React from "react";
import {
  Table,
  TableAvatarLetter,
  TableCell,
  TableEditButton,
  TableHeader,
  TableNameAndAvatar,
  TableOrderNumber,
  TableTr,
} from "../../styles/materialsStyle";
import { studentsMock } from "../../mock/studentsMock/studentsMock";
import refresh from '../../../assets/settingsAssets/refresh.svg';
import deleteIcon from '../../../assets/budjetAssets/trash.svg';

const Groups = () => {
  const data = studentsMock.maindata;
  return (
    <div>
      <Table $borderRadius>
        <thead>
          <tr>
            <TableHeader $leftBorderRadius></TableHeader>
            <TableHeader>Group name</TableHeader>
            <TableHeader>Course</TableHeader>
            <TableHeader>Teacher</TableHeader>
            <TableHeader $textCenterTH>Date</TableHeader>
            <TableHeader $rightBorderRadius>Action</TableHeader>
          </tr>
        </thead>
        <tbody>
          {data.map((value, key) => {
            return (
              <TableTr key={key}>
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
                <TableCell $Color2nd $Font500>{value.table.course}</TableCell>
                <TableCell $Font500>{value.table.teacher}</TableCell>
                <TableCell $TextCenter>24.02.2024 | 06.06.2024</TableCell>
                <TableCell>
                <div style={{display: "flex", gap: "20px"}}>
                        <TableEditButton>
                            <img src={refresh} alt="icon" />
                        </TableEditButton>
                        <TableEditButton $colorRed>
                            <img src={deleteIcon} alt="icon" />
                        </TableEditButton>
                    </div>
                </TableCell>
              </TableTr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Groups;
