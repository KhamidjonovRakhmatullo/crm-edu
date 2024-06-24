import * as React from "react";
import Menu from "@mui/material/Menu";
import infoIcon from "../../../assets/leadsAssets/infoIcon.svg";
import { DivSpaceBetween, TeacherGroupLabel, TeacherGroupStartDate } from "../../styles/teachersStd/teachersStyle";

export default function LeadInfoModal({ data }) {
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
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      >
        <img src={infoIcon} alt="icon" />
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
        <div style={{width: "340px", padding: "8px 16px",display: "flex", flexDirection: "column", gap: '10px' }}>
          <DivSpaceBetween>
            <TeacherGroupStartDate style={{fontWeight: "700", fontSize: "15px"}}>{data.name}</TeacherGroupStartDate>
            <TeacherGroupLabel>Full name</TeacherGroupLabel>
          </DivSpaceBetween>
          <DivSpaceBetween>
            <TeacherGroupStartDate style={{fontWeight: "700", fontSize: "15px"}}>{data.phoneNumber}</TeacherGroupStartDate>
            <TeacherGroupLabel>Phone number</TeacherGroupLabel>
          </DivSpaceBetween>
          <DivSpaceBetween>
            <TeacherGroupStartDate style={{fontWeight: "700", fontSize: "15px"}}>00.00.0000</TeacherGroupStartDate>
            <TeacherGroupLabel>Updated</TeacherGroupLabel>
          </DivSpaceBetween>
        </div>
      </Menu>
    </div>
  );
}
