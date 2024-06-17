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
  width: 96.3%;

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
  /* width: 100%; */
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
    background-color: #fff;
    color: #2c2669;
    border: 1px solid #2c2669;
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
