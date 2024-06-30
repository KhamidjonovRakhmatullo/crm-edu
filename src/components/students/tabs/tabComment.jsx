import React from "react";
import {
  Table,
  TableCell,
  TableHeader,
  TableOrderNumber,
  TableTr,
} from "../../styles/materialsStyle";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const TabComment = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Table $borderRadius>
        <thead>
          <tr>
            <TableHeader $leftBorderRadius></TableHeader>
            <TableHeader>Comment</TableHeader>
            <TableHeader>Creator</TableHeader>
            <TableHeader $textCenterTH>Date</TableHeader>
            <TableHeader $rightBorderRadius></TableHeader>
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
              Aliyev Ali
            </TableCell>
            <TableCell $Color2nd $Font400 $TextCenter>
              05.31.2024 | 21:32
            </TableCell>
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
          </TableTr>
        </tbody>
      </Table>
    </div>
  );
};

export default TabComment;
