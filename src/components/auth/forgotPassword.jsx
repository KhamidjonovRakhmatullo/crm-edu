import React from "react";
import { Link } from 'react-router-dom'
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
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const ForgotPasswordComponent = () => {
  return (
    <LoginContainer>
      <SignInContainer>
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
        
        <SingInTitle $margin> Forgot Password</SingInTitle>

        <InputWrapper>
          <InputTitle>Email</InputTitle>
          <InputStyled
            type="text"
            placeholder="Enter email address"
            name="user-email"
          />
        </InputWrapper>
        <Link to="/change-password" style={{textDecoration: "none",}}>
        <SendButton>Send</SendButton>
        </Link>
        <hr style={{width: "100%", color: "#2C2669"}}/>
        <Link to="/login" style={{textDecoration: "none",}}>
          <InputTitle>
            <span style={{ color: "#2C2669", display: "flex", alignItems: "center" }}><ChevronLeftIcon/> Back</span> 
          </InputTitle>
          </Link>
      </SignInContainer>

      <SignInImage>
        <img src={login1} alt="login icon" />
      </SignInImage>
    </LoginContainer>
  );
};

export default ForgotPasswordComponent;
