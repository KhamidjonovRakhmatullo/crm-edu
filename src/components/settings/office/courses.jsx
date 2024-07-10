import React from 'react'
import { CourseButton, CourseInfo, CourseMinute, CourseTitle, CoursesBox, CoursesContainer } from '../../styles/settingsStd/officeStyle'
import iimg from '../../../assets/settingsAssets/img1.png'
// eslint-disable-next-line no-unused-vars
import coursesMock from '../../mock/settingsMock/coursesMock';
import { Link } from 'react-router-dom'

const Courses = () => {
    const data = coursesMock.maindata
    if (!data) {
        return <div>Loading...</div>;
    }
  return (
    <CoursesContainer>
        {data.map((value , key) => {
            return(
            <Link to={`/course/${value.id}`} style={{ display: "contents" }}>
               <CoursesBox key={key}>
                   <img src={iimg} alt="iimg" />
                   <CourseInfo>
                       <CourseTitle>{value.courseName}</CourseTitle>
                       <CourseMinute>{value.lessonDuration}</CourseMinute>
                       <CourseButton>{value.coursePrice} UZS</CourseButton>
                   </CourseInfo>
               </CoursesBox>
            </Link>
            )
        })}
    </CoursesContainer>
  )
}

export default Courses