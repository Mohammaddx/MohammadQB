import styled from 'styled-components';
import ResumeBG from './ResumeBG.jpg'

export const ResumeSection = styled.div`
width: 100%;
height: 100vh;
font-family: 'Nunito', sans-serif;
`
export const ResumeHeader = styled.div`
position: relateive;
border: 1px solid transparent;
width: 100%;
height: 200px;
background-image: linear-gradient(rgba(0,0,0,0.5) , rgba(0,0,0,0.5)) ,
url(${ResumeBG});
background-position: top;
background-size: cover;
`
export const ResumeTitle = styled.h1`
color: #fff;
`
export const ResumeETitle = styled.h1`
color: dodgerblue;
text-align: center;
width: 100%;
`
export const Resumeh4 = styled.h4`
color: #000;
`
export const ResumeSpan = styled.span`
color: #aaa;
font-size: 13px;
`
export const ResumeP = styled.p`
color: #000;
`
