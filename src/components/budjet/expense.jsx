import React from "react";
import {
  BudjetPrice,
  BudjetTitle,
  IncomeContainer,
} from "../styles/budjetStd/budjetStyle";
import { Table, TableCell, TableHeader, TableOrderNumber } from "../styles/materialsStyle";
import { DivSpaceBetween } from "../styles/teachersStd/teachersStyle";
import ExpenseModal from "./expenseModal";

const Expense = () => {
  return (
    <IncomeContainer>
       <DivSpaceBetween style={{marginBottom: "30px", width: "100%"}}>
       <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <BudjetTitle>Total expense -</BudjetTitle>
        <BudjetPrice>43.340 USD</BudjetPrice>
      </div>
      {/* ///////// */}<ExpenseModal/>
       </DivSpaceBetween>
      <Table $borderRadius>
        <thead>
                <TableHeader $leftBorderRadius></TableHeader>
                <TableHeader $textCenterTH>Date</TableHeader>
                <TableHeader>Amount</TableHeader>
                <TableHeader>Category</TableHeader>
                <TableHeader>Description</TableHeader>
                <TableHeader>Payer</TableHeader>
                <TableHeader>Payment method</TableHeader>
                <TableHeader $rightBorderRadius></TableHeader>
        </thead>
        <tbody>
                <TableCell><TableOrderNumber></TableOrderNumber></TableCell>
                <TableCell $Color2nd $Font500 $TextCenter>2024.06.07</TableCell>
                <TableCell>1.000 <span>USD</span></TableCell>
                <TableCell $Color2nd $Font500>lorem ipsum</TableCell>
                <TableCell $Color2nd $Font500>Lorem Ipsum lorem ipsum</TableCell>
                <TableCell $Color2nd $Font500>Demo Ceo</TableCell>
                <TableCell>CASH</TableCell>
                <TableCell>...</TableCell>
        </tbody>
      </Table>
    </IncomeContainer>
  );
};

export default Expense;
