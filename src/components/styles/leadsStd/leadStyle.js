import styled from "styled-components";

export const LeadContainer = styled.div`
  /* border: 1px solid black; */
  padding: 40px;
`;

export const LeadTopFilter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
  /* margin-bottom: 40px; */
  margin-bottom: 20px;
`;

export const GridButton = styled.div`
  padding: 10px 20px;
  height: 43px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 6px 0px 0px 6px;
  border: 1px solid var(--600, #2c2669);
  background-color: #2c2669;
  background-color: ${(props)=> props.activeColor ? `transparent` : `#2c2669`};
  color: white;
  cursor: pointer;
`;

export const ColumnButton = styled.div`
  padding: 10px 20px;
  height: 43px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 0px 6px 6px 0px;
  border: 1px solid var(--600, #2c2669);
  background-color: #2c2669;
  background-color: ${(props)=> props.activeColor ? `#2c2669` : `transparent`};
  color: white;
  cursor: pointer;
`;

export const LeadBody = styled.div`
  /* border: 1px solid black; */
  display: flex;
  justify-content: start;
  align-items: start;
`;

//box
export const FromWhere = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 387px;
  min-height: 662px;
  flex-shrink: 0;
  border-radius: 16px;
  background: var(--Color-7, #fff);
`;

export const TextAndNumber = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  color: var(--600, #2c2669);
  font-family: "Public Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 114.286% */
  p {
    color: var(--500, #6053b9);
    font-family: "Public Sans";
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px; /* 136.364% */
  }
`;

////Sections
export const TextSubject = styled.div`
  display: flex;
  gap: 10px;
  color: var(--600, #2c2669);
  font-family: "Public Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
`;
export const NumberSubject = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  padding: 4px;
  border-radius: 999px;
  background: var(--100, #efeef8);
  //font
  color: var(--400, #a098d5);
  font-family: "Public Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px; /* 114.286% */
`;
export const SubStudentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 6px;
  background: var(--100, #efeef8);
  margin-bottom: 10px;
`;
export const SubStudentLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
export const SubStudentAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  background-color: #2c2669;
  border-radius: 100%;
  color: var(--Color-7, #fff);
  //font
  font-family: "Public Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 125% */
`;

export const StudentNameAndNumber = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;
export const SubStudentName = styled.div`
  color: var(--600, #2c2669);
  font-family: "Public Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 114.286% */
`;
export const SubStudentNumber = styled.div`
  color: var(--600, #2c2669);
  font-family: "Public Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 114.286% */
`;
export const SubStudentRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
export const SubjectTextAndEdit = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const SmsTemplates = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid var(--200, #cfcbea);
  //font
  color: var(--600, #2c2669);
  font-family: "Public Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
  &:hover{
    background-color: #EFEEF8;
    cursor: pointer;
  }
`;
