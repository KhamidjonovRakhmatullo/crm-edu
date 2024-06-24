import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TableSmsModal from './TableSmsModal';
import TableAddGroupModal from './tableAddGroupModal';

export default function EditTable() {
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
        <MoreVertIcon sx={{color:"#BFBAE3"}}/>
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
            <DeleteOutlineOutlinedIcon sx={{fontSize: "20px", marginRight: "10px"}}/> 
            Delete
        </MenuItem>
        {/* //// */}
        <TableSmsModal onClick={handleClose}/>
        {/* //// */}
        <TableAddGroupModal onClick={handleClose}/>
      </Menu>
    </div>
  );
}
