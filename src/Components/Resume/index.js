import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import ReactWOW from 'react-wow';
import '../../hover.css';
import '../../animate.css';
import {ResumeSection , ResumeHeader , ResumeTitle , ResumeETitle , 
    Resumeh4 , ResumeSpan , ResumeP} from './style';
const useStyle = makeStyles({
root: {
    width: '90%',
    margin: 'auto',
    boxShadow: '1px 1px 25px 1px #aaa',
    marginTop: '-20px',
    backgroundColor:'#fff',
    marginBottom: '20px;'
},

exAnded: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '15px',
    width: '80%',
    margin: 'auto',
},
grid: {
    borderBottom: '1px solid #000',
    textAlign: 'left',
}
});

function Resume(){
    const Classess = useStyle();
return(
   
    <ResumeSection>
        <ReactWOW animation='slideInDown'>
        <ResumeHeader>
        <ResumeTitle>Resume</ResumeTitle>
        </ResumeHeader>
        </ReactWOW>

        <ReactWOW animation='slideInUp'>
        <Grid container className={Classess.root} spacing={5}>
            <Grid container sx={12}>
                <ResumeETitle>-Experience-</ResumeETitle>
                <Grid container className={Classess.exAnded}>
                <Grid item xs={12} className={Classess.grid}>
                    <Resumeh4>Full Stack developer</Resumeh4>
                    <ResumeSpan><i class="fas fa-calendar-alt"></i> 17/08/2017 - 21/02/2019 | Freelancer</ResumeSpan>
                    <ResumeP>I worked at freelancer website with team have 10 
                        members like a Front-End Developer and Back-End Developer ,
                         those members from all over the arab world.</ResumeP>
                </Grid>

                <Grid item xs={12} className={Classess.grid}>
                    <Resumeh4>Front-End Developer</Resumeh4>
                    <ResumeSpan><i class="fas fa-calendar-alt"></i> 11/01/2018 - to now | View Platform Company</ResumeSpan>
                    <ResumeP>I trained with View Platform company in Front End field ,
                         then worked with them .</ResumeP>
                </Grid>
            </Grid>

            </Grid>



            <Grid container sx={12}>
                <ResumeETitle>-Eduation-</ResumeETitle>
                <Grid container className={Classess.exAnded}>
                <Grid item xs={12} className={Classess.grid}>
                    <Resumeh4>Full Stack Developer (python)</Resumeh4>
                    <ResumeSpan><i class="fas fa-calendar-alt"></i> 18/02/2018 - 27/03/2018 | One Million Aeab Programmer</ResumeSpan>
                    <ResumeP>I am one of the participants in the initiative of one million
                         Arab programmers in the field of website development and one
                         of the people who got creative and professional
                         evaluation in the field in which I was</ResumeP>
                </Grid>

                <Grid item xs={12} className={Classess.grid}>
                    <Resumeh4>Computer Science</Resumeh4>
                    <ResumeSpan><i class="fas fa-calendar-alt"></i> 07/02/2016 - to now | <abbr title="Palestine Technical University - Kadoorie">PTUK</abbr></ResumeSpan>
                    <ResumeP>
                    Now I am still studying at the university in the field of computer science,
                     and when I get my bachelor's degree I am in the master's degree 
                    </ResumeP>
                </Grid>
            </Grid>
            </Grid>
            
        </Grid>
        </ReactWOW>
    </ResumeSection>
   
)
}
export default Resume;