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
  max-width: ${(props) => (props.$maxWidth318px ? `318px` : ``)};

  padding: 0px 16px 0px 16px;
  /* color: var(--200, #cfcbea); */
  font-family: "Public Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
  ::placeholder {
  }
`;

export const TextAreaStyled = styled.textarea`
  display: flex;
  height: 151px;
  padding: 8px 16px;
  width: 100%;
  align-items: center;
  align-self: stretch;
  border-radius: 8px;
  border: 1px solid var(--200, #cfcbea);
  background: var(--100, #efeef8);
  //font
  color: var(--200, #2c2669);
  font-family: "Public Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
`;

/////input with icon
export const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const InputStyledIcon = styled.input`
  width: 100%;
  max-width: ${(props) => (props.$maxWidth318 ? `318px` : ``)};
  max-width: ${(props) => (props.$maxWidth170 ? `170px` : ``)};
  padding: 14px 8px 14px 36px;
  height: 44px;
  border: 1px solid var(--300, #bfbae3);
  border-radius: 8px;
  font-size: 16px;
  box-sizing: border-box;
  border-radius: 8px;
  background: var(--Color-7, #fff);
  ///font

  /* &:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  } */

  &::placeholder {
    color: var(--300, #bfbae3);
    font-family: "Public Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px; /* 114.286% */
  }
`;

export const SearchIcon = styled.img`
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: #aaa;
`;

export const ResetButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  width: ${(props) => (props.$maxWidth ? "50%" : ``)};
  width: ${(props) => (props.$maxWidth100px ? "150px" : ``)};
  gap: 8px;
  padding: 12px;
  height: 44px;
  border-radius: 8px;
  border: 1px solid var(--300, #bfbae3);
  background: var(--Color-7, #fff);
  cursor: pointer;
  //font
  color: var(--300, #bfbae3);
  font-family: "Public Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 114.286% */
`;

///checkBOX
export const CheckBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const CheckBoxStyled = styled.input`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  border: 1px solid var(--400, #a098d5);
  //
  color: var(--400, #a098d5);
  font-family: "Public Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 114.286% */
`;
export const CheckBoxLabel = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: ${(props) => (props.$gap8 ? `8px` : ``)};
  //
  color: var(--400, #a098d5);
  font-family: "Public Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 114.286% */
`;

//SEND BUTTON
export const SendButton = styled.div`
  display: flex;
  width: 100%;
  max-width: ${(props) => (props.$maxWidhtFitContent ? `fit-content` : ``)};
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
//ADD BUTTON
export const AddButtonBlue = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  border-radius: 6px;
  background-color: #2c2669;
  //font
  color: var(--50, var(--Color-7, #fff));
  font-family: "Public Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
  cursor: pointer;
`;

export const HrLine = styled.div`
  width: 100%;
  color: #efeef8;
  height: 2px;
  flex-shrink: 0;
  align-self: stretch;
  border-radius: 2px;
  background: var(--100, #efeef8);
`;

export const BoxTitle = styled.div`
  color: var(--600, #2c2669);
  font-family: "Public Sans";
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px; /* 136.364% */
`;

///ADD leads
export const AddButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 44px;
  /* padding: 10px 40px; */
  flex-shrink: 0;
  border-radius: 6px;
  border: 1px solid var(--600, #2c2669);
  cursor: pointer;
  font-size: 20px;
  color: #2c2669;
`;
export const AccorditionWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 64px;
  padding: 0px 14px;
  flex-shrink: 0;
  border-radius: 6px;
  border: 1px solid var(--300, #bfbae3);
`;

///TABLE

export const TableHeadWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 60px;
  padding-left: 40px;
  background-color: #fff;
  border-top-left-radius: 16px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  /* Add more styles as needed */
  background-color: #fafafb;
  border-top-left-radius: 16px;
  border-radius: ${(props) => (props.$borderRadius ? `16px` : ``)};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  /* min-width: ; */
`;

export const TableHeader = styled.th`
  border-top-left-radius: ${(props) => (props.$leftBorderRadius ? `16px` : ``)};
  border-top-right-radius: ${(props) =>
    props.$rightBorderRadius ? `16px` : ``};
  background-color: #f2f2f2;
  /* padding: 15px 0px; */
  height: 52px;
  text-align: left;
  text-align: ${(props) => (props.$textCenterTH ? `center` : ``)};
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
  &:hover {
    background: #938b8b14;
    cursor: pointer;
  }
`;

export const TableCell = styled.td`
  /* border: 1px solid blue; */
  border-top: 1px solid #ddd;
  padding: 15px 0px;
  height: 70px;
  text-align: ${(props) => (props.$TextCenter ? `center` : ``)};
  //font
  color: var(--600, #2c2669);
  color: ${(props) => (props.$Color2nd ? `#6053B9` : ``)};
  font-family: "Public Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  font-weight: ${(props) => (props.$Font500 ? `500` : ``)};
  font-weight: ${(props) => (props.$Font400 ? `400` : ``)};
  line-height: 16px; /* 114.286% */
  span {
    color: var(--500, #6053b9);
    font-family: "Public Sans";
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
  }
`;
export const TableOrderNumber = styled.td`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-width: ${(props) => (props.$minWidth12px ? `12px` : ``)};
  color: ${(props) => (props.$Color2nd ? `#6053B9` : ``)};
`;
export const TablePhoneNumber = styled.td`
  color: var(--500, #6053b9);
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.$justifyCenter ? `center` : ``)};
  gap: 8px;
  text-align: ${(props) => (props.$TextCenter2 ? `center` : ``)};
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
export const TableEditButton = styled.td`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 6px;
  border: 1px solid var(--600, #2c2669);
  border: ${(props)=> props.$colorRed ? `1px solid #FF2E00` : ``};
  cursor: pointer;
`;

export const ActiveBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 12px;
  max-width: fit-content;
  border-radius: 4px;
  background: var(--100, #efeef8);
  //font
  color: var(--500, #6053b9);
  font-family: "Public Sans";
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px; /* 133.333% */
`;
export const PercentageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 12px;
  max-width: fit-content;
  border-radius: 4px;
  background: var(--500, #6053b9);
  //font
  color: var(--100, #fff);
  font-family: "Public Sans";
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px; /* 133.333% */
`;
