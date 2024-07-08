import styled from "styled-components";

export const SidebarContainer = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;
  max-width: 256px;
  height: 100vh;
  padding: 24px;
  flex-shrink: 0;
  border-radius: 12px;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  background: #fff;
  /* position: fixed; */
`;
export const PageWrapper = styled.div`
  /* border: 1px solid red; */
  display: flex;
  padding: 10px 12px;
  align-items: center;
  gap: 12px;
  align-self: stretch;
  background-color: ${(props) => (props.activeColor ? ` #EFEEF8` : ``)};
  border-radius: 8px;

  &:hover {
    background-color: #efeef8;
  }

  //font
  color: var(--500, #6053b9);
  font-family: "Public Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 114.286% */
`;

export const ProfileWrapperPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 208px;
  /* margin-top: 160px; */
  position: absolute;
  bottom: 24px;
  left: 24px;
  box-sizing: border-box;
`;

export const AccordionWrapper = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  max-width: 256px;
`;

export const AccordionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 12px;
  align-self: stretch;
  border-radius: 8px;
  color: var(--500, #6053b9);
  font-family: "Public Sans";
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  cursor: pointer;
  background: ${(props)=> props.setColor ? `#efeef8` : ``};
  div {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  &:hover{
     background: #efeef8;
  }
`;

export const AccordionContent = styled.div`
  width: 148px;
  position: relative;
  left: 58px;
  padding: 10px;
  overflow: hidden;
  max-height: ${(props) => (props.isOpen ? "500px" : "0")};
  opacity: ${(props) => (props.isOpen ? "1" : "0")};
  transition: max-height 0.3s ease, opacity 0.3s ease;
  border-radius: 10px;
  background: var(--Color-7, #fff);
  box-shadow: 0px 0px 10px 2px rgba(66, 84, 102, 0.2);
  margin-top: 8px;
  background: ${(props)=> props.setColor2 ? `#efeef8` : ``};
  &:hover{
    background-color: #EFEEF8;
  }
  //////
  color: var(--500, #6053b9);
  font-family: "Public Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 133.333% */
`;

export const AccorIcon = styled.div`
  cursor: pointer;
  transition: transform 0.3s ease;
  transform: ${(props) =>
    props.rotateIcon ? "rotate(180deg)" : "rotate(0deg)"};
`;
