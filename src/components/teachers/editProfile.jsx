import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FilterDramaIcon from "@mui/icons-material/FilterDrama";

export default function EditProfile() {
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
      <div
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MoreVertIcon sx={{color:"#2C2669"}}/>
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
            <BorderColorOutlinedIcon sx={{fontSize: "20px", marginRight: "10px"}}/> 
            Edit
        </MenuItem>
        <MenuItem onClick={handleClose}>
            <FilterDramaIcon sx={{fontSize: "20px", marginRight: "10px"}}/> 
            SMS
        </MenuItem>
        <MenuItem onClick={handleClose}>
            <DeleteOutlineOutlinedIcon sx={{fontSize: "20px", marginRight: "10px"}}/> 
            Delete
        </MenuItem>
      </Menu>
    </div>
  );
}
