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

const Leads = () => {
  const data = studentsMock.maindata;
  return (
    <div>
      <Table $borderRadius>
        <thead>
          <tr>
            <TableHeader $leftBorderRadius></TableHeader>
            <TableHeader>Name</TableHeader>
            <TableHeader>Phone number</TableHeader>
            <TableHeader>Created at</TableHeader>
            <TableHeader>Description</TableHeader>
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
                <TableCell $Color2nd $Font500>{value.table.phoneNumber}</TableCell>
                <TableCell $Font500>{value.profile.addDate}</TableCell>
                <TableCell $Font500>Lorem ipsum dolor sit.</TableCell>
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

export default Leads;
