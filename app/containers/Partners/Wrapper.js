import styled from 'styled-components';

const Wrapper= styled.div`
width:100%;
overflow:hidden;
.banner {
    position: relative;
    width: 100%;
    height: 34rem;
    padding: 0 5%;
    overflow: hidden;
    backface-visibility: hidden;
  }

  .banner .background {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    transform: translate3d(0,0,0) scale(1.25);
    background: black url(https://images.unsplash.com/photo-1531971085967-431db1ec65a2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=212d5ac2d6b763d2f2168d4f0a85b36c&auto=format&fit=crop&w=2250&q=80) no-repeat center center; 
    background-size: cover;
  }
  .btn{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    background-color: #008CBA;
    color: white;
    font-size: 16px;
    padding: 12px 24px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    z-index:999;
  }

  hover :.btn{
    color:black;
  }
  .center{
    text-align:center;
  }

  
  

  .grid-container {
    margin-top:30px;
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 10px;
    background-color: #fff;
    padding: 10px;
  }
  
  .item{
    display:flex;
    flex-direction:row;
  }
  .grid-container > div > div{
   
    justify-content:space-around;
    background-color: rgba(255, 255, 255, 0.8);
    text-align: center;
    padding: 38px 0;
    font-size: 30px;
  }

  .grid-container > div > span{
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    height:100px;
    padding:0px;
    margin:0px;
  }
  
  .box-headings{
    margin:0px 10px 0px 10px;
    font-size:18px;
  }
  .box-para{
    margin:0px 0px 0px 10px;
    font-size:14px;
  }
  
  .grid-container > div >div{
    height:100px;
    width:100px;
    background:#00ffa4;
  }
  .comments{
    margin-top:20px;
    width:95%;
    margin:auto;
  }
  @media screen and (max-width: 768px) {
   
   .grid-container {
    margin-top:30px;
    display: grid;
    grid-template-columns: auto auto ;
    grid-gap: 10px;
    background-color: #fff;
    padding: 10px;
  }
  }

  @media only screen and (max-width: 600px) {
    .grid-container {
      margin-top:30px;
      display: grid;
      grid-template-columns: auto  ;
      grid-gap: 10px;
      background-color: #fff;
      padding: 10px;
    }

  }
  



  body {font-family: sans-serif;}
p {color: #666;}

h2 {
  font-size: 2em;
  color: #e74c3c;  
}
.centered {
    margin: 0 auto;
    padding: 0 1em;
}

@media screen and (min-width: 52em) {
    .centered {
        max-width: 95%;
    }
    .card{
      border: 3px 3px 8px hsl(0, 0%, 45%);
    }
}

@media screen and (max-width: 640px) {
  .card {
  	box-shadow: 3px 3px 8px hsl(0, 0%, 5%);
  }
}
/*--------------------------------------------------------------
Header styles minus menu
--------------------------------------------------------------*/

.masthead {
   
  	
}

.site-title {
   
  
    font-size: 2.9em;
    font-weight: bold;
    text-align: left;
    margin-top:50px;
    color: rgba(0,0,0,0.8) !important;
}
.para{
  font-size: 1.4em;

  text-align: left;
  color: rgba(0,0,0,0.6) !important;
  margin-bottom:50px;
}
@media screen and (min-width: 44.44em) {
    .site-title {
        font-size: 2em;
    }
}
    
@media screen and (min-width: 50em) {
    .site-title {
        font-size: 2.5em;
    }

}

.site-title a {
    color: hsl(5, 45%, 95%);
    text-decoration: none;
}

.site-title a {
    text-decoration: underline;
}

/* Card Based Layout - Base styles */

.site-title {
	color: white;
}

.card {
	background: white;
	margin-bottom: 2em;	
}

.card a {
	color: black;
	text-decoration: none;
}
.card h2{
  font-size:24px;
  text-align:center;
}

.card a {
	box-shadow: 3px 3px 8px hsl(0, 0%, 65%);
}

.card a:hover {
  box-shadow: 3px 3px 8px hsl(0, 0%, 5%);
  transition:0.5s;
}

.card-content {
	padding: 1.4em;
}

.card-content h2 {
	margin-top: 0;
	margin-bottom: .5em;
	font-weight: normal;
}

.card-content p {
	font-size: 95%;
}

img {
  width: 100%;
  height: auto;
}

/* Flexbox styles */
@media screen and (min-width: 40em) {  
  .cards {
    margin-top: -1em;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .card {
    margin-bottom: 1em;
    display: flex;
    flex: 0 1 calc(50% - 0.5em);
    /* width: calc(50% - 1em); */
  }

  
  
} /* mq 40em*/

@media screen and (min-width: 60em) {
  .cards {
    margin-top: inherit;
  }
  
  .card {
    margin-bottom: 2em;
    display: flex;
    flex: 0 1 calc(33% - 0.5em);
    /* width: calc(33% - 1em); */
  }
} /* mq 60em*/
  
.form-wrapper{
  width:100%;
  margin:auto;
  background:#171e2f;
  height:100%;
  padding:29px 10px;
  overflow:hidden;
}
.ui.form .field > label{
  color:#fff;
}
.form-heading{
  font-size:48px;
  font-weight:700;
  line-height:1;
  margin-bottom:20px;
  color:#fff;
  word-spacing:5px;
  font-family: "Montserrat", sans-serif;
}
.zypher{
  color:#00ffa4;
}
.button{
  color:#fff;
  background:#1dda94;
  padding:15px;
  border-radius:5px;
  width:20%;
}
.button button:hover{
  background:green;
}
`;
export default Wrapper;

