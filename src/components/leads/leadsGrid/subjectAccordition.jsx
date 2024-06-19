import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  SubStudentWrapper,
  NumberSubject,
  TextSubject,
  SubStudentAvatar,
  SubStudentLeft,
  SubStudentName,
  StudentNameAndNumber,
  SubStudentNumber,
  SubStudentRight,
} from "../../styles/leadsStd/leadStyle";
import EditMenu from "./editMenu";

const SubjectAccordition = () => {
  return (
    <div>
      <Accordion
        sx={{
          border: "1px solid #BFBAE3",
          boxShadow: "unset",
          minHeight: "64px",
          padding: "0px 14px 14px 14px",
          // display: "flex",
          // flexDirection: "column",
          // justifyContent: "center",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color:"#BFBAE3"}}/>}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{ border: "0px solid red", padding: "0px" }}
        >
          <TextSubject>
            Elementry <NumberSubject>30</NumberSubject>
          </TextSubject>
        </AccordionSummary>
        <SubStudentWrapper>
          <SubStudentLeft>
            <SubStudentAvatar>B</SubStudentAvatar>
            <StudentNameAndNumber>
              <SubStudentName>Shamsiddin Shoraximov</SubStudentName>
              <SubStudentNumber>010-1111-2222</SubStudentNumber>
            </StudentNameAndNumber>
          </SubStudentLeft>
          <SubStudentRight>
            <div>!</div>
            <EditMenu />
          </SubStudentRight>
        </SubStudentWrapper>
      </Accordion>
    </div>
  );
};

export default SubjectAccordition;
