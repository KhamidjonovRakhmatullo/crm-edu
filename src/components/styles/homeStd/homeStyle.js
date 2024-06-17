import styled from "styled-components";
import homeBG from "../../../assets/homeAssets/homeBG.jpeg";
// import homeBG from "../../assets/homeAssets/homeBody.png";

export const HomeContainer = styled.div`
  /* border: 1px solid red; */
  /* background-image: url(${homeBG}); */
  background-position: 10% 78%;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: linear-gradient(to bottom,rgba(0, 0, 100, 0.5), rgba(0, 0, 110, 0.5)), url(${homeBG});
  /* width: 1420px; */
  /* height: 900px; */
  /* width: 100%; */
  /* height: 100vh; */
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const HomeNavbar = styled.div`
  /* border: 1px solid blue; */
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 50px;
`;
export const HomeNavbarLeft = styled.div`
  /* border: 1px solid green; */
  flex: 1;
  display: flex;
  justify-content: start;
  align-items: center;
  ///
  color: var(--600, #2c2669);
  font-family: "Public Sans";
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px; /* 133.333% */
`;

///nav RIGHT
export const HomeNavbarRight = styled.div`
  /* border: 1px solid black; */
  flex: 1;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 20px;
  ///
  p {
    color: var(--Ocean-dark, #1e1e1e);
    font-family: "Public Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 125% */
    margin: 0px;
  }
`;

export const LanguageButton = styled.button`
  display: flex;
  width: 88px;
  height: 40px;
  padding: 10px 0px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  border-radius: 4px;
  border: 1px solid var(--600, #2c2669);
  box-shadow: 0px 2px 30px 0px rgba(0, 0, 0, 0.25);
  ////font
  color: var(--600, #2c2669);
  text-align: center;
  font-family: "Public Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 125% */
  &:hover {
    background-color: #2c2669;
    color: #fff;
    cursor: pointer;
  }
`;

export const LogInButton = styled.div`
  display: flex;
  width: 120px;
  padding: 10px 0px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  background-color: #2c2669;
  box-shadow: 0px 2px 30px 0px rgba(0, 0, 0, 0.25);
  ////font
  color: var(--Color-7, #fff);
  text-align: center;
  font-family: "Public Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 125% */
  border: 1px solid var(--600, #2c2669);
  &:hover {
    background-color: #fff;
    color: #2c2669;
    cursor: pointer;
  }
`;

//BODY
export const HomeBody = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    color: var(--Color-7, #fff);
    text-align: center;
    font-family: "Public Sans";
    font-size: 50px;
    font-style: normal;
    font-weight: 700;
    line-height: 60px; /* 120% */
  }
`;

export const ReqDemoButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  ///
  display: inline-flex;
  padding: 14px 30px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  border: 1px solid #fff;
  background: var(--Color-7, #fff);
  color: var(--600, #2c2669);
  text-align: center;
  font-family: "Public Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 133.333% */
  &:hover {
    cursor: pointer;
    background-color: #2c2669;
    color: #fff;
  }
`;

export const HomeFooter = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* width: 100%; */
  position: relative;
  /* top: 100%; */
  p {
    color: var(--Color-7, #fff);
    text-align: center;

    /* Regular/20px -> 30px */
    font-family: "Public Sans";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px; /* 150% */
    margin: 20px 0px;
  }
`;
