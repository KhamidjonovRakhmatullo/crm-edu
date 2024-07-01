import React from "react";
import {
  BudjetPrice,
  BudjetTitle,
  IncomeContainer,
} from "../styles/budjetStd/budjetStyle";
import { Table, TableAvatarLetter, TableCell, TableHeader, TableNameAndAvatar, TableOrderNumber } from "../styles/materialsStyle";

const Income = () => {
  return (
    <IncomeContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          marginBottom: "30px"
        }}
      >
        <BudjetTitle>Total income -</BudjetTitle>
        <BudjetPrice>20.000 USD</BudjetPrice>
      </div>
       
      <Table $borderRadius>
        <thead>
                <TableHeader $leftBorderRadius></TableHeader>
                <TableHeader>Full name</TableHeader>
                <TableHeader $textCenterTH>Date</TableHeader>
                <TableHeader>Amount</TableHeader>
                <TableHeader>Group</TableHeader>
                <TableHeader>Payer</TableHeader>
                <TableHeader $rightBorderRadius>Payment method</TableHeader>
        </thead>
        <tbody>
                <TableCell><TableOrderNumber></TableOrderNumber></TableCell>
                <TableCell>
                    <TableNameAndAvatar>
                        <TableAvatarLetter>A</TableAvatarLetter>
                        Ceo Demo
                    </TableNameAndAvatar>
                </TableCell>
                <TableCell $Color2nd $Font500 $TextCenter>2024.06.07</TableCell>
                <TableCell>1.000 <span>USD</span></TableCell>
                <TableCell $Color2nd $Font500>New elementary</TableCell>
                <TableCell $Color2nd $Font500>Demo Ceo</TableCell>
                <TableCell>CASH</TableCell>
        </tbody>
      </Table>
    </IncomeContainer>
  );
};

export default Income;
