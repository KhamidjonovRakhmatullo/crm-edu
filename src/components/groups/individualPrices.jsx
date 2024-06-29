import React from "react";
import {
  ActiveBox,
  PercentageBox,
  Table,
  TableCell,
  TableHeadWrapper,
  TableHeader,
  TableOrderNumber,
  TablePhoneNumber,
  TableTr,
} from "../styles/materialsStyle";
import { groupMock } from "../mock/groupsMock/groupsTableMock";
import { PencilBox, ShowAllButton } from "../styles/groupsStd/groupsStyle";
import showAll from "../../assets/groupsAssets/filter.svg";
import pencil from "../../assets/groupsAssets/pencil.svg";

const IndividualPrices = () => {
  const data = groupMock.maindata;
  return (
    <div>
      <TableHeadWrapper>
        <ShowAllButton>
          <img src={showAll} alt="icon" />
          Show all
        </ShowAllButton>
      </TableHeadWrapper>
      <Table>
        <thead>
          <tr>
            <TableHeader></TableHeader>
            <TableHeader>FULL NAME</TableHeader>
            <TableHeader $textCenterTH>PHONE NUMBER</TableHeader>
            <TableHeader $textCenterTH>INDIVIDUAL DISCOUNT</TableHeader>
            <TableHeader $textCenterTH>COMMENTS</TableHeader>
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
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "start",
                      gap: "3px",
                    }}
                  >
                    {value.group.teacher || "no data"}
                    <ActiveBox>ACTIVE</ActiveBox>
                  </div>
                </TableCell>
                <TableCell $TextCenter $Color2nd>
                  010-0000-0000
                </TableCell>
                <TableCell $TextCenter>
                  <TablePhoneNumber $justifyCenter>
                    <ActiveBox>100.000</ActiveBox>
                    <PercentageBox>+50%</PercentageBox>
                    <PencilBox><img src={pencil} alt="icon" /></PencilBox>
                  </TablePhoneNumber>
                </TableCell>
                <TableCell $TextCenter>Lorem ipsum</TableCell>
              </TableTr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default IndividualPrices;
