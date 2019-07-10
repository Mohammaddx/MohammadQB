import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavbarSection = styled.div`
position: absolute;
border: 1px solid #000;
font-family: 'Nunito', sans-serif;
`
export const NavbarMesnu = styled.span`
z-index: 99;
position:absolute;
float: left;
margin: 20px;
padding-top:10px;
padding-left:5px;
padding-right:5px;
color: #fff;
font-size: 20px;
background-color: dodgerblue;
box-shadow: 1px 1px 10px 1px #aaa;
width: 40px;
height: 40px;
border-radius: 50%;
transition-duration: .3s;
top: 5%;
font-family: 'Nunito', sans-serif;
cursor: pointer;
&:hover{
  background-color: #fff;
  color: #000;
}
`
export const NavUlDiv = styled.div`
overflow: heddin;
width: 100%;
height: 100vh;
background-color: dodgerblue;
font-family: 'Nunito', sans-serif;
z-index:1000;
position: fixed;
`
export const SpanClose = styled.div`
font-size: 30px;
color: #fff;
font-family: 'Nunito', sans-serif;
margin: 50px;
float: left;
cursor: pointer;
position:absolute;
`
export const NavbarUl = styled.ul`
list-style-type: none;
font-family: 'Nunito', sans-serif;
padding: 10px;
position: relative;
top: 20%;
`

export const NavbarItem = styled.li`
display: block;
margin: 5px
font-size: 20px;
font-family: 'Nunito', sans-serif;
padding:10px;
cursor: pointer;
transition-duration: .3s;
color: #fff;
&:hover{
    transform: scale(1.1);

}
`
export const A = styled(NavLink)`
color: #fff;
font-family: 'Courier New', Courier, monospace;
`
