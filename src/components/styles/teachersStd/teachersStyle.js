import styled from "styled-components";

export const TeachersContainer = styled.div`
  /* border: 1px solid red; */
  padding: 40px;
`;
export const TeachersTopFilters = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

export const TeacherProfileContainer = styled.div`
  /* border: 1px solid red; */
  padding: 40px;
`;

export const TeachersProfileTopPages = styled.div`
  /* border: 1px solid green; */
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 40px;
`;

export const TeacherInfoPages = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 187px;
  padding: 14px 0px;
  background-color: #f0f0f0;
  border: 2px solid #2c2669;
  background-color: transparent;
  /* Border radius based on props */
  border-top-left-radius: ${(props) =>
    props.borderType === "left" ? "6px" : "0"};
  border-bottom-left-radius: ${(props) =>
    props.borderType === "left" ? "6px" : "0"};
  border-top-right-radius: ${(props) =>
    props.borderType === "right" ? "6px" : "0"};
  border-bottom-right-radius: ${(props) =>
    props.borderType === "right" ? "6px" : "0"};

  //font
  font-family: "Public Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 114.286% */

  &:hover {
    background-color: #2c2669;
    color: white;
  }
`;


//GROUP
export const TeacherGroupContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: start;
  align-items: start;
  gap: 40px;
`;
export const TeacherGroupBox = styled.div`
  /* border: 1px solid red; */
  padding: 26px;
  width: 522px;
  flex-shrink: 0;
  border-radius: 20px;
  background: var(--Color-7, #fff);
`;
export const TeacherGroupAvatar = styled.div`
  border: 2px solid #2C2669;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 27px;
  width: 58px;
  height: 58px;
  flex-shrink: 0;
  border-radius: 9999px;
  background-color: #efeef8;
  //font
  color: var(--600, #2c2669);
  font-family: "Public Sans";
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px; /* 133.333% */
`;

export const DivSpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TeacherGroupLabel = styled.div`
  color: var(--400, #a098d5);
  font-family: "Public Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 114.286% */
`;

export const TeacherGroupName = styled.div`
color: var(--600, #2C2669);
font-family: "Public Sans";
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 24px; /* 133.333% */
`;
export const TeacherGroupCourse = styled.div`
color: var(--500, #6053B9);
font-family: "Public Sans";
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 32px; /* 133.333% */
`;
export const TeacherGroupStartDate = styled.div`
color: var(--500, #6053B9);
font-family: "Public Sans";
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 24px; /* 133.333% */
`;
export const StudentsRoomWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 8px;
`;
export const TeacherGroupRoom = styled.div`
display: flex;
padding: 6px 10px;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 4px;
background: var(--100, #EFEEF8);
//font
color: var(--500, #6053B9);
font-family: "Public Sans";
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 16px; /* 114.286% */
`;

export const TeacherGroupDateWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: start;
`
export const TeacherGroupLessonDays = styled.div`
color: var(--400, #A098D5);
font-family: "Public Sans";
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 16px; /* 133.333% */
`

