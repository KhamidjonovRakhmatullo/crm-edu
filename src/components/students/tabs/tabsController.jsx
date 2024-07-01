import React, { useState } from 'react'
import { TeacherInfoPages, TeachersProfileTopPages } from '../../styles/teachersStd/teachersStyle'
import TabGroup from './tabGroup'
import TabHistory from './tabHistory'
import TabComment from './tabComment'
import TabSms from './tabSms'
import CommentModal from './commentModal'
import SmsModal from './smsModal'

const TabsController = () => {
   
    const [currentPage, setCurrentPage] = useState("page1")
    
    function PageState(){
        const pages={
            page1: <TabGroup/>,
            page2: <TabComment/>,
            page3: <TabSms/>,
            page4: <TabHistory/>
        }
        return pages[currentPage]
    }
    function ModalState(){
        const pages={
            page2: <CommentModal/>,
            page3: <SmsModal/>,
        }
        return pages[currentPage]
    }
  return (
    <div style={{marginTop: "40px"}}>
        <div style={{
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center", 
          marginBottom: "40px"
          }}>
          <TeachersProfileTopPages $width100 $marginBottom0>
             <TeacherInfoPages borderType="left" onClick={()=> setCurrentPage("page1")} colorActive={currentPage === "page1"}>
               Groups
             </TeacherInfoPages>
             <TeacherInfoPages $BorderRightSide onClick={()=> setCurrentPage("page2")} colorActive={currentPage === "page2"}>
               Comment
             </TeacherInfoPages>
             <TeacherInfoPages $BorderNoSides onClick={()=> setCurrentPage("page3")} colorActive={currentPage === "page3"}>
               SMS
             </TeacherInfoPages>
             <TeacherInfoPages borderType="right" onClick={()=> setCurrentPage("page4")} colorActive={currentPage === "page4"}>
               History
             </TeacherInfoPages>
          </TeachersProfileTopPages>
          {ModalState()}
        </div>
      {PageState()}
    </div>
  )
}

export default TabsController