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
  ///////
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
        <TeacherInfoPages onClick={handleOpenIncome} borderType="left" colorActive={active}>
          Income
        </TeacherInfoPages>
        <TeacherInfoPages onClick={handleOpenExpense} borderType="right" colorActive={!active}>
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
                      {value.income.teacherSalary || "no data"}, USD
                  </TableCell>
                  <TableCell $Color2nd $TextCenter>{value.income.group || "no data"}</TableCell>
                  <TableCell $Color2nd $TextCenter>{value.income.student || "no data"}</TableCell>
                  <TableCell $Color2nd>
                    <TablePhoneNumber $justifyCenter>
                      {value.income.attendDate || "no data"}
                      <br />
                      {value.income.paymentDate || "no data"}
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
                    {value.expense.amount || "no data"}, USD
                </TableCell>
                <TableCell $Color2nd $TextCenter>{value.expense.category || "no data"}</TableCell>
                <TableCell $Color2nd $TextCenter>{value.expense.description || "no data"}</TableCell>
                <TableCell $Color2nd>
                  <TablePhoneNumber $justifyCenter>{value.expense.date || "no data"}</TablePhoneNumber>
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
