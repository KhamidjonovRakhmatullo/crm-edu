import React, { useState } from "react";
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
  CheckBoxLabel,
  CheckBoxStyled,
  InputStyled,
  InputTitle,
  InputWrapper,
  SendButton,
} from "../styles/materialsStyle";
import phoneIcon from "../../assets/homeAssets/phone-icon.svg";
import messageIcon from "../../assets/homeAssets/message-icon.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import { BaseURL } from "../../config/dataUri";

const Register = () => {

  const navigate = useNavigate();

  const [name, setName] = useState("")
  const [surname, setSurName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("")
  const [companyName, setCompanyName] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("")


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(BaseURL + "/auth/register", {
        name,
        surname,
        phone_number: phoneNumber,
        email,
        company_name: companyName,
        role,
        password
      });
      console.log(response.data);
      navigate("/profile");
    } catch (error) {
      console.error("Create account is NOT success!", error);
    }
  };

  const handleDemoValue = ()=> {
    setName("Test Name");
    setSurName("Test SurName");
    setPhoneNumber("01044440033");
    setEmail("test@mail.com");
    setCompanyName("RRR Academy");
    setPassword("112233")
  }
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
        <button onClick={handleDemoValue}>DEMO</button>
        <ReqDemoLeft onSubmit={handleSubmit}>
          <ReqDemoTitle>Fill out an aplication.</ReqDemoTitle>
          {/* <form > */}
          <InputWrapper>
            <InputTitle>Name</InputTitle>
            <InputStyled
              type="text"
              placeholder="Enter name"
              name="user-name"
              onChange={(e)=> setName(e.target.value)}
              value={name}
            />
          </InputWrapper>
          <InputWrapper>
            <InputTitle>Surname</InputTitle>
            <InputStyled
              type="text"
              placeholder="Enter surname"
              name="user-surname"
              onChange={(e)=> setSurName(e.target.value)}
              value={surname}
            />
          </InputWrapper>
          <InputWrapper>
            <InputTitle>Phone Number</InputTitle>
            <InputStyled
              type="number"
              placeholder="Enter phone number"
              name="user-phone-number"
              onChange={(e)=> setPhoneNumber(e.target.value)}
              value={phoneNumber}
            />
          </InputWrapper>
          <InputWrapper>
            <InputTitle>Email</InputTitle>
            <InputStyled
              type="text"
              placeholder="Enter email"
              name="user-email"
              onChange={(e)=> setEmail(e.target.value)}
              value={email}
            />
          </InputWrapper>
          <InputWrapper>
            <InputTitle>Company name</InputTitle>
            <InputStyled
              type="text"
              placeholder="Enter company name"
              name="user-company-name"
              onChange={(e)=> setCompanyName(e.target.value)}
              value={companyName}
            />
          </InputWrapper>
          <div style={{display: "flex",justifyContent: "start", width: "100%",gap: "20px"}}>
              <CheckBoxLabel $gap8>
              <CheckBoxStyled
                type="radio"
                name="role"
                value="Teacher"
                onChange={(e)=> setRole(e.target.value)}
                checked={role === "Teacher"}
              />
              Teacher
              </CheckBoxLabel>
              <CheckBoxLabel $gap8>
              <CheckBoxStyled
                type="radio"
                name="role"
                value="Student"
                onChange={(e)=> setRole(e.target.value)}
                checked={role === "Student"}
              />
              Student
              </CheckBoxLabel>
              <CheckBoxLabel $gap8>
              <CheckBoxStyled
                type="radio"
                name="role"
                value="Admin"
                onChange={(e)=> setRole(e.target.value)}
                checked={role === "Admin"}
              />
              Admin
              </CheckBoxLabel>
              </div>
          <InputWrapper>
            <InputTitle>Create Password</InputTitle>
            <InputStyled
              type="password"
              placeholder="Create password"
              name="password"
              onChange={(e)=> setPassword(e.target.value)}
              value={password}
            />
          </InputWrapper>
          {/* <Link to="/profile"> */}
          <SendButton style={{width: "420px"}}>Send</SendButton>
          {/* </Link> */}
          {/* </form> */}
          <hr style={{ width: "100%", margin: "0px" }} />
          <ReqDemoLoginWrapper>
            <InputTitle>Are you already registered?</InputTitle>
            <Link to="/login" style={{ textDecoration: "none" }}>
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

        <Link to="/profile" style={{ textDecoration: "none" }}>
          <ReqDemoButton2 $marginTop10>Request a demo</ReqDemoButton2>
        </Link>
        </ReqDemoRight>
      </ReqDemoBody>
    </ReqDemoContainer>
  );
};

export default Register;
