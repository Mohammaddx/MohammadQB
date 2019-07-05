import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import image from './b_me.png';
import {AboutSection , AboutTitle , AboutImg , AboutInfo ,
     AboutName , AboutMark , AboutPar , AboutI , Aboutlittle ,
      Aboutlittlespan , AboutButton} from './style';


const useStyle = makeStyles({
    root:{
        width:'75%',
        height: 'auto',
        backgroundColor: '#000',
        padding: '10px',
        borderRadius: '10px',
        margin: 'auto'
    },
    imgContainer: {
        maxWidth: '33.3333%',
        padding: '10px'
    }
});
function About(){
    const Classess = useStyle();
return(
    <AboutSection>

        <AboutTitle>About Me</AboutTitle>

        <Grid container spacing={3} className={Classess.root}>

            <Grid container xs={12}>

            <Grid item xs={12} sm={6} className={Classess.imgContainer}>
                
                    <AboutImg src={image} />
            </Grid>

            <Grid item xs={12} sm={6} className={Classess.infoDiv}>
                
                <AboutInfo>
                    <AboutName>Mohammad Ahmad</AboutName>
                    <AboutMark><i className="fas fa-map-marked-alt"></i>   Jenin, Palestine</AboutMark>
                    <AboutPar>Welcome Sir...<br/>
My name is Mohamed Qablah, a student at the Palestinian Technical 
University-Kadoorie , I'm studying computer science , I'm a Front-End and 
Back-End Developer , I worked at Freelancer for two years with a team ,
 I was the supervisor of 3 teams in Freelancer of my establishment , 
 These teams are Android, Web, Desktops ,I am one of the participants 
 in the initiative of one million Arab programmers in the field of website
  development and one of the people who got creative and professional 
  evaluation in the field in which I was</AboutPar>
                </AboutInfo>
            </Grid>

            </Grid>

            <Grid container spacing={7}>
                <Grid item xs={12} sm={3}>
                   
                       <div className="Experince">
                       <AboutI className="fas fa-briefcase"></AboutI>
                           <Aboutlittle><span>3 Years Job</span> <Aboutlittlespan>Experince</Aboutlittlespan></Aboutlittle>
                       </div>

                </Grid>

                <Grid item xs={12} sm={3}>
                
                       <div className="Jobs">
                       <AboutI className="fas fa-check-circle"></AboutI>
                           <Aboutlittle><span>106+ Projects</span> <Aboutlittlespan>Completed</Aboutlittlespan></Aboutlittle>
                       </div>

                   
                </Grid>

                <Grid item xs={12} sm={3}>
                
                       <div className="Freelancer">
                       <AboutI className="fas fa-user-circle"></AboutI>
                           <Aboutlittle><span>Freelancer</span> <Aboutlittlespan>Available</Aboutlittlespan></Aboutlittle>
                       </div>

                   
                </Grid>

                <Grid item xs={12} sm={3}>
                
                       <AboutButton><i class="fas fa-cloud-download-alt"></i> Downlaod CV</AboutButton>

                   
                </Grid>
            </Grid>
        </Grid>
    </AboutSection>
)
}
export default About;