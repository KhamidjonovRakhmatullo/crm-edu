import React from "react";
import {
  GridAndColumnWrap,
  LeadBody,
  LeadContainer,
  LeadTopFilter,
} from "../styles/leadsStd/leadStyle";
import {
  InputStyled,
  SendButton,
} from "../styles/materialsStyle";
import LeadsGrid from "./leadsGrid/leadsGrid";

const LeadsComponent = () => {
  return (
    <LeadContainer>
      <LeadTopFilter>
        <GridAndColumnWrap>
          <div>G</div>
          <div>C</div>
        </GridAndColumnWrap>
        <InputStyled type="search" placeholder="Serch student"></InputStyled>
        <InputStyled type="search" placeholder="Serch student"></InputStyled>
        <InputStyled type="search" placeholder="Serch student"></InputStyled>
        <InputStyled type="search" placeholder="Serch student"></InputStyled>
        <SendButton>+ Add lead</SendButton>
      </LeadTopFilter>

      <LeadBody>
        {/* From Where and Sections*/}
        <LeadsGrid/>
      </LeadBody>
    </LeadContainer>
  );
};

export default LeadsComponent;
