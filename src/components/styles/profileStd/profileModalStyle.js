import styled from "styled-components";

export const ModalContainer = styled.div`
/* border: 2px solid red; */
/* height: 100%; */
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 650px;
  box-shadow: 24;
  border-radius: 10px;
`;
export const ExitButton = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  height: 40px;
  border-radius: 10px 10px 0px 0px;
  background: var(--100, #EFEEF8);

`;

export const ModalBody = styled.div`
  padding: 40px 60px 60px 60px;
  display: flex;
  flex-direction: column;
  gap: 25px;

`;

export const ModalTitel = styled.div`
  color: var(--600, #2C2669);
font-family: "Public Sans";
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 32px; /* 133.333% */
`;
