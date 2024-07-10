import React, { useState } from 'react'
import { OfficeContainer } from '../../styles/settingsStd/officeStyle'
import { TeacherInfoPages, TeachersProfileTopPages } from '../../styles/teachersStd/teachersStyle'
import Staff from './staff'
import StaffModal from './staffModal'
import Branch from './branch'
import BranchModal from './branchModal'


const CeoComponent = () => {
  const [currentPage, setCurrentPage] = useState('page1')

  function PageState () {
     const pages ={
      page1: <Staff/>,
      page2: <Branch/>,
     }
     return pages[currentPage]
  }
  function ModalState(){
    const pages={
        page1: <StaffModal/>,
        page2: <BranchModal/>,
    }
    return pages[currentPage]
}
  return (
    <OfficeContainer>
       <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px"}}>
         <TeachersProfileTopPages $width100 $marginBottom0>
               <TeacherInfoPages borderType="left" onClick={()=> setCurrentPage("page1")} colorActive={currentPage === "page1"}>
                 Staff
               </TeacherInfoPages>
               <TeacherInfoPages borderType="right" onClick={()=> setCurrentPage("page2")} colorActive={currentPage === "page2"}>
                 Branches
               </TeacherInfoPages>
            </TeachersProfileTopPages>
            {ModalState()}
       </div>
      {PageState()}
    </OfficeContainer>
  )
}

export default CeoComponent