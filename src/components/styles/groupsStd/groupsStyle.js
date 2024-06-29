import styled from "styled-components";

export const TableText10px = styled.div`
color: var(--400, #A098D5);
font-family: "Public Sans";
font-size: 10px;
font-style: normal;
font-weight: 400;
line-height: 14px; /* 140% */
`
export const WrapperSpaceBetween = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
gap: ${(props)=> props.$gap30px ? `30px` : ``};
`
export const GroupProfileContainer = styled.div`
/* border: 1px solid red; */
padding: 40px;
`
export const ShowAllButton = styled.div`
border: 1px solid red;
display: flex;
justify-content: center;
align-items: center;
gap: 8px;
width: 102px;
height: 30px;
flex-shrink: 0;
border-radius: 99px;
border: 1px solid var(--600, #2C2669);
cursor: pointer;
//font
color: var(--600, #2C2669);
font-family: "Public Sans";
font-size: 12px;
font-style: normal;
font-weight: 700;
line-height: 16px; /* 133.333% */
`

export const PencilBox = styled.div`
border: 1px solid #2C2669;
display: flex;
align-items: center;
justify-content: center;
background-color: #fff;
width: 14px;
height: 14px;
flex-shrink: 0;
border-radius: 100%;
margin-left: -21px;
margin-top: -21px;
`
export const HistoryContainer = styled.div`
padding: 30px;
background-color: #fff;
border-radius: 16px;
box-shadow: 0px 3px 8px 0px rgba(50, 50, 71, 0.05), 0px 0px 1px 0px rgba(12, 26, 75, 0.24);
`
export const ChangedDate = styled.div`
color: var(--600, #2C2669);
font-family: "Public Sans";
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 20px; /* 125% */
`
export const HistoryName = styled.div`
color: var(--500, #6053B9);
font-family: "Public Sans";
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 20px; /* 125% */
margin-top: 20px;
margin-bottom: 16px;
`
export const GroupName = styled.div`
display: flex;
gap: 6px;
color: var(--500, #6053B9);
font-family: "Public Sans";
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 16px; /* 133.333% */
`
export const ChangedStatus = styled.div`
color: var(--600, #2C2669);
font-family: "Public Sans";
font-size: 12px;
font-style: normal;
font-weight: 600;
line-height: 16px; /* 133.333% */
text-transform: uppercase;
`
export const LINE = styled.div`
width: 100%;
background-color:  #BFBAE3;
height: 2px;
margin-top: 24px;
`
