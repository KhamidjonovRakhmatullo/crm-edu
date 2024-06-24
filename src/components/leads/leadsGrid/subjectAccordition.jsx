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
  SubjectTextAndEdit,
} from "../../styles/leadsStd/leadStyle";
import EditMenu from "./editMenu";
import { sectionData } from "../../mock/leadMock/sectionData";
import LeadInfoModal from "./leadInfoModal";
import EditTable from "../leadsColumn/tableEdit";

const SubjectAccordition = () => {
  const data = sectionData.maindata
  return (
    <div>
      <Accordion
        sx={{
          border: "1px solid #BFBAE3",
          boxShadow: "unset",
          minHeight: "64px",
          padding: "0px 14px 4px 14px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          // maxHeight: "300px",
          // overflow: "scroll",
        }}
      >
        <AccordionSummary
          // expandIcon={}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{padding: "0px"}}
        >
          <SubjectTextAndEdit>
          <TextSubject>
            Elementry <NumberSubject>{data.length}</NumberSubject>
          </TextSubject>
          <div style={{display: "flex"}}>
          <ExpandMoreIcon sx={{color:"#BFBAE3"}}/>
          <EditMenu />
          </div>
          </SubjectTextAndEdit>
        </AccordionSummary>
       
        {data.map((value, key)=> {
          return(
            <SubStudentWrapper>
            <SubStudentLeft>
              <SubStudentAvatar>{value.name[0]}</SubStudentAvatar>
              {/* {value.name.split(" ")[0][0]}{value.name.split(" ")[1][0]} */}
              <StudentNameAndNumber>
                <SubStudentName>{value.name}</SubStudentName>
                <SubStudentNumber>{value.phoneNumber}</SubStudentNumber>
              </StudentNameAndNumber>
            </SubStudentLeft>
            <SubStudentRight>
              <div><LeadInfoModal data={value}/></div>
              <EditTable />
            </SubStudentRight>
          </SubStudentWrapper>
          )
        })}
      </Accordion>
      
    </div>
  );
};

export default SubjectAccordition;
