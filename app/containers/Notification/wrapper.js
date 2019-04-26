import styled from 'styled-components';

const Wrapper= styled.div`
max-width: 90%;
margin: 0 auto;
display: flex;
min-height: 100%;
padding: 30px 16px;
flex-direction: column;

.ulElements{
    font-size:12px;
}
.headingNumber{
    font-size:22px;
    font-weight:500;
}

.paraSize{
    font-size:12px;
}
.time-label >span{
    background:#3b5998 !important;
}
.time-line >li >i {
    border:2px solid red !important;
}
`;
export default Wrapper;

