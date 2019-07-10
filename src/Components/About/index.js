import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import image from './thatIsMe.jpg';
import ReactWOW from 'react-wow';
import '../../hover.css';
import '../../animate.css';
import {AboutSection , AboutHeader , AboutTitle , AboutImage , AboutGolsSpanTitle ,
    AboutGolsP , AboutGolsSpan , AboutCVButton , A , SpanFont , DivFont } from './style';


const useStyle = makeStyles({
    root:{
        width:'90%',
        height: 'auto',
        padding: '15px',
        borderRadius: '10px',
        margin: 'auto',
        boxShadow: '1px 1px 30px 1px #aaa',
        marginTop: '-20px',
        backgroundColor: '#fff',
    },
    imgContainer: {
        maxWidth: '33.3333%',
        padding: '10px'
    },
    Gols: {
        padding: '20px',
        borderTop: '1px solid #aaa'
    },
    golsItem: {
        padding: '10px'
    }
});
function About(){
    const Classess = useStyle();


    
return(
    <AboutSection>
        <ReactWOW animation='slideInDown'>
        <AboutHeader>
            <AboutTitle>About Me</AboutTitle>
        </AboutHeader>
        </ReactWOW>
        

        <Grid container className={Classess.root}>
            <Grid item xs={12} sm={6}>
            <ReactWOW animation='wobble'>
            <AboutImage src={image} className="hvr-grow"/>
            </ReactWOW>
            </Grid>

            <Grid item xs={12} sm={6}>
            <ReactWOW animation='slideInUp'>
                <p>
                Welcome Sir...<br/>
                My name is <strong>Mohamed Qablah</strong>, a student at the Palestinian 
                Technical University-Kadoorie , I'm studying computer science ,
                 I'm a Front-End and Back-End Developer , I worked at Freelancer
                  for two years with a team , I was the supervisor of 3 teams 
                  in Freelancer of my establishment , These teams are Android,
                   Web, Desktops ,I am one of the participants in the initiative
                    of one million Arab programmers in the field of website 
                    development and one of the people who got creative and 
                    professional evaluation in the field in which I was
                </p>
                </ReactWOW>
            </Grid>

            <Grid container className={Classess.Gols}>
            <Grid item xs={12} sm={3} className={Classess.golsItem}>
            <ReactWOW animation='rollIn'>
                <AboutGolsSpanTitle><i class="fas fa-briefcase"></i></AboutGolsSpanTitle>
                <AboutGolsP>3 Years Job</AboutGolsP>
                <AboutGolsSpan>Experience</AboutGolsSpan>
                </ReactWOW>
            </Grid>

            <Grid item xs={12} sm={3} className={Classess.golsItem}>
            <ReactWOW animation='rollIn'>
            <AboutGolsSpanTitle><i class="fas fa-check-circle"></i></AboutGolsSpanTitle>
                <AboutGolsP>106+ Projects</AboutGolsP>
                <AboutGolsSpan>Completed</AboutGolsSpan>
                </ReactWOW>
            </Grid>

            <Grid item xs={12} sm={3} className={Classess.golsItem}>
            <ReactWOW animation='rollIn'>
            <AboutGolsSpanTitle><i class="fas fa-user-circle"></i></AboutGolsSpanTitle>
                <AboutGolsP>Freelance</AboutGolsP>
                <AboutGolsSpan>Available</AboutGolsSpan>
                </ReactWOW>
            </Grid>

            <Grid item xs={12} sm={3} className={Classess.golsItem}>
            <ReactWOW animation='zoomIn'>
            <AboutCVButton className="hvr-float-shadow"><i class="fas fa-cloud-download-alt"></i> Download CV</AboutCVButton>
            </ReactWOW>
            </Grid>
            </Grid>

            <Grid item xs={12}>
              <DivFont>
              <ReactWOW animation='fadeInUp'>
                  <SpanFont><A href="https://www.facebook.com/profile.php?id=100013056635669" target="_blank"><i class="fab fa-facebook-f"></i></A></SpanFont>
                  <SpanFont><A href="https://twitter.com/MoahmmadAhamd" target="_blank"><i class="fab fa-twitter"></i></A></SpanFont>
                  <SpanFont><A href="https://www.linkedin.com/in/mohammad-ahmad-4b6a30175/" target="_blank"><i class="fab fa-linkedin-in"></i></A></SpanFont>
                  <SpanFont><A href="https://www.instagram.com/mohammadahmad2871/" target="_blank"><i class="fab fa-instagram"></i></A></SpanFont>
                  <SpanFont><A href="https://github.com/" target="_blank"><i class="fab fa-github-alt"></i></A></SpanFont>
                  <SpanFont><A href="https://www.pinterest.com/pin/835628905836392676/" target="_blank"><i class="fab fa-pinterest-p"></i></A></SpanFont>
              </ReactWOW>
              </DivFont>
            </Grid>

        </Grid>
    </AboutSection>
)
}
export default About;