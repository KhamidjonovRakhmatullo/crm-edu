import React from "react";
import { FromWhere, TextAndNumber } from "../../styles/leadsStd/leadStyle";
import {
  AccorditionWrap,
  AddButton,
  BoxTitle,
} from "../../styles/materialsStyle";
import EditMenu from "./editMenu";
import SubjectAccordition from "./subjectAccordition";
import { fromWhereData } from "../../mock/leadMock/fromWhereData";

const LeadsGrid = () => {
  const data = fromWhereData.maindata;
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <FromWhere>
        <BoxTitle>From where</BoxTitle>
        <AddButton>+</AddButton>
        {data.map((value, key) => {
          return (
            <AccorditionWrap key={key}>
              <TextAndNumber>
                {value.name}
                <p>{value.number}</p>
              </TextAndNumber>
              <EditMenu />
            </AccorditionWrap>
          );
        })}
      </FromWhere>
      {/* Sentions */}
      <FromWhere>
        <BoxTitle>Sections</BoxTitle>
        <AddButton>+</AddButton>
        <SubjectAccordition />
      </FromWhere>
    </div>
  );
};

export default LeadsGrid;
