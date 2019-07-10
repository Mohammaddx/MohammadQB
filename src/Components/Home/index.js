import React  ,{Component} from 'react';
import ReactWOW from 'react-wow';
import {SocialMedia , SocialMediaSpan , Fawsome , ListItem , Item , ALink , Title , MeDiv ,
     HomeImg, InfoDiv , SpanTitle , Ptitle , Container } from './style';
import '../../hover.css';
import '../../animate.css';
import WaterWave from 'react-water-wave';
import image from './background.jpg';
import profilePic from './b_me.png';
import $ from 'jquery';

class Home extends Component {
   
    componentDidMount(){
        $(document).ready(function(){
            $('.ul').hide();
            $('.ul').slideUp();
             var switchME = false;
             $('.SM').click(function(){
                 if(switchME == false){
                     $('.ul').slideDown(500);
                     switchME = true;
                 }
                 else {
                    if(switchME == true){
                        $('.ul').slideUp();
                        switchME = false;
                 }
                }    
             });
        });
    }
    render() { 
        return ( 
            <WaterWave
    imageUrl={image}
  >
    {methods => (
      <Container>
          <SocialMedia>
             
          <SocialMediaSpan className="SM"><i class="fas fa-globe"></i></SocialMediaSpan>      
              
              <Fawsome>
          <ListItem className="ul">
              <Item><ALink href="https://www.facebook.com/profile.php?id=100013056635669" target="_blank">
                   <i className="fab fa-facebook-square hvr-buzz-out" id="iHome"></i></ALink>
                   </Item>

              <Item><ALink href="https://www.instagram.com/mohammadahmad2871/" target="_blank"> 
              <i className="fab fa-instagram hvr-buzz-out"></i></ALink>
              </Item>

              <Item><ALink href="https://twitter.com/MoahmmadAhamd" target="_blank">  
              <i className="fab fa-twitter-square hvr-buzz-out"></i></ALink>
              </Item>

              <Item><ALink href="https://github.com/" target="_blank">
                  <i className="fab fa-github hvr-buzz-out"></i></ALink>
                  </Item>

              <Item><ALink href="https://www.pinterest.com/pin/835628905836392676/" target="_blank">
                  <i className="fab fa-pinterest hvr-buzz-out"></i></ALink>
                  </Item>

              <Item><ALink href="https://www.linkedin.com/in/mohammad-ahmad-4b6a30175/" target="_blank">
                  <i className="fab fa-linkedin hvr-buzz-out"></i></ALink>
                  </Item>
          </ListItem>
      </Fawsome>
          </SocialMedia>

     <MeDiv>
     <ReactWOW animation='flip'>
         <HomeImg src={profilePic} />
         </ReactWOW>

         <ReactWOW animation='fadeInUp'>
         <Title>Mohammad Ahmad</Title>
         </ReactWOW>
     </MeDiv>
     
     <InfoDiv>
     <ReactWOW animation='fadeInUp'>
         <SpanTitle>Front-End Developer</SpanTitle>
         <Ptitle>I'm at your service</Ptitle>
         </ReactWOW>
     </InfoDiv>

  </Container>
    )}
  </WaterWave>
 
         );
    }
}
 
export default Home;


