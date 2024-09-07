import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import {
  ButtonAndLang,
  LoginContainer,
  SignInContainer,
  SignInImage,
  SingInTitle,
} from "../styles/authStd/loginStyle";
import { ReqDemoButton2 } from "../styles/homeStd/reqDemoStyle";
import langIcon from "../../assets/homeAssets/language.svg";
import {
  InputStyled,
  InputTitle,
  InputWrapper,
  SendButton,
} from "../styles/materialsStyle";
import login1 from '../../assets/loginAssets/loginImg.png'
import axios from "axios";
import { BaseURL } from "../../config/dataUri";

const LoginComponent = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const handleSubmit = async(event)=> {
      event.preventDefault()
      try {
        const response = await axios.post(BaseURL + "/auth/login", {email, password})
        console.log(response.data)
        navigate("/profile")
      } catch (error) {
        console.log("Error to LogIn")
        alert("Invalid credentials! Please check you Email or Password!")
      }
  }
  return (
    <LoginContainer>
      <SignInContainer onSubmit={handleSubmit}>
        <ButtonAndLang>
          <ReqDemoButton2 $borderRadius36 $maxWidth $padding>
            Logotype
          </ReqDemoButton2>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <img src={langIcon} alt="language icon" />
            EN
          </div>
        </ButtonAndLang>
        
        <SingInTitle $margin>Sign In</SingInTitle>

        <InputWrapper>
          <InputTitle>Email</InputTitle>
          <InputStyled
            type="text"
            placeholder="Enter email address"
            name="user-email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
          />
        </InputWrapper>

        <InputWrapper>
          <InputTitle>Password</InputTitle>
          <InputStyled
            type="password"
            placeholder="Enter password"
            name="user-email"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
          />
        </InputWrapper>

        <SendButton>Next</SendButton>

        <hr style={{width: "100%"}}/>
        <div  style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
          <InputTitle>
            <span style={{ color: "#2C2669" }}>Don’t have an account?</span> |
            <Link to="/register" style={{textDecoration: "none", marginLeft: "5px"}}>
                Fill out an aplication
            </Link>
          </InputTitle>
          <Link to="/forgot-password" style={{textDecoration: "none",}}>
          <InputTitle>Forgot password?</InputTitle>
          </Link>
        </div>
      </SignInContainer>

      <SignInImage>
        <img src={login1} alt="login icon" />
      </SignInImage>
    </LoginContainer>
  );
};

export default LoginComponent;
