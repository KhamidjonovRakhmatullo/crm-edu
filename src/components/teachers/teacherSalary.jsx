import React, { useState } from "react";
import {
  TeacherInfoPages,
  TeachersProfileTopPages,
} from "../styles/teachersStd/teachersStyle";
import {
  Table,
  TableCell,
  TableHeader,
  TablePhoneNumber,
  TableTr,
} from "../styles/materialsStyle";
import { SalaryMockData } from "../mock/teachersMock/salaryMock";

const data = SalaryMockData.maindata;

const TeacherSalary = () => {
  const [active, setActive] = useState(true);

  const handleOpenIncome = () => {
    setActive(true);
  };
  const handleOpenExpense = () => {
    setActive(false);
  };
  return (
    <div>
      <TeachersProfileTopPages>
        <TeacherInfoPages onClick={handleOpenIncome} borderType="left">
          Income
        </TeacherInfoPages>
        <TeacherInfoPages onClick={handleOpenExpense} borderType="right">
          Expense
        </TeacherInfoPages>
      </TeachersProfileTopPages>
      {/* ///// */}
      {active ? (
        //////////////////////////Income
        <Table>
          <thead>
            <tr>
              <TableHeader $textCenterTH $leftBorderRadius>Teacher salary</TableHeader>
              <TableHeader $textCenterTH>Groups</TableHeader>
              <TableHeader $textCenterTH>Student</TableHeader>
              <TableHeader $textCenterTH>
                Attend date <br /> Payment date
              </TableHeader>
            </tr>
          </thead>
          <tbody>
            {data.map((value, key) => {
              return (
                <TableTr key={key}>
                  <TableCell $TextCenter>
                      {value.income.teacherSalary}, USD
                  </TableCell>
                  <TableCell $Color2nd $TextCenter>{value.income.group}</TableCell>
                  <TableCell $Color2nd $TextCenter>{value.income.student}</TableCell>
                  <TableCell $Color2nd>
                    <TablePhoneNumber $justifyCenter>
                      {value.income.attendDate}
                      <br />
                      {value.income.paymentDate}
                    </TablePhoneNumber>
                  </TableCell>
                </TableTr>
              );
            })}
          </tbody>
        </Table>
      ) : (
     ////////////////////////////Expense
        <Table>
        <thead>
          <tr>
            <TableHeader $textCenterTH $leftBorderRadius>Amount</TableHeader>
            <TableHeader $textCenterTH>Category</TableHeader>
            <TableHeader $textCenterTH>Description</TableHeader>
            <TableHeader $textCenterTH>Date</TableHeader>
          </tr>
        </thead>
        <tbody>
          {data.map((value, key) => {
            return (
              <TableTr key={key}>
                <TableCell $TextCenter>
                    {value.expense.amount}, USD
                </TableCell>
                <TableCell $Color2nd $TextCenter>{value.expense.category}</TableCell>
                <TableCell $Color2nd $TextCenter>{value.expense.description}</TableCell>
                <TableCell $Color2nd>
                  <TablePhoneNumber $justifyCenter>{value.expense.date}</TablePhoneNumber>
                </TableCell>
              </TableTr>
            );
          })}
        </tbody>
      </Table>
      )}
    </div>
  );
};

export default TeacherSalary;
