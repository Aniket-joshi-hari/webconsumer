import styled from 'styled-components';
import img6 from './slide_three.jpg';

const Wrapper = styled.div`
.grid-container {
    width:90%;
    margin:auto;
    display: grid;
    grid-template-columns: auto auto auto auto auto auto;
    grid-gap: 10px;
    background-color: #fff;
    padding:10px;
    padding-bottom:15px;
   
  }
  
  .grid-container > div {
    background-color: rgba(255, 255, 255, 0.8);
    text-align: center;
    padding: 20px 0;
    font-size: 30px;
  }
  
  .item1 {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start:1;
    grid-row-end:20;
    background: url(${img6}) no-repeat 50% 30% ;
    height:454px;
  }
  .item2{
    grid-column-start: 5;
    grid-column-end: 7;
    grid-row-start:1;
    grid-row-end:10;
    background: url(${img6})no-repeat 50% 30%;
    height:300px;
  }
  .item3{
    grid-column-start: 5;
    grid-column-end: 7;
    grid-row-start:10;
    grid-row-end:20;
    background: url(${img6}) no-repeat 50% 30%;
    height:300px;
  }

  .item4{
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start:15;
    grid-row-end:40;
    background: url(${img6}) no-repeat 50% 30%;
    height:450px;
  }
  .item5{
    grid-column-start: 5;
    grid-column-end: 7;
    grid-row-start:20;
    grid-row-end:30;
    background: url(${img6}) no-repeat 50% 30%;
    height:295px;
  }


  @media (max-width: 700px) {
   .item1{
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-start:1;
    grid-row-end:20;
   }


   .item2{
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-start:20;
    grid-row-end:40;
    height:454px;
   }

   .item3{
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-start:40;
    grid-row-end:60;
    height:454px;
   }

   .item4{
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-start:60;
    grid-row-end:80;
    height:454px;
   }

   .item5{
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-start:80;
    grid-row-end:100;
    height:454px;
   }
  }
`;
export default Wrapper;