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
    font-size:14px;
    color: rgba(0,0,0,0.6);
    word-spacing: 7px;
}
`;
export default Wrapper;

