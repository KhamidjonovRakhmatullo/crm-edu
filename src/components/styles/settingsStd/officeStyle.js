import styled from "styled-components";

export const OfficeContainer = styled.div`
padding: 40px;
`
export const CoursesContainer = styled.div`
/* border: 1px solid blue; */
display: grid;
grid-template-columns: auto auto auto;
align-items: center;
gap: 20px;
`
export const CoursesBox = styled.div`
/* border: 1px solid red; */
display: flex;
flex-direction: column;
align-items: center;
padding: 6px;
max-width: 349px;
/* height: 349px; */
flex-shrink: 0;
border-radius: 16px;
background: var(--Color-7, #FFF);
img{
    /* border: 2px solid green; */
    border-radius: 16px;

}
`

export const CourseInfo = styled.div`
display: flex;
flex-direction: column;
align-items: start;
width: 100%;
margin-top: 4px;
padding: 0px 10px 10px 10px;
`

export const CourseTitle = styled.div`
color: var(--600, #2C2669);
font-family: "Public Sans";
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: 30px; /* 150% */
`
export const CourseMinute = styled.div`
color: var(--600, #2C2669);
font-family: "Public Sans";
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 20px; /* 125% */
margin: ${(props) => props.$margin ? ` 20px 0px 30px 0px`: `0px 0px 20px 0px`};
margin: ${(props) => props.$marginNone ? `4px 0px`: ``};
`
export const CourseLabel = styled.div`
color: var(--300, #BFBAE3);
font-family: "Public Sans";
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 16px; /* 133.333% */
`
export const CourseButton = styled.div`
display: inline-flex;
padding: 8px 16px;
justify-content: center;
align-items: center;
border-radius: 6px;
background: var(--600, linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), #2C2669);
////font
color: var(--Color-7, #FFF);
font-family: "Public Sans";
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 16px; /* 114.286% */
cursor: pointer;
`
export const EditAndDelete = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 6px;

`