import React, { useState } from 'react'
import { OfficeContainer } from '../../styles/settingsStd/officeStyle'
import { TeacherInfoPages, TeachersProfileTopPages } from '../../styles/teachersStd/teachersStyle'
import Courses from './courses'
import CourseModal from './modals/courseModal'
import Rooms from './rooms'
import RoomModal from './modals/roomModal'
import SmsLogs from './smsLogs'
import SmsTemplates from './smsTemplates'
import SmsTemplateModal from './modals/smsTemplateModal'

const OfficeComponent = () => {
  const [currentPage, setCurrentPage] = useState('page1')

  function PageState () {
     const pages ={
      page1: <Courses/>,
      page2: <Rooms/>,
      page3: <SmsTemplates/>,
      page4: <SmsLogs/>,
     }
     return pages[currentPage]
  }
  function ModalState(){
    const pages={
        page1: <CourseModal/>,
        page2: <RoomModal/>,
        page3: <SmsTemplateModal/>,
        // page4: "D"
    }
    return pages[currentPage]
}
  return (
    <OfficeContainer>
       <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px"}}>
         <TeachersProfileTopPages $width100 $marginBottom0>
               <TeacherInfoPages borderType="left" onClick={()=> setCurrentPage("page1")} colorActive={currentPage === "page1"}>
                 Courses
               </TeacherInfoPages>
               <TeacherInfoPages $BorderRightSide onClick={()=> setCurrentPage("page2")} colorActive={currentPage === "page2"}>
                 Rooms
               </TeacherInfoPages>
               <TeacherInfoPages $BorderNoSides onClick={()=> setCurrentPage("page3")} colorActive={currentPage === "page3"}>
                 SMS Templates
               </TeacherInfoPages>
               <TeacherInfoPages borderType="right" onClick={()=> setCurrentPage("page4")} colorActive={currentPage === "page4"}>
                 SMS Logs
               </TeacherInfoPages>
            </TeachersProfileTopPages>
            {ModalState()}
       </div>
      {PageState()}
    </OfficeContainer>
  )
}

export default OfficeComponent