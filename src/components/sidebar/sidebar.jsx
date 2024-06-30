import React from 'react'
import { PageWrapper, ProfileWrapperPage, SidebarContainer } from '../styles/sidebarStd/sidebarStyle'
import { ReqDemoButton2 } from '../styles/homeStd/reqDemoStyle'
import { HrLine } from '../styles/materialsStyle'
import locationIcon from '../../assets/sidebarAssets/location-icon.svg'
import leadsIcon from '../../assets/sidebarAssets/leads-icon.svg'
import teachersIcon from '../../assets/sidebarAssets/teachers-icon.svg'
import groupsIcon from '../../assets/sidebarAssets/groups-icon.svg'
import studentsIcon from '../../assets/sidebarAssets/students-icon.svg'
import budgetIcon from '../../assets/sidebarAssets/budget-icon.svg'
import notifIcon from '../../assets/sidebarAssets/notif-icon.svg'
import settingsIcon from '../../assets/sidebarAssets/settings-icon.svg'
import avatar from '../../assets/sidebarAssets/Avatar.png'
import { Link, useLocation } from 'react-router-dom'

const SidebarComponent = () => {
  ///state color
  const methodLocation = useLocation()
  const currentLocation = methodLocation.pathname;
  return (
    <SidebarContainer>
          <ReqDemoButton2 $borderRadius36 $maxWidth $padding>
            Logotype
          </ReqDemoButton2>
        
          <PageWrapper>
            <img src={locationIcon} alt="locationIcon" />
            Seoul
          </PageWrapper>

         <HrLine/>

         <div style={{display: "flex", flexDirection: "column", gap: "8px", width: "100%",}}>
          <Link to="/leads" style={{textDecoration: "none"}}>
          <PageWrapper activeColor={currentLocation === "/leads"}>
            <img src={leadsIcon} alt="leadsIcon" />
            Leads
          </PageWrapper>
          </Link>
          <Link to="/teachers" style={{textDecoration: "none"}}>
         <PageWrapper activeColor={currentLocation === "/teachers"}>
            <img src={teachersIcon} alt="teachersIcon" />
            Teachers
          </PageWrapper>
          </Link>
          <Link to="/groups" style={{textDecoration: "none"}}>
         <PageWrapper activeColor={currentLocation === "/groups"}>
            <img src={groupsIcon} alt="groupsIcon" />
            Groups
          </PageWrapper>
          </Link>
          <Link to="/students" style={{textDecoration: "none"}}>
         <PageWrapper activeColor={currentLocation === "/students"}>
            <img src={studentsIcon} alt="studentsIcon" />
            Students
          </PageWrapper>
          </Link>
          <Link to="/budjet" style={{textDecoration: "none"}}>
         <PageWrapper activeColor={currentLocation === "/budjet"}>
            <img src={budgetIcon} alt="budgetIcon" />
            Budget
          </PageWrapper>
          </Link>
         </div>

         <HrLine/>

         <div style={{display: "flex", flexDirection: "column", gap: "8px", width: "100%"}}>
         <Link to="/notifications" style={{textDecoration: "none"}}>
         <PageWrapper activeColor={currentLocation === "/notifications"}>
            <img src={notifIcon} alt="notifIcon" />
            Notifications
          </PageWrapper>
          </Link>
         <PageWrapper>
            <img src={settingsIcon} alt="settingsIcon" />
            Settings
          </PageWrapper>
         </div>

       <ProfileWrapperPage>
        <Link to="/profile" style={{textDecoration: "none"}}>
          <PageWrapper activeColor={currentLocation === "/profile"}>
            <img src={avatar} alt="avatar" />
            Adrew Smith
          </PageWrapper>
          </Link>
       </ProfileWrapperPage>
         
    </SidebarContainer>
  )
}

export default SidebarComponent