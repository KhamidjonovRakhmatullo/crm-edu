import React from "react";
import {
  DemoContactIconWrapper,
  LoginButton,
  ReqDemoBody,
  ReqDemoButton2,
  ReqDemoContact,
  ReqDemoContainer,
  ReqDemoLeft,
  ReqDemoLoginWrapper,
  ReqDemoRight,
  ReqDemoText,
  ReqDemoTitle,
} from "../styles/homeStd/reqDemoStyle";
import {
  HomeNavbar,
  HomeNavbarLeft,
  HomeNavbarRight,
  LanguageButton,
  LogInButton,
} from "../styles/homeStd/homeStyle";
import LangIcon from "../../assets/homeAssets/language.svg";
import {
  InputStyled,
  InputTitle,
  InputWrapper,
  SendButton,
} from "../styles/materialsStyle";
import phoneIcon from "../../assets/homeAssets/phone-icon.svg";
import messageIcon from "../../assets/homeAssets/message-icon.svg";
import { Link } from "react-router-dom";

const ReqDemoComponent = () => {
  return (
    <ReqDemoContainer>
      <HomeNavbar>
        <HomeNavbarLeft>EduManSim</HomeNavbarLeft>
        <HomeNavbarRight>
          <p>(90) 417-47-56</p>
          <LanguageButton>
            <img src={LangIcon} alt="language icon" />
            ENG
          </LanguageButton>
          <Link to="/auth" style={{ textDecoration: "none" }}>
            <LogInButton>LOG IN</LogInButton>
          </Link>
        </HomeNavbarRight>
      </HomeNavbar>

      <ReqDemoBody>
        <ReqDemoLeft>
          <ReqDemoTitle>Fill out an aplication</ReqDemoTitle>
          <InputWrapper>
            <InputTitle>Name</InputTitle>
            <InputStyled
              type="text"
              placeholder="Enter name"
              name="user-name"
            />
          </InputWrapper>
          <InputWrapper>
            <InputTitle>Surname</InputTitle>
            <InputStyled
              type="text"
              placeholder="Enter surname"
              name="user-surname"
            />
          </InputWrapper>
          <InputWrapper>
            <InputTitle>Phone Number</InputTitle>
            <InputStyled
              type="number"
              placeholder="Enter phone number"
              name="user-phone-number"
            />
          </InputWrapper>
          <InputWrapper>
            <InputTitle>Email</InputTitle>
            <InputStyled
              type="text"
              placeholder="Enter email"
              name="user-email"
            />
          </InputWrapper>
          <InputWrapper>
            <InputTitle>Company name</InputTitle>
            <InputStyled
              type="text"
              placeholder="Enter company name"
              name="user-company-name"
            />
          </InputWrapper>
          <SendButton style={{width: "420px"}}>Send</SendButton>
          <hr style={{ width: "100%", margin: "0px" }} />
          <ReqDemoLoginWrapper>
            <InputTitle>Are you already registered?</InputTitle>
            <Link to="/auth" style={{ textDecoration: "none" }}>
              <LoginButton>Login</LoginButton>
            </Link>
          </ReqDemoLoginWrapper>
        </ReqDemoLeft>
        <ReqDemoRight>
          <ReqDemoTitle>Request Demo</ReqDemoTitle>

          <ReqDemoText>
            If you wand to know ore about Options opportunities. fill out the
            application and enjoy 14 days for free
          </ReqDemoText>

          <hr
            style={{ backgroundColor: "#6053B9", margin: "10px 0px 0px 0px" }}
          />

          <ReqDemoContact>
            <h3>Contact us if you have any questions</h3>
            <DemoContactIconWrapper>
              <img src={phoneIcon} alt="phone icon" />
              010-1234-5678
            </DemoContactIconWrapper>
            <DemoContactIconWrapper>
              <img src={messageIcon} alt="phone icon" />
              info@gmail.com
            </DemoContactIconWrapper>
          </ReqDemoContact>

          <ReqDemoButton2 $marginTop10>Request a demo</ReqDemoButton2>
        </ReqDemoRight>
      </ReqDemoBody>
    </ReqDemoContainer>
  );
};

export default ReqDemoComponent;
