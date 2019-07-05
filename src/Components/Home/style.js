import styled ,{keyframes} from 'styled-components'

export const Container = styled.div`
width: 100%;
height: 100vh;
background-image: linear-gradient(rgba(0,0,0,0.6) , rgba(0,0,0,0.6));
`
export const Fawsome = styled.div`
overflow: hidden;
`
export const ListItem = styled.ul`
list-style-type: none;
float: right;
padding: 10px;
`
export const Item = styled.li`
margin: 5px;
font-size: 20px;
`
export const ALink = styled.i`
color: #fff;
cursor: pointer;
&:hover{
    color: aqua;
    transition-duration: 0.5s;
}
`
const Light = keyframes`
from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff;
  }
  to {
    text-shadow: 0 0 20px #fff, 0 0 30px aqua;
  }
`

export const Title = styled.h1`
font-size: 40px;
color: #fff;
text-align: center;
-webkit-animation: ${Light} 1s ease-in-out infinite alternate;
-moz-animation: ${Light} 1s ease-in-out infinite alternate;
animation: ${Light} 1s ease-in-out infinite alternate;
`
export const Ptitle = styled.p`
color: #fff;
text-shadow: 2px 2px 10px aqua;
font-size: 20px;
text-decoration : underline;
text-decoration-color: aqua;

`
