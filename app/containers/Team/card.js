import styled from 'styled-components';

const Card = styled.div`
width:32.60%;
min-width: 250px;
height: 300px;
overflow: hidden;
position: relative;
margin:0 auto 1% auto;
display:inline-block;
border-radius:4px;
&:third-child {
    margin-top: 0;
  }

  
  &:hover .img {
    
    -webkit-filter: blur(3px); /* Safari 6.0 - 9.0 */
    filter: blur(3px);
 
  }

  
  .data{
    position: absolute;
    bottom: 5%;
   
    text-align:center;
    width: 90%;
    height: 80px;
    overflow: hidden;
    left: 0;
    right: 0;
    color:fff;
    margin: 0 auto;
    padding: 10px 5%;
    box-sizing: border-box;
    opacity: 0;
    transition: all 0.4s
  }


  &:hover .data{
    width: 100%;
    height: 50%;
    bottom: 20%;
   
    opacity: 0.7;
    color:#fff;
    padding:30px 10%
  }
  .data h2{
    margin: 0 0 5px 0;
   
  }


  .data p {
    opacity: 0;
    text-align:justify;
    transition: all 0.2s
    
  }

  &:hover.card .data p,.card .data a {
    opacity: 1
  }
  &:hover .data a{
      opacity:1;
  }

  .data h2 {
    margin: 0 0 5px 0;
    transition:color 0.4s
    opacity:1;
  }
 
  
  .data a {
  color:#fff;
  text-decoration:none;
  padding:20px;
  
  opacity:0}

&:hover .data a card h2{
    color:#fff
  }

 
  
`;
export default Card;
