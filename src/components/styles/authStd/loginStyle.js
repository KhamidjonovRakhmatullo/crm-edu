import styled from "styled-components";

export const LoginContainer = styled.div`
  /* border: 1px solid red; */
  background: var(--100, #efeef8);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 30px;
`;

export const SignInContainer = styled.form`
  /* flex: 1; */
  /* border: 1px solid blue; */
  border-radius: 20px;
  background: var(--Color-7, #fff);
  width: 100%;
  width: 500px;
  height: 690px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
export const ButtonAndLang = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const SingInTitle = styled.div`
  color: var(--600, #2c2669);
  font-family: "Public Sans";
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px; /* 133.333% */
  margin: ${(props) => (props.$margin ? `50px 0px 0px 0px` : ``)};
`;
export const SignInImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
img{
    width: 100%;
    width: 800px;
    height: 770px;
    border-radius: 25px;
}
  
`;

export const SecondText = styled.p`
color: var(--400, #A098D5);
font-family: "Public Sans";
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 16px; /* 114.286% */
margin: 0px;
`;
