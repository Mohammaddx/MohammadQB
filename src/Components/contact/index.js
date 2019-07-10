import React ,{Component} from 'react';
import Grid from '@material-ui/core/Grid';
import ReactWOW from 'react-wow';
import { makeStyles } from '@material-ui/core/styles';
import '../../hover.css';
import axios from 'axios';
import {ContactSection , ContactHeader , ContactTitle , ContactFrom , InputSubmit , InputFrom , Textarea , InfoSpan , InfoDiv} from './style'

const useStyle = makeStyles(theme =>({
    root: {
        boxShadow: '1px 1px 25px 1px #aaa',
        marginTop: '-20px',
        backgroundColor: '#fff',
        borderRadius: '10px',
        margin: 'auto',
        width: '80%',
        marginBottom: '20px'
    },
    grid: {
        padding: '20px'
    }
}));






function Contact(){
    
        const Classess = useStyle();
        
    return(
        <ContactSection>
            <ContactHeader>
            <ContactTitle>Git in touch</ContactTitle>
            </ContactHeader>
            
            <Grid container className={Classess.root}>
                
              
    
                <Grid item xs={12} sm={6} className={Classess.grid}>
                    <ContactFrom id="contact-form">
                    <ReactWOW animation='zoomInDown'>
                        <InputFrom type="text" placeholder="Name" id="name"/>
                        </ReactWOW>

                        <ReactWOW animation='zoomInDown'>
                        <InputFrom type="text" placeholder="E-mail" id="email"/>
                        </ReactWOW>

                        <ReactWOW animation='zoomInDown'>
                        <Textarea placeholder="Message" id="message"></Textarea>
                        </ReactWOW>

                        <ReactWOW animation='zoomInDown'>
                        <InputSubmit type="submit" value="Submit" className="hvr-grow-shadow"/>
                        </ReactWOW>

                    </ContactFrom>
                </Grid>

                <Grid item xs={12} sm={6}>
                <ReactWOW animation='fadeIn'>
                        <InfoDiv>
                        <InfoSpan><i class="fas fa-envelope"></i> <span>ma3571318z@gmai.com</span></InfoSpan>
                        <InfoSpan><i class="fas fa-phone"></i> <span>+(970) 0592839122</span></InfoSpan>
                        <InfoSpan><i class="fas fa-map-marked-alt"></i> <span>Jenin, Palestine</span></InfoSpan>
                        </InfoDiv>
                        </ReactWOW>
                </Grid>
                </Grid>
  
            

        </ContactSection>
    )

}
export default Contact;


                