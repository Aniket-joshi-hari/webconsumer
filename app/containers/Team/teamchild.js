import React from 'react';
import Card from  './card';
import Img from './Img';

const Terms = (props) =>{
return(
<Card className={props.card}>
  <Img className="img" src={props.src} alt="" />
  <div className="data">
  <div className="container">
    <h2>{props.heading}</h2>
    <i>{props.paratext}</i>
    <br/>
    <a href={props.facebookUrl} ><i className="fab fa-facebook-f" style={{color:' rgb(68,130,250)',fontSize:'28px',marginTop:'10px'}}></i></a>
   <a href={props.twitterUrl}><i class="fab fa-linkedin-in" style={{color:'#38A1F3',fontSize:'28px',marginTop:'10px'}}></i></a>
   </div>
  </div>
</Card>
);
}
export default Terms; 