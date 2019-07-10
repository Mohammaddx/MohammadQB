import styled from 'styled-components'

import imageBack from './AboutBackground.jpg';
export const AboutSection = styled.div`
width: 100%;
height: 100vh;
font-family: 'Nunito', sans-serif;

`
export const AboutHeader = styled.div`
position: relateive;
border: 1px solid transparent;
width: 100%;
height: 200px;
background-image: linear-gradient(rgba(0,0,0,0.5) , rgba(0,0,0,0.5)) ,
url(${imageBack});
background-position: top;
background-size: cover;
`
export const AboutTitle = styled.h1`
color: #fff;
`
export const AboutImage = styled.img`
border-radius: 50%;
border: 2px solid  dodgerblue;
width: 150px;
padding: 10px;
height: 150px;
transition-duration: .3s;
&:hover{
    box-shadow: 1px 1px 25px 1px #aaa;
}
`
export const AboutGolsSpanTitle = styled.span`
padding: 5px 9px;
border-radius: 50%;
border: 2px solid  dodgerblue;
margin: 2px;
`
export const AboutGolsP = styled.p`
display: inline;
font-weight: bold;
`
export const AboutGolsSpan = styled.span`
display: block;
color: dodgerblue;
position: relative;
left: 10px;
`
export const AboutCVButton = styled.button`
background-color: #fff;
border: 1.5px solid dodgerblue;
border-radius: 5px;
color: dodgerblue;
transition-duration: .3s;
padding: 5px 10px;
font-weight: bold;
cursor: pointer
&:hover{
    color: #fff;
    background-color: dodgerblue;
}
`
export const DivFont = styled.div`
background-color: dodgerblue;
text-align: center;
padding: 10px;
`
export const SpanFont = styled.span`
padding: 10px 20px;
color: #fff;
font-size: 20px;
@media (max-width: 435px) {  
    font-size: 15px;
    padding: 5px 10px;
  }
`
export const A = styled.a`
color: #fff;
`