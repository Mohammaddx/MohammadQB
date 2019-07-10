import styled from 'styled-components'
import PortfolioBG from './PortfolioBG.jpg' 
export const PortfolioSection = styled.div`
width: 100%;
height: 100%;
font-family: 'Nunito', sans-serif;
padding: 10px;
background-image: linear-gradient(rgba(0,0,0,0.3) , rgba(0,0,0,0.3)) , url(${PortfolioBG});
background-attachment: fixed;
`
export const PortfolioTitle = styled.h1`
color: #fff;
`
export const Image = styled.img`
width:100%;
height: 100%;
margin: auto;
cursor: pointer;
transition: transform .5s ease;
&:hover{
    transform: scale(1.5);
}
`