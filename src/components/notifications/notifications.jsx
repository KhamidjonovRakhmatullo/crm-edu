import React, { useState } from "react";
import {
  NotifBody,
  NotifLeft,
  NotifRight,
  NotifSmsBox,
  NotifSmsTime,
  NotifSmsTitle,
  NotifText,
  NotifTextTitle,
  NotifTitleTime,
  NotificationsContainer,
  TopButtonWrapper,
} from "../styles/notificationsStd/notificationsStyle";
import AddBlogModal from "./addBlogModal";
import { LINE } from "../styles/groupsStd/groupsStyle";
import notifMock from '../mock/notifMock'
// import { useParams } from "react-router-dom";

const eyeIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
  >
    <path
      d="M7.00009 1.75C10.1455 1.75 12.7623 4.01319 13.3109 7C12.7623 9.98678 10.1455 12.25 7.00009 12.25C3.85466 12.25 1.23784 9.98678 0.689209 7C1.23784 4.01319 3.85466 1.75 7.00009 1.75ZM7.00009 11.0833C9.47086 11.0833 11.5851 9.36367 12.1202 7C11.5851 4.63635 9.47086 2.91667 7.00009 2.91667C4.52927 2.91667 2.41505 4.63635 1.87987 7C2.41505 9.36367 4.52927 11.0833 7.00009 11.0833ZM7.00009 9.625C5.55032 9.625 4.37507 8.44976 4.37507 7C4.37507 5.55025 5.55032 4.375 7.00009 4.375C8.44979 4.375 9.62509 5.55025 9.62509 7C9.62509 8.44976 8.44979 9.625 7.00009 9.625ZM7.00009 8.45833C7.8055 8.45833 8.45843 7.80541 8.45843 7C8.45843 6.19459 7.8055 5.54167 7.00009 5.54167C6.19469 5.54167 5.54174 6.19459 5.54174 7C5.54174 7.80541 6.19469 8.45833 7.00009 8.45833Z"
      fill="#BFBAE3"
    />
  </svg>
);

const NotificationsComponent = () => {

    const data = notifMock.maindata

    // const resultData = useParams()

    // resultData = notifMock.maindata

    const [active, setActive] = useState("")

    function PageState(){
        const pages={
            page1: "Lorem Ipsum",
        }
        return pages[active]
    }
    function handleClick(id) {
        setActive(id);

        // const resultData = useParams()
        // resultData = notifMock.maindata.find((item)=> item.id === id )

      }

  return (
    <NotificationsContainer>
      <TopButtonWrapper>
        <AddBlogModal />
      </TopButtonWrapper>

      <NotifBody>
        <NotifLeft>
            {data.map((value, key)=> {
                return(
                  <div  key={key} style={{width: "100%"}}>
                     <NotifSmsBox onClick={() => handleClick(value.id)} activeColor={active === value.id}>
                        <NotifSmsTitle>
                          {value.sms.Title}
                        </NotifSmsTitle>
                        <NotifTitleTime>
                          <NotifSmsTime>{value.sms.Date} - {value.sms.Time}</NotifSmsTime>
                          <NotifSmsTime>{eyeIcon} {value.sms.HaveSeen}</NotifSmsTime>
                        </NotifTitleTime>
                      </NotifSmsBox>
                      <LINE $noMargin />
                  </div>
                )
            })}
        </NotifLeft>
        <NotifRight>
          <NotifTextTitle>Lorem ipsum dolor sit amet. 222s</NotifTextTitle>
          <NotifText>
          {PageState()}
          </NotifText>
        </NotifRight>
      </NotifBody>
    </NotificationsContainer>
  );
};

export default NotificationsComponent;
