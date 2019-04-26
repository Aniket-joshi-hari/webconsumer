import styled from 'styled-components';

const Wrapper= styled.div`
max-width: 100%;
margin-left:auto;
margin-right:auto;
margin-top:auto; 
width: 100%;
height: 50px;



.footer {
    width: 100%;
    position: relative;
    height: auto;
    background-color: #fafafa;
    
  }
  .footer .col {
    width: 190px;
    height: auto;
    margin-top:20px;
    float: left;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    padding: 0px 20px 20px 20px;
  }
  .footer .col-zypher{
      width:380px;
      height:auto;
      margin-top:20px;
      float:left;
      box-sizing: border-box;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      padding: 0px 20px 20px 20px;
  }
  .footer .col-zypher h1{
    margin: 0px;
    padding: 0;
    font-family: inherit;
    font-size: 12px;
    line-height: 20px;
    padding: 20px 0px 5px 0px;
    color: #000;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.250em;
  }
  
  .footer .col-zypher ul {
  
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  
  .footer .col-zypher ul li {
    color: rgba(0,0,0,0.8);
    font-size: 14px;
    font-family: inherit;
    font-weight: 400;
    padding: 5px 0px 5px 0px;
    cursor: pointer;
    transition: .2s;
    -webkit-transition: .2s;
    -moz-transition: .2s;

  }

  .footer .col h1 {
    margin: 0px;
    padding: 0;
    font-family: inherit;
    font-size: 12px;
    line-height: 20px;
    padding: 20px 0px 5px 0px;
    color: #000;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.250em;
  }
  .footer .col ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  .footer .col ul li {
    color: rgba(0,0,0,1);
    font-size: 14px;
    font-family: inherit;
    font-weight: 400;
    padding: 5px 0px 5px 0px;
    cursor: pointer;
    transition: .2s;
    -webkit-transition: .2s;
    -moz-transition: .2s;
  }
  
    
  
  .social ul li {
    display: inline-block;
    padding-right: 5px !important;
  }
  
  .footer .col ul &:hover li {
    color: #ffffff;
    transition: .1s;
    -webkit-transition: .1s;
    -moz-transition: .1s;
  }
  .clearfix {
    clear: both;
  }
  @media only screen and (min-width: 1280px) {
    .contain {
      width: 1200px;
      margin: 0 auto;
    }
  }
  @media only screen and (max-width: 1139px) {
    .contain .social {
      width: 1000px;
      display: block;
   
    }
    .footer .col h1 {
        font-size: 14px;
      }
    .social h1 {
      margin: 0px;
    }
  }
  @media only screen and (max-width: 950px) {
    .footer .col {
      width: 33%;
    }
    .footer .col-zypher{
        width:66%;
        margin:0;

    }
    .footer .col h1 {
      font-size: 14px;
    }
    .footer .col ul li {
      font-size: 13px;
    }
  }
  @media only screen and (max-width: 500px) {
      .footer .col {
        width: 50%;
      }
      .footer .col h1 {
        font-size: 14px;
      }
      .footer .col ul li {
        font-size: 13px;
      }
  }
  @media only screen and (max-width: 340px) {
    .footer .col {
      width: 100%;
    }
  }



`;
export default Wrapper;

