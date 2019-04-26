import React from 'react'
import Wrapper from './wrapper';
import Timeline from 'react-time-line';
const Notification = () =>{
    const events = [
        {ts: "2019-04-11T12:12:46.587Z", text: 'Logged in'},
        {ts: "2019-04-11T12:12:46.587Z", text: 'you like this book'},
        {ts: "2019-04-11T12:12:46.587Z", text: 'Like Book'},
        {ts: "2019-03-18T12:21:46.587Z", text: 'Logged in'},
        {ts: "2019-03-18T12:20:46.587Z", text: 'You like this book'},
        {ts: "2019-03-18T12:20:46.587Z", text: 'Like Book'},
        {ts: "2019-03-16T12:22:46.587Z", text: 'Registred'},
        {ts: "2019-03-16T12:21:46.587Z", text: 'Clicked Cart'},
        {ts: "2019-03-16T12:20:46.587Z", text: 'Clicked Checkout'},

        {ts: "2019-02-16T12:22:46.587Z", text: 'Registred'},
        {ts: "2019-02-16T12:21:46.587Z", text: 'Clicked Cart'},
        {ts: "2019-02-16T12:20:46.587Z", text: 'Clicked Checkout'},

        {ts: "2019-01-16T12:22:46.587Z", text: 'Registred'},
        {ts: "2019-01-16T12:21:46.587Z", text: 'Clicked Cart'},
        {ts: "2019-01-16T12:20:46.587Z", text: 'Clicked Checkout'},

        {ts: "2019-01-13T12:22:46.587Z", text: 'Registred'},
        {ts: "2019-01-13T12:21:46.587Z", text: 'Clicked Cart'},
        {ts: "2019-01-13T12:20:46.587Z", text: 'Clicked Checkout'},


        {ts: "2018-12-16T12:22:46.587Z", text: 'Registred'},
        {ts: "2018-12-16T12:21:46.587Z", text: 'Clicked Cart'},
        {ts: "2018-12-16T12:20:46.587Z", text: 'Clicked Checkout'},


       
      ];
      
return(
<Wrapper>



<Timeline items={events} />

</Wrapper>



);
}
export default Notification; 