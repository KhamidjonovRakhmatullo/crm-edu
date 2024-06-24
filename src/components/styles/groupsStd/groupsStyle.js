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