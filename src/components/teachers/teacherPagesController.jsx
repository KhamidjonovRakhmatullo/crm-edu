import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  TeacherInfoPages,
  TeacherProfileContainer,
  TeachersProfileTopPages,
} from "../styles/teachersStd/teachersStyle";
import { teacherData } from "../mock/teachersMock/teacherInfoMock";
import TeacherGroup from "./teacherGroup";
import TeacherSalary from "./teacherSalary";
import TeacherProfile from "./teacherProfile";
// import TeacherSalary from "./teacherSalary";

const TeacherPagesController = () => {
  //data by id
  let { id } = useParams();
  const resultData = teacherData.maindata.find(
    (value) => value.id === parseInt(id)
  );

  //page change   ///////Controller
  const [currentPage, setCurrentPage] = useState("page1")

  function PageState(){
    const pages ={
      page1: <TeacherProfile resultData={resultData}/>,
      page2: <TeacherGroup/>,
      page3: <TeacherSalary/>
    }
    return pages[currentPage]
  }


  return (
    <TeacherProfileContainer>
      <TeachersProfileTopPages>
        <TeacherInfoPages borderType="left" onClick={()=> setCurrentPage("page1")} colorActive={ currentPage === "page1"}>
          Profile
        </TeacherInfoPages>
        <TeacherInfoPages $BorderNoSides onClick={()=> setCurrentPage("page2")} colorActive={ currentPage === "page2"}>
          Groups
        </TeacherInfoPages>
        <TeacherInfoPages borderType="right" onClick={()=> setCurrentPage("page3")}  colorActive={currentPage === "page3"}>
          Salary
        </TeacherInfoPages>
      </TeachersProfileTopPages>

      {PageState()}

    </TeacherProfileContainer>
  );
};

export default TeacherPagesController;
