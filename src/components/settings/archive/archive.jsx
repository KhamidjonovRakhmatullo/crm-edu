import React, { useState } from 'react'
import { TeacherInfoPages, TeachersProfileTopPages } from '../../styles/teachersStd/teachersStyle'
import Groups from './groups'
import Students from './students'
import Staff from './staff'
import Leads from './leads'

const ArchiveComponent = () => {
   
    const [currentPage, setCurrentPage] = useState("page1")
    
    function PageState(){
        const pages={
            page1: <Groups/>,
            page2: <Students/>,
            page3: <Staff/>,
            page4: <Leads/>
        }
        return pages[currentPage]
    }
  return (
    <div style={{margin: "40px"}}>
          <TeachersProfileTopPages $width100>
             <TeacherInfoPages borderType="left" onClick={()=> setCurrentPage("page1")} colorActive={currentPage === "page1"}>
               Groups
             </TeacherInfoPages>
             <TeacherInfoPages $BorderRightSide onClick={()=> setCurrentPage("page2")} colorActive={currentPage === "page2"}>
               Students
             </TeacherInfoPages>
             <TeacherInfoPages $BorderNoSides onClick={()=> setCurrentPage("page3")} colorActive={currentPage === "page3"}>
               Staff
             </TeacherInfoPages>
             <TeacherInfoPages borderType="right" onClick={()=> setCurrentPage("page4")} colorActive={currentPage === "page4"}>
               Leads
             </TeacherInfoPages>
          </TeachersProfileTopPages>
      {PageState()}
    </div>
  )
}

export default ArchiveComponent