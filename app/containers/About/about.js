import React from 'react'
import Nature from './Img.js';
import Wrapper from  './wrapper.js';
import Button from './button.js';
import { Link } from 'react-router-dom';
import Wrap from './wrap.js';
import { Helmet } from 'react-helmet';
import H3 from './H3';
import P from './p';
const About = () =>{
return(
<div className="about">
<Helmet>
  <title>About</title>
  <meta
    name="About"
    content="Zypher About"
  />
</Helmet> 
<div className="jumbotron">
 < Nature >
<h2 className="h3">Discover Books,
Explore Events, 
Meet your people</h2>
<p className="p">Read - Your Books, delivered to your doorstep. </p>
<p className="p">Events - Attend amazing events happening in your neighbourhood.</p>
<p className="p">Everything on a single Subscription.</p>
</Nature>
</div>
<br/>
<br/>
<Wrap>
<H3>Culture</H3>
<P>Zypher brings your Favorite Books to your doorstep or Home. Why books, because we know the feel of Books. Either be it Novels or for your Exam Prepartion, Reading books digitally is hard and it never matches the smell and touch of physical books. Place Order for any books you like and it'll be on your way. Browse from over 2K + handpicked books by our bookish Team, who never stop finding their next read.</P>

<H3>The Brand</H3>
<P>Zypher brings your Favorite Books to your doorstep or Home. Why books, because we know the feel of Books. Either be it Novels or for your Exam Prepartion, Reading books digitally is hard and it never matches the smell and touch of physical books. Place Order for any books you like and it'll be on your way. Browse from over 2K + handpicked books by our bookish Team, who never stop finding their next read.
  </P>
</Wrap>
<br/>

<br/>
<Wrapper>
<div className="grid-container">
  <div className="item1"></div>
  <div className="item2"></div>
  <div className="item3"></div>  
  <div className="item4"></div>
  <div className="item5"></div>
</div>
</Wrapper>

<Link to="/"><Button>Apply</Button></Link>



    </div>

);
}
export default About ; 