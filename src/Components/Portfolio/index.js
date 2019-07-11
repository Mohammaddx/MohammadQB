import React , {useState , useEffect}from 'react';
import axios from 'axios'
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {PortfolioSection , PortfolioTitle , Image} from './style';
import ReactWOW from 'react-wow';
import '../../hover.css';
import '../../animate.css';
const useStyle = makeStyles(theam =>({
    root: {
        padding: '15px',
        margin: 'auto',
        width:'95%',
    },
    gridItem: {
        padding: '10px',
        margin: 'auto',
        overflow: 'hidden',
    }

}));


function Portfolio(){
    const Classess = useStyle();
   const [image , setImage] = useState([]);
   useEffect( ()=>{
       axios.get("data.json").then(res =>{setImage(res.data.Portfolio)})
   } , [])
  
 
   
   const PortfolioListImages = image.map( (imageItem) =>{
       return(
        
               <Grid item xs={12} sm={4} key={imageItem.id} className={Classess.gridItem}>
                  <ReactWOW animation='slideInUp'>
                  <Image src={imageItem.image} className="zoomable"/>
                  </ReactWOW>
               </Grid>
              
       )
   })
return(
    <PortfolioSection>
        <PortfolioTitle>
            Portfolio</PortfolioTitle>
        
        <Grid container spacing={3} className={Classess.root}>
            {PortfolioListImages}
        </Grid>
        

    </PortfolioSection>
)
}
export default Portfolio;
