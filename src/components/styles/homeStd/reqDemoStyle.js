import styled from "styled-components";

//MAIN
export const ReqDemoContainer = styled.div`
  /* border: 1px solid red; */
  background: var(--100, #efeef8);
  /* height: 100vh; */
  /* width: 100%; */
`;

//BODY
export const ReqDemoBody = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  padding: 35px 140px;
`;

//LEFT
export const ReqDemoLeft = styled.form`
  /* border: 1px solid green; */
  /* flex: 1; */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 40px 40px 40px;
  border-radius: 20px;
  background: var(--Color-7, #fff);
  width: 100%;
  max-width: 500px;
  /* height: 845px; */
  gap: 30px;
`;

//title
export const ReqDemoTitle = styled.div`
  color: var(--600, #2c2669);
  font-family: "Public Sans";
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px; /* 128.571% */
`;

export const ReqDemoLoginWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const LoginButton = styled.div`
  display: flex;
  width: 136px;
  padding: 5px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 6px;
  border: 1px solid var(--600, #2c2669);
  //font
  color: var(--600, #2c2669);
  font-family: "Public Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
  &:hover {
    background-color: #2c2669;
    color: #fff;
    cursor: pointer;
  }
`;

///RIGHT
export const ReqDemoRight = styled.div`
  /* flex: 1; */
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
export const ReqDemoText = styled.div`
  color: var(--500, #6053b9);
  font-family: "Public Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
  max-width: 453px;
`;

export const ReqDemoContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  h3 {
    color: var(--600, #2c2669);
    font-family: "Public Sans";
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px; /* 150% */
    margin: 0px;
    margin-bottom: 23px;
  }
`;
export const DemoContactIconWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  //font
  color: var(--500, #6053b9);
  font-family: "Public Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
  margin-bottom: 12px;
  img {
    padding: 10px;
    border-radius: 6px;
    background: var(--300, #bfbae3);
  }
`;
export const ReqDemoButton2 = styled.div`
  margin-top: ${(props)=> props.$marginTop10 ? `10px` : ``};
  display: flex;
  max-width: ${(props)=> props.$maxWidth ? `208px` : `226px`};
  padding: ${(props)=> props.$padding ? `0px 73px` : ``};
  height: 44px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: ${(props)=> props.$borderRadius36 ? `36px` : `6px`};
  background: #2c2669;
  border: 1px solid #2c2669;
  ///font
  color: var(--50, var(--Color-7, #fff));
  font-family: "Public Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
  &:hover {
    cursor: pointer;
    background-color: #efeef8;
    color: #2c2669;
  }
`;
export const daw = styled.div`
  border: 1px solid black;
`;
