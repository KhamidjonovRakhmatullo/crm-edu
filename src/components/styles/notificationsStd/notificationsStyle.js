import styled from "styled-components";

export const NotificationsContainer = styled.div`
  border: 1px solid red;
  padding: 40px;
`;
export const TopButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`;
export const NotifBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 20px;
  margin-top: 40px;
`;
export const NotifLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 65%;
  height: 600px;
  border-radius: 16px 0px 0px 16px;
  background: var(--Color-7, #fff);
`;
export const NotifSmsBox = styled.div`
border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 16px 20px;
  gap: 12px;
  width: 100%;
  background-color: ${(props) => (props.activeColor ? `#F3F2F2` : ``)};
  &:hover {
    background-color: #f3f2f2;
    cursor: pointer;
  }
`;
export const NotifTitleTime = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const NotifSmsTitle = styled.div`
  color: var(--600, #2c2669);
  font-family: "Public Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 125% */
`;
export const NotifSmsTime = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  color: var(--300, #bfbae3);
  font-family: "Public Sans";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 14px; /* 116.667% */
`;

////
export const NotifRight = styled.div`
border: 1px solid blue;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 12px;
  width: 100%;
  height: 600px;
  padding: 20px;
  border-radius: 0px 16px 16px 0px;
  background: var(--Color-7, #fff);
`;
export const NotifTextTitle = styled.div`
  color: var(--600, #2c2669);
  font-family: "Public Sans";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px; /* 150% */
`;
export const NotifText = styled.div`
  color: var(--600, #2c2669);
  font-family: "Public Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 114.286% */
`;

