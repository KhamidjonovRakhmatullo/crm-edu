import styled from "styled-components";

export const InputWrapper = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 8px;
  width: 100%;
`;

export const InputTitle = styled.div`
  color: var(--500, #6053b9);
  font-family: "Public Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px; /* 114.286% */
`;

export const InputStyled = styled.input`
  border-radius: 8px;
  border: 1px solid var(--200, #cfcbea);
  background: var(--100, #efeef8);
  height: 42px;
  width: 100%;
  max-width: ${(props)=> props.$maxWidth318px ? `318px` : ``};

  padding: 0px 0px 0px 16px;
  /* color: var(--200, #cfcbea); */
  font-family: "Public Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
  ::placeholder {
  }
`;

export const SendButton = styled.div`
  display: flex;
  width: 100%;
  max-width: ${(props)=> props.$maxWidhtFitContent ? `fit-content` : ``};
  padding: 10px 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 6px;
  background-color: #2c2669;
  //font
  border: 1px solid #2c2669;
  color: var(--50, var(--Color-7, #fff));
  font-family: "Public Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
  &:hover {
    /* background-color: #fff;
    color: #2c2669;
    border: 1px solid #2c2669; */
    cursor: pointer;
  }
`;

export const HrLine = styled.div`
width: 100%;
color: #EFEEF8;
height: 2px;
flex-shrink: 0;
align-self: stretch;
border-radius: 2px;
background: var(--100, #EFEEF8);
`

export const BoxTitle = styled.div`
color: var(--600, #2C2669);
font-family: "Public Sans";
font-size: 22px;
font-style: normal;
font-weight: 700;
line-height: 30px; /* 136.364% */
`
export const AddButton = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 44px;
/* padding: 10px 40px; */
flex-shrink: 0;
border-radius: 6px;
border: 1px solid var(--600, #2C2669);
cursor: pointer;
font-size: 20px;
color: #2C2669;
`
export const AccorditionWrap = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
height: 64px;
padding: 0px 14px;
flex-shrink: 0;
border-radius: 6px;
border: 1px solid var(--300, #BFBAE3);
`


///TABLE
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  /* Add more styles as needed */
  background-color: #fafafb;
  border-top-left-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  /* min-width: ; */
`;

export const TableHeader = styled.th`
  border-top-left-radius: 16px;
  background-color: #f2f2f2;
  /* padding: 15px 0px; */
  height: 52px;
  text-align: left;
  /* border: 1px solid red; */

  color: var(--400, #a098d5);
  font-family: "Public Sans";
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 14px; /* 116.667% */
  /* border-radius: 0px 16px 0px 0px; */
`;

export const TableTr = styled.tr`
&:hover{
        background: #938b8b14;
        cursor: pointer;
    }
`

export const TableCell = styled.td`
  /* border: 1px solid blue; */
  padding: 8px;
  border-bottom: 1px solid #ddd;
  padding: 15px 0px;
  //font
  color: var(--600, #2c2669);
  color: ${(props)=> props.$Color2nd ? `#6053B9` : ``};
  font-family: "Public Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  font-weight: ${(props)=> props.$Color2nd ? `500` : ``};
  line-height: 16px; /* 114.286% */
`;
export const TableOrderNumber = styled.td`
display: flex;
justify-content: center;
align-items: center;
min-width: 20px;
min-width: ${(props)=> props.$minWidth12px ? `12px` : ``};
`;
export const TablePhoneNumber = styled.td`
  color: var(--500, #6053b9);

  /* Medium/14px -> 20px */
  font-family: "Public Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px; /* 114.286% */
`;

export const TableNameAndAvatar = styled.td`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const TableAvatarLetter = styled.td`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 100px;
  background: var(--400, #a098d5);
`;