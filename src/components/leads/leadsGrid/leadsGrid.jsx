import React from 'react'
import { FromWhere, TextAndNumber } from '../../styles/leadsStd/leadStyle'
import { AccorditionWrap, AddButton, BoxTitle } from '../../styles/materialsStyle'
import EditMenu from './editMenu'
import SubjectAccordition from './subjectAccordition'

const LeadsGrid = () => {
  return (
    <div style={{display: 'flex', gap: '20px'}}>
          <FromWhere>
          <BoxTitle>From where</BoxTitle>
          <AddButton>+</AddButton>

          <AccorditionWrap>
            <TextAndNumber>
              Telegram
              <p>30</p>
            </TextAndNumber>
            <EditMenu />
          </AccorditionWrap>

          <AccorditionWrap>
            <TextAndNumber>
              Walked by
              <p>12</p>
            </TextAndNumber>
            <EditMenu />
          </AccorditionWrap>

          <AccorditionWrap>
            <TextAndNumber>
              Friends
              <p>3</p>
            </TextAndNumber>
            <EditMenu />
          </AccorditionWrap>
        </FromWhere>
         {/* Sentions */}
         <FromWhere>
            <BoxTitle>Sections</BoxTitle>
            <AddButton>+</AddButton>
            <SubjectAccordition/>
        </FromWhere>
    </div>
  )
}

export default LeadsGrid