import styled from 'styled-components';
import Img from './slide_three.jpg';

const Image = styled.div`
width: 100%;
  height:100%;
  transition:all 0.4s;
  background-size:cover;
  height:300px;
  display: block;
 
  overflow:hidden;
  
  background: linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)) , url(${Img})  no-repeat 50% 20%;
  color:#fff;
  text-align:center;
  .h3{
     margin-top:6%;
     font-weight:400;
     font-size:28px;
  }
  .p{
    font-size:15px;
    font-weight:none;
    color: rgba(255,255,255,0.8);
    word-spacing: 5px;
  }
 

`;
export default Image;