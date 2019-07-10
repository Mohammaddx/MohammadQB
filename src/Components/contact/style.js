import styled from 'styled-components'
import ContactBG from './contactBG.jpg'

export const ContactSection = styled.div`
width: 100%;
height: 100vh;
font-family: 'Nunito', sans-serif;
`
export const ContactHeader = styled.div`
position: relateive;
border: 1px solid transparent;
width: 100%;
height: 200px;
background-image: linear-gradient(rgba(0,0,0,0.5) , rgba(0,0,0,0.5)) ,
url(${ContactBG});
background-position: top;
background-size: cover;
`
export const ContactTitle = styled.h1`
color: #fff;
margin-top: 20px;
`
export const ContactFrom = styled.form`
padding: 10px;
`
export const InputFrom = styled.input`
background-color: transparent;
width: 100%;
height: 40px;
padding-left: 5px;
border: 1px solid #aaa;
border-radius: 5px;
display: block;
margin-bottom: 10px;
color: #000;
font-size: 17px;
font-family: 'Nunito', sans-serif;
`
export const InputSubmit = styled.input`
background-color: #fff;
width: 100%;
height: 40px;
padding-left: 5px;
border: 1px solid #1E90FF;
border-radius: 5px;
display: block;
margin-bottom: 10px;
color: #1E90FF;
font-size: 20px;
font-family: 'Nunito', sans-serif;
cursor: pointer;
transation-duration: .3s;
&:hover{
    background-image: linear-gradient( #1E90FF , darkcyan);
    color: #fff;
}
`
export const Textarea = styled.textarea`
background-color: transparent;
width: 100%;
height: 100px;
padding-left: 5px;
border: 1px solid #aaa;
border-radius: 5px;
display: block;
color: #000;
margin-bottom:25px;
font-size: 20px;
font-family: 'Nunito', sans-serif;
`
export const InfoDiv = styled.div`
background-image: linear-gradient(rgba(30,144,255 ,0.5 ) , rgba(30,144,255 ,1 )) , url(${ContactBG}) ;
padding: 30px;
background-position: center;
height: 83%;
position: relative;
`
export const InfoSpan = styled.span`
display: block;
margin: 10px;
color: #fff;
font-weight: bold;
transform: translate(0 , 200%);
`