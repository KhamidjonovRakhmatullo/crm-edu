import React from "react";
import {
  HomeBody,
  HomeContainer,
  HomeFooter,
  HomeNavbar,
  HomeNavbarLeft,
  HomeNavbarRight,
  LanguageButton,
  LogInButton,
  ReqDemoButton,
} from "../styles/homeStd/homeStyle";
import LangIcon from "../../assets/homeAssets/language.svg";
import { Link } from "react-router-dom";

const HomeComponent = () => {
  return (
    <HomeContainer>
      <HomeNavbar>
        <HomeNavbarLeft>EduManSim</HomeNavbarLeft>
        <HomeNavbarRight>
          <p>(90) 417-47-56</p>
          <LanguageButton>
            <img src={LangIcon} alt="language icon" />
            ENG
          </LanguageButton>
          <Link to="/auth" style={{textDecoration: "none"}}>
          <LogInButton>LOG IN</LogInButton>
          </Link>
        </HomeNavbarRight>
      </HomeNavbar>

      <HomeBody>
        <h1>
          A simple management system <br />
          for education
        </h1>
        <Link to="/request-demo">
          <ReqDemoButton>Request a demo</ReqDemoButton>
        </Link>
      </HomeBody>

      <HomeFooter>
        <hr style={{ width: "95%" }} />
        <p>© 2024 edumansim.kr  All rights reserved</p>
      </HomeFooter>
    </HomeContainer>
  );
};

export default HomeComponent;
