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
import { Link } from 'react-router-dom'

const SidebarComponent = () => {
  return (
    <SidebarContainer>
          <ReqDemoButton2 $borderRadius36 $maxWidth $padding>
            Logotype
          </ReqDemoButton2>
        
        <Link to="/location" style={{width: "100%", textDecoration: "none"}}>
          <PageWrapper>
            <img src={locationIcon} alt="locationIcon" />
            Seoul
          </PageWrapper>
        </Link>

         <HrLine/>

         <div style={{display: "flex", flexDirection: "column", gap: "8px", width: "100%",}}>
          <Link to="/leads" style={{textDecoration: "none"}}>
         <PageWrapper>
            <img src={leadsIcon} alt="leadsIcon" />
            Leads
          </PageWrapper>
          </Link>
          <Link to="/teachers" style={{textDecoration: "none"}}>
         <PageWrapper>
            <img src={teachersIcon} alt="teachersIcon" />
            Teachers
          </PageWrapper>
          </Link>
         <PageWrapper>
            <img src={groupsIcon} alt="groupsIcon" />
            Groups
          </PageWrapper>
         <PageWrapper>
            <img src={studentsIcon} alt="studentsIcon" />
            Students
          </PageWrapper>
         <PageWrapper>
            <img src={budgetIcon} alt="budgetIcon" />
            Budget
          </PageWrapper>
         </div>

         <HrLine/>

         <div style={{display: "flex", flexDirection: "column", gap: "8px", width: "100%"}}>
         <PageWrapper>
            <img src={notifIcon} alt="notifIcon" />
            Notifications
          </PageWrapper>
         <PageWrapper>
            <img src={settingsIcon} alt="settingsIcon" />
            Settings
          </PageWrapper>
         </div>

       <ProfileWrapperPage>
        <Link to="/profile" style={{textDecoration: "none"}}>
          <PageWrapper>
            <img src={avatar} alt="avatar" />
            Adrew Smith
          </PageWrapper>
          </Link>
       </ProfileWrapperPage>
         
    </SidebarContainer>
  )
}

export default SidebarComponent