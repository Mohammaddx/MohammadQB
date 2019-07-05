import React from 'react'
import {Fawsome , ListItem , Item , ALink , Title , Ptitle , Container } from './style';
import '../../hover.css';
import WaterWave from 'react-water-wave';
import image from './background.jpg';
function Home(){
return(

    <WaterWave
    imageUrl={image}
  >
    {methods => (
      <Container>
      <Fawsome>
          <ListItem>
              <Item><ALink href="https://www.facebook.com/profile.php?id=100013056635669" target="_blank">
                   <i className="fab fa-facebook-square hvr-buzz-out"></i></ALink>
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
      <div className="title">
          <Title><strong>Mohammad Ahmad</strong></Title>
          <Ptitle>Front End Developer</Ptitle>
      </div>
  </Container>
    )}
  </WaterWave>
  /*
    <div className="container">
        <Fawsome>
            <ListItem>
                <Item><ALink href="https://www.facebook.com/profile.php?id=100013056635669" target="_blank">
                     <i className="fab fa-facebook-square hvr-buzz-out"></i></ALink>
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
        <div className="title">
            <Title><strong>Mohammad Ahmad</strong></Title>
            <Ptitle>Front End Developer</Ptitle>
        </div>
    </div>*/
)
}
export default Home;