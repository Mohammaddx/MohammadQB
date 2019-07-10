import React , {useEffect} from 'react';
import {NavLink} from 'react-router-dom'
import ReactWOW from 'react-wow';
import '../../hover.css';
import $ from 'jquery'
import { NavbarSection , NavbarMesnu , NavUlDiv , NavbarUl , NavbarItem , A , SpanClose} from './style'

function Navbar(){
useEffect(()=>{
    $(document).ready(function(){
        $('.NavClose').hide();
        $('.close').click(function(){
           $('.NavClose').fadeOut();
        });

        $('.menuSpan').click(function(){
            $('.NavClose').fadeIn();
         });

         $('.item').click(function(){
            $('.NavClose').fadeOut();
         });
    });
})
    
    return(
<NavbarSection>
    <NavbarMesnu className="menuSpan"><i class="fa fa-align-left"></i></NavbarMesnu>
    <NavUlDiv className="NavClose">
        
            <div>
                <SpanClose className="close"><i class="fas fa-times-circle"></i></SpanClose>
            </div>

     <NavbarUl className="dul"> 
        <ReactWOW animation="flipInX">
        <NavbarItem className="item"><A to="/Home" exact><i class="fas fa-home"> HOME</i></A></NavbarItem>
        </ReactWOW>

            <ReactWOW animation="flipInX">
            <NavbarItem className="item"><A to="/About" exact><i class="fas fa-user-circle"> ABOUT</i></A></NavbarItem>
            </ReactWOW>

            <ReactWOW animation="flipInX">
            <NavbarItem className="item"><A to="/Resume" exact><i class="fas fa-address-book"> RESUME</i></A></NavbarItem>
            </ReactWOW>

            <ReactWOW animation="flipInX">
            <NavbarItem className="item"><A to="/Portfolio" exact><i class="fas fa-id-card-alt"> PORTFOLIO</i></A></NavbarItem>
            </ReactWOW>

            <ReactWOW animation="flipInX">
            <NavbarItem className="item"><A to="/Contact" exact><i class="fas fa-envelope-open-text"> CONTACT</i></A></NavbarItem>
        </ReactWOW> 
        </NavbarUl>
    </NavUlDiv>
</NavbarSection>
    )
}
export default Navbar;

