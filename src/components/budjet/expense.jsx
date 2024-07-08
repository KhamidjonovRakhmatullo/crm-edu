import React from "react";
import {
  BudjetPrice,
  BudjetTitle,
  IncomeContainer,
} from "../styles/budjetStd/budjetStyle";
import { Table, TableCell, TableHeader, TableOrderNumber } from "../styles/materialsStyle";
import { DivSpaceBetween } from "../styles/teachersStd/teachersStyle";
import ExpenseModal from "./expenseModal";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Expense = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
                <TableCell>
                <div>
                <div
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <MoreVertIcon sx={{ color: "#BFBAE3" }} />
                </div>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleClose}>
                    <BorderColorOutlinedIcon
                      sx={{ fontSize: "20px", marginRight: "10px" }}
                    />
                    Edit
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <DeleteOutlineOutlinedIcon
                      sx={{ fontSize: "20px", marginRight: "10px" }}
                    />
                    Delete
                  </MenuItem>
                </Menu>
              </div>
                </TableCell>
        </tbody>
      </Table>
    </IncomeContainer>
  );
};

export default Expense;
