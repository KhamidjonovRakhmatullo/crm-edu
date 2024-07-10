import styled from "styled-components";

export const GroupsBg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  max-width: fit-content;
  /* gap: 10px; */
  border-radius: 4px;
  background: ${(props) => props.$bgBlue ? `#2C2669` : `#efeef8`};
  ///font
  color: ${(props)=> props.$colorWhite ? `#fff` : `#6053b9`};
  font-family: "Public Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: ${(props)=> props.$font700 ? `700` : `400`};
  line-height: 16px; /* 114.286% */
`;

export const ModalTitle2 = styled.div`
  color: var(--500, #6053b9);
  font-family: "Public Sans";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px; /* 150% */
`;
export const StudentProdfileContainer = styled.div`
  padding: 40px;
`;
export const AddButtonWhite = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  max-width: ${(props) => (props.$maxWidhtFitContent ? `fit-content` : ``)};
  padding: 13px 40px;
  flex-shrink: 0;
  border-radius: 6px;
  background-color: white;
  border: 1px solid #2c2669;
  //font
  color: var(--600, #2c2669);
  font-family: "Public Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 114.286% */
  &:hover {
    /* background-color: #fff;
    color: #2c2669;
    border: 1px solid #2c2669; */
    cursor: pointer;
  }
  span{
    font-weight: 501;
    font-size: 18px;
  }
`;

export const TabGroupContainer = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 40px;
`
