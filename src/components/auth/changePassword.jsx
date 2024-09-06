import React from "react";
import { Link } from 'react-router-dom'
import {
  ButtonAndLang,
  LoginContainer,
  SecondText,
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

const ChangePasswordComponent = () => {
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
        
        <SingInTitle $margin> 
            Change Password
            <SecondText>Please enter a new password for personal security</SecondText>
        </SingInTitle>

        <InputWrapper>
          <InputTitle>New Password</InputTitle>
          <InputStyled
            type="password"
            placeholder="New password"
            name="user-email"
          />
        </InputWrapper>
        <InputWrapper>
          <InputTitle>Repeat New Password</InputTitle>
          <InputStyled
            type="password"
            placeholder="Repeat new password"
            name="user-email"
          />
        </InputWrapper>

        <SendButton>Next</SendButton>

        <hr style={{width: "100%", color: "#2C2669"}}/>
        <Link to="/forgot-password" style={{textDecoration: "none",}}>
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

export default ChangePasswordComponent;
