import styled from "styled-components";

export const SidebarContainer = styled.div`
/* border: 1px solid red; */
display: flex;
flex-direction: column;
align-items: center;
gap: 24px;
width: 100%;
max-width: 256px;
height: 100vh;
padding: 24px;
flex-shrink: 0;
border-radius: 12px;
border-right: 1px solid rgba(0, 0, 0, 0.10);
background: #FFF;
/* position: fixed; */
`
export const PageWrapper = styled.div`
/* border: 1px solid red; */
display: flex;
padding: 10px 12px;
align-items: center;
gap: 12px;
align-self: stretch;
background-color: ${(props)=> props.activeColor ? ` #EFEEF8` : ``};
border-radius: 8px;

&:hover{
    background-color: #EFEEF8;
}

//font
color: var(--500, #6053B9);
font-family: "Public Sans";
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 16px; /* 114.286% */
`

export const ProfileWrapperPage = styled.div`
display: flex;
flex-direction: column;
width: 100%;
margin-top: 160px;
/* position: absolute; */
bottom: 24px;
left: 24px;
box-sizing: border-box;

`