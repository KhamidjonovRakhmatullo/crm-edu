import React from "react";
import {
  Table,
  TableAvatarLetter,
  TableCell,
  TableHeader,
  TableNameAndAvatar,
  TableOrderNumber,
  TableTr,
} from "../../styles/materialsStyle";
import { studentsMock } from "../../mock/studentsMock/studentsMock";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";

const Staff = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const data = studentsMock.maindata;
  return (
    <div>
      <Table $borderRadius>
        <thead>
          <tr>
            <TableHeader $leftBorderRadius></TableHeader>
            <TableHeader>Full name</TableHeader>
            <TableHeader>Phone Number</TableHeader>
            <TableHeader>Role</TableHeader>
            <TableHeader $rightBorderRadius></TableHeader>
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
                <TableCell $Color2nd>{value.table.phoneNumber}</TableCell>
                <TableCell $Font500>Teacher</TableCell>
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
                      sx={{ boxShadow: "unset" }}
                    >
                      <MenuItem onClick={handleClose}>
                        <BorderColorOutlinedIcon
                          sx={{ fontSize: "20px", marginRight: "10px" }}
                        />
                        Edit
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <FilterDramaIcon
                          sx={{ fontSize: "20px", marginRight: "10px" }}
                        />
                        SMS
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
              </TableTr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Staff;
