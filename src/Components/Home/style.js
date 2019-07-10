import styled ,{keyframes} from 'styled-components'

const Light = keyframes`
from {
    text-shadow: 0 0 10px #fff, 0 0 20px dodgerblue;
  }
  to {
    text-shadow: 0 0 20px dodgerblue, 0 0 30px dodgerblue;
  }
`

export const Container = styled.div`
position: relative;
width: 100%;
height: 100vh;
background-image: linear-gradinet(rgba(0,0,0,0.3) , rgba(0,0,0,0.3));
font-family: 'Nunito', sans-serif;
`
export const SocialMedia = styled.div`
float: right;
padding : 30px;
z-index:99;
position: sticky;
`
export const SocialMediaSpan = styled.span`
position: relative;
padding-top: 10px;
padding-left: 5px;
padding-right: 5px;
margin-top: -8px;
float: right;
color: #fff;
font-size: 25px;
background-color: dodgerblue;
box-shadow: 1px 1px 10px 1px #aaa;
width: 40px;
height: 40px;
border-radius: 50%;
transition-duration: .3s;
cursor: pointer;
&:hover{
  background-color: #fff;
  color: #000;
}
`
export const Fawsome = styled.div`
overflow: hidden;
margin-top: 50px;
`
export const ListItem = styled.ul`
list-style-type: none;
padding: 10px;
float: right;
`
export const Item = styled.li`
margin: 5px;
font-size: 20px;
margin-top: 20px;
`
export const ALink = styled.a`
color: #fff;
cursor: pointer;
&:hover{
    color: aqua;
    transition-duration: 0.5s;
}
@media (max-width: 490px) {  
  font-size: 15px;
}
`


export const MeDiv = styled.div`
position: absolute;
top:25%;
width:100%;
`

export const HomeImg = styled.img`
width:200px;
width:200px;
border: 2px solid aqua;
border-radius: 50%;
display: block;
margin: auto;
box-shadow: 1px 1px 50px 1px #000;
@media (max-width: 360px) {  
    width: 150px;
    height: 150px;
  }
`

export const Title = styled.h1`
font-size: 40px;
color: #fff;
text-align: center;
-webkit-animation: ${Light} 1s ease-in-out infinite alternate;
-moz-animation: ${Light} 1s ease-in-out infinite alternate;
animation: ${Light} 1s ease-in-out infinite alternate;
@media (max-width: 490px) {  
  font-size: 25px;
}
`
export const SpanTitle = styled.span`
font-family: 'Ropa Sans', sans-serif;
letter-spacing: 3px;
font-size: 20px;
color: #fff;
@media (max-width: 490px) {  
  font-size: 15px;
}
`
export const Ptitle = styled.p`
color: #fff;
font-size: 15px;
color: #fff;
@media (max-width: 490px) {  
  font-size: 10px;
}
`
export const InfoDiv = styled.div`
position: absolute;
bottom:0%;
padding: 20px;
line-height: .8;
`