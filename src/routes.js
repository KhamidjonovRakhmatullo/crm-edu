import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import ReqDemoComponent from "./components/home/reqDemo";
import HomeComponent from "./components/home/home";
import LoginComponent from "./components/auth/login";
import ForgotPasswordComponent from "./components/auth/forgotPassword";
import ChangePasswordComponent from "./components/auth/changePassword";
import ProfileComponent from "./components/profile/profile";
import SidebarComponent from "./components/sidebar/sidebar";

const RoutesComponent = () => {
  const location = useLocation()
  const hideComponent = location.pathname !=="/" && 
  location.pathname !== "/request-demo"&&
  location.pathname !== "/auth"&&
  location.pathname !== "/forgot-password"&& 
  location.pathname !== "/change-password"; 
  return (
    <div>
      <>
      {hideComponent && <SidebarComponent/>}
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/request-demo" element={<ReqDemoComponent />} />
          <Route path="/auth" element={<LoginComponent />} />
          <Route path="/forgot-password" element={<ForgotPasswordComponent />} />
          <Route path="/change-password" element={<ChangePasswordComponent />} />
          <Route path="/profile" element={<ProfileComponent />} />
        </Routes>
      </>
    </div>
  );
};

export default RoutesComponent;
