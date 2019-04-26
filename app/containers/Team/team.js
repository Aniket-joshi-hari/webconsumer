import React, { Component } from 'react';
import Section from './section';
import Inner from './inner.js';
import H1 from './H1';
import TeamMember from './teamchild.js';
import P from './P';
import Twitter from './Twitter.js';


class Team extends Component {
state= {
  team:[{id:'dfjkj',card:'card',img:require('./slide_one.jpg'),headingText:'Richard Z. Kruspe',paraText:'Product Designer',facebook:'',twitter:''},
  {id:'lkhfk',card:'card',img:require('./slide_one.jpg'),headingText:'Richard Z. Kruspe',paraText:'Product Designer',facebook:'',twitter:''},
  {id:'wrmvf',card:'card',img:require('./slide_one.jpg'),headingText:'Richard Z. Kruspe',paraText:'Product Designer',facebook:'',twitter:''},
  {id:'plark',card:'card',img:require('./slide_one.jpg'),headingText:'Richard Z. Kruspe',paraText:'Product Designer',facebook:'',twitter:''},
  {id:'snkfl',card:'card',img:require('./slide_one.jpg'),headingText:'Richard Z. Kruspe',paraText:'Product Designer',facebook:'',twitter:''},
  {id:'lmdjv',card:'card',img:require('./slide_one.jpg'),headingText:'Richard Z. Kruspe',paraText:'Product Designer',facebook:'',twitter:''},
  {id:'qwpld',card:'card',img:require('./slide_one.jpg'),headingText:'Richard Z. Kruspe',paraText:'Product Designer',facebook:'',twitter:''},
  {id:'xldmr',card:'card',img:require('./slide_one.jpg'),headingText:'Richard Z. Kruspe',paraText:'Product Designer',facebook:'',twitter:''},
  {id:'apkdf',card:'card',img:require('./slide_one.jpg'),headingText:'Richard Z. Kruspe',paraText:'Product Designer',facebook:'',twitter:''},
  {id:'dfjkl',card:'card',img:require('./slide_one.jpg'),headingText:'Richard Z. Kruspe',paraText:'Product Designer',facebook:'',twitter:''},
  {id:'werfd',card:'card',img:require('./slide_one.jpg'),headingText:'Richard Z. Kruspe',paraText:'Product Designer',facebook:'',twitter:''},
  {id:'cvbnm',card:'card',img:require('./slide_one.jpg'),headingText:'Richard Z. Kruspe',paraText:'Product Designer',facebook:'',twitter:''},
  
]
};
// "http://www.lift-financial.com/perch/resources/team/marktueart-1-w800.jpg" 
    render() {

      const team=
          this.state.team.map((card,index) => {
            return <TeamMember card={card.card} key={card.id}   src={card.img} heading={card.headingText} paratext={card.paraText}  />
          });
        return (
            <Section>
               <H1>Our Team</H1>

               <P>  simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</P>
<br/>
<Inner >

{team}


</Inner>

<div >
  <p align="center"><Twitter href="https://twitter.com/nodws" target="_b">Follow us on Twitter
  </Twitter> </p>
</div>
               
            </Section>
        );
    }
};

export default Team;