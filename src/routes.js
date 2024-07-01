import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import ReqDemoComponent from "./components/home/reqDemo";
import HomeComponent from "./components/home/home";
import LoginComponent from "./components/auth/login";
import ForgotPasswordComponent from "./components/auth/forgotPassword";
import ChangePasswordComponent from "./components/auth/changePassword";
import ProfileComponent from "./components/profile/profile";
import SidebarComponent from "./components/sidebar/sidebar";
import LeadsComponent from "./components/leads/leads";
import TeachersComponent from "./components/teachers/teachers";
import GroupsComponent from "./components/groups/groups";
import GroupProfile from "./components/groups/groupProfile";
import StudentsComponent from "./components/students/students";
import TeacherPagesController from "./components/teachers/teacherPagesController";
import StudentsProfile from "./components/students/studentsProfile";
import BudgetComponent from "./components/budjet/budget";

const RoutesComponent = () => {
  const location = useLocation()
  const hideComponent = location.pathname !=="/" && 
  location.pathname !== "/request-demo"&&
  location.pathname !== "/auth"&&
  location.pathname !== "/forgot-password"&& 
  location.pathname !== "/change-password"; 
  return (
    //sidebar and auth wrapper
    <div style={{ display: "flex", width: "100%"}}>
      
            {hideComponent && <SidebarComponent/>}

      {/* auth wrapper */}
      <div style={{
        width: "100%",
        backgroundColor: "#efeef8", 
        // padding: "40px"
        }}>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/request-demo" element={<ReqDemoComponent />} />
          <Route path="/auth" element={<LoginComponent />} />
          <Route path="/forgot-password" element={<ForgotPasswordComponent />} />
          <Route path="/change-password" element={<ChangePasswordComponent />} />
          <Route path="/profile" element={<ProfileComponent />} />
          <Route path="/leads" element={<LeadsComponent />} />
          <Route path="/teachers" element={<TeachersComponent />} />
          <Route path="/groups" element={<GroupsComponent />} />
          <Route path="/students" element={<StudentsComponent />} />
          <Route path="/budjet" element={<BudgetComponent />} />
          {/* id */}
          <Route path="/teachers/:id" element={<TeacherPagesController/>}/>
          <Route path="/groups/:id" element={<GroupProfile/>}/>
          <Route path="/students/:id" element={<StudentsProfile/>}/>
        </Routes>
      </div>

    </div>
  );
};

export default RoutesComponent;
