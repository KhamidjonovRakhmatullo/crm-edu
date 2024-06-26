import styled from "styled-components";

export const ProfileContainer = styled.div`
  /* border: 1px solid red; */
  padding: 40px;
`;
export const ProfileBox = styled.div`
  width: 340px;
  min-height: 294px;
  flex-shrink: 0;
  border-radius: 26px;
  border: 1px solid var(--200, #cfcbea);
  background: var(--Color-7, #fff);
  box-shadow: 2px 2px 4px 0px rgba(174, 191, 237, 0.25);
`;
export const ProfileBG = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px 0px 20px;
  height: 104px;
  margin: 6px;
  border-radius: 20px;
  background: var(--300, #bfbae3);
`;
export const EditProfile = styled.div`
  display: flex;
  /* height: 36px; */
  padding: 10px 12px;
  justify-content: center;
  align-items: center;
  gap: 6px;
  border-radius: 6px;
  background: var(
    --600,
    linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%),
    #2c2669
  );
  //font
  color: var(--50, var(--Color-7, #fff));
  font-family: "Public Sans";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 133.333% */
  &:hover {
    cursor: pointer;
  }
`;
export const ProfileAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #efeef8;
  min-width: 88px;
 min-height: 88px;
  margin-top: 70px;
  border-radius: 999px;
  border: 4px solid var(--Color-7, #fff);
  ///font
  color: var(--600, #2c2669);
  img {
    width: 88px;
    height: 88px;
  }

  font-family: "Public Sans";
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px; 
`;
export const ProfileInfo = styled.div`
  margin: 42px 26px 20px 26px;
  //font
  color: var(--600, #2c2669);
  font-family: "Public Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 133.333% */
`;
export const ProfileType = styled.div`
  padding: 2px 8px;
  gap: 10px;
  border-radius: 6px;
  background: var(--400, #a098d5);
  width: fit-content;
  margin-top: 5px;
  margin-bottom: 14px;

  color: var(--100, #efeef8);
  font-family: Inter;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px; /* 160% */
`;
export const ProfileContactInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid red; */
  span {
    color: var(--400, #a098d5);
    font-family: "Public Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; /* 114.286% */
  }
  p {
    color: var(--600, #2c2669);
    text-align: right;
    font-family: "Public Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px; /* 114.286% */
    margin: 6px;
  }
`;
