import React from "react";
import { useParams } from "react-router-dom";
import coursesMock from "../../mock/settingsMock/coursesMock";
import {
  CourseButton,
  CourseInfo,
  CourseLabel,
  CourseMinute,
  CourseTitle,
  CoursesBox,
  EditAndDelete,
} from "../../styles/settingsStd/officeStyle";
import iimg from "../../../assets/settingsAssets/img1.png";
import { DivSpaceBetween } from "../../styles/teachersStd/teachersStyle";
import edit from "../../../assets/budjetAssets/pencil.svg";
import deleteIcon from "../../../assets/budjetAssets/trash.svg";
import { TableEditButton } from "../../styles/materialsStyle";

const CoursesById = () => {
  let { id } = useParams();
  const dataById = coursesMock.maindata.find(
    (value) => value.id === parseInt(id)
  );
  return (
    <div style={{padding: "40px"}}>
      <CoursesBox>
        <img src={iimg} alt="" />
        <CourseInfo>
          <CourseTitle>{dataById.courseName}</CourseTitle>
          <DivSpaceBetween $width100p>
            <CourseMinute $marginNone>{dataById.lessonDuration}</CourseMinute>
            <CourseLabel>Lesson duration</CourseLabel>
          </DivSpaceBetween>
          <DivSpaceBetween $width100p>
            <CourseMinute $marginNone>{dataById.courseDuration}</CourseMinute>
            <CourseLabel>Course duration</CourseLabel>
          </DivSpaceBetween>
          <CourseMinute $margin>{dataById.courseDesc}</CourseMinute>
          <DivSpaceBetween $width100p>
            <CourseButton>{dataById.coursePrice} UZS</CourseButton>
            <EditAndDelete>
              <TableEditButton>
                <img src={edit} alt="icon" />
              </TableEditButton>
              <TableEditButton $colorRed>
                <img src={deleteIcon} alt="icon" />
              </TableEditButton>
            </EditAndDelete>
          </DivSpaceBetween>
        </CourseInfo>
      </CoursesBox>
    </div>
  );
};

export default CoursesById;
