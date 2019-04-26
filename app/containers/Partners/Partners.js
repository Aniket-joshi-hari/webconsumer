import React,{Component} from 'react'
import Wrapper from './Wrapper';
import { Helmet } from 'react-helmet';
import Button from './Button.js';
import img from './slide_one.jpg';
import { connect } from "react-redux";

class  Partner extends Component {

state={
  name:'',
  city:'',
  number:''
}

NamechangeHandler= (event) => {
this.setState({
  name:event.target.value
})
}
CitychangeHandler= (event) => {
  this.setState({
    city:event.target.value
  })
  
}

NumberchangeHandler= (event) => {
  this.setState({
    number:event.target.value
  })
  
}

render(){
  console.log(this.state);
  console.log(this.props.name);
 return(

  

<Wrapper>

<Helmet>
  <title>Partners</title>
  <meta
    name="Partners"
    content="Zypher Partners"
  />
</Helmet> 
<header className="banner">
  <span className="background"></span>
  <h1>Ken Burns Banner</h1>
  < Button className="btn">Getting Started</Button>
</header>
<br/>

<div className="grid-container">
  <div className="item">
  <div  className="container"></div>
  <span className="innerContainer">
  <h5 className="box-headings">You are Charge </h5>
  <h6 className="box-para">this is a para</h6>
  </span>
  </div>
  <div className="item">
  <div className="container"></div>
  <span className="innerContainer">
  <h5 className="box-headings">You are Charge </h5>
  <h6 className="box-para">this is a para</h6>
  </span>
  </div>
  <div className="item">
  <div></div>
  <span className="innerContainer">
  <h5 className="box-headings">You are Charge </h5>
  <h6 className="box-para"> this is a para</h6>
  </span>
  </div>  
  <div className="item">
  <div className="container"></div>
  <span className="innerContainer">
  <h5 className="box-headings">You are Charge </h5>
  <h6 className="box-para">this is a para</h6>
  </span>
  </div>
  <div className="item">
  <div className="container">
  </div>
  <span className="innerContainer">
  <h5 className="box-headings">You are Charge </h5>
  <h6 className="box-para">this is a para</h6>
  </span>
  </div>
  <div className="item">
  <div className="container">
  </div>
  <span className="innerContainer">
  <h5 className="box-headings">You are Charge </h5>
  <h6 className="box-para">this is a para</h6>
  </span>
  </div>
  
</div>




<header className="masthead clear">
  <div className="centered">

    <div className="site-branding">
      <h1 className="site-title">He said; She said</h1>
      <p className="para"> Here what people had to say about
their Zypher experience</p>
    </div>
   
  </div>
 
</header>


<main className="main-area">

  <div className="centered">

    <section className="cards">

      <article className="card">
        <a href="#">
          <figure className="thumbnail">
          <img src="http://placekitten.com/810/610" alt="meow"/>
          </figure>
          <div className="card-content">
            <h2  className="center">Whiskey</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum explicabo consequatur consectetur fugit molestias perferendis, sint error iste ut, facilis sunt natus optio dolor nesciunt laboriosam obcaecati corporis numquam.</p>
          </div>
          
        </a>
      </article>
 

      <article className="card">
        <a href="#">
          <figure className="thumbnail">
            <img src="http://placekitten.com/800/610" alt="meow"/>
          </figure>
          <div className="card-content">
            <h2>Fluffy</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum explicabo consequatur consectetur fugit molestias perferendis, sint error iste ut, facilis sunt natus optio dolor nesciunt laboriosam obcaecati corporis numquam?</p>
            
          </div>
         
        </a>
      </article>
     

      <article className="card">
        <a href="#">
          <figure className="thumbnail">
            <img src="http://placekitten.com/816/610" alt="meow"/>
          </figure>
          <div className="card-content">
            <h2>Kitty</h2>
            <p>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati recusandae expedita doloribus dicta cumque nostrum, autem eaque soluta atque voluptatem est et, laborum dignissimos error sequi non? Recusandae, aut alias.</p>
          </div>
         
        </a>
      </article>
    

      <article className="card">
        <a href="#">
          <figure className="thumbnail">
            <img src="http://placekitten.com/816/600" alt="meow" />
          </figure>
          <div className="card-content">
            <h2>Patches</h2>
            <p>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati recusandae expedita doloribus dicta cumque nostrum, autem eaque soluta atque voluptatem est et, laborum dignissimos error sequi non? Recusandae, aut alias.</p>
          </div>
         
        </a>
      </article>
      

      <article className="card">
        <a href="#">
          <figure className="thumbnail">
          <img src="http://placekitten.com/820/620" alt="meow"/>
          </figure>
          <div className="card-content">
            <h2>Duchess</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati recusandae expedita doloribus dicta cumque nostrum, autem eaque soluta atque voluptatem est et, laborum dignissimos error sequi non? Recusandae, aut alias.</p>
            
          </div>
          
        </a>
      </article>
   

      <article className="card">
        <a href="#">
          <figure className="thumbnail">
          <img src="http://placekitten.com/810/610" alt="meow"/>
          </figure>
          <div className="card-content">
            <h2>Puchies</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati recusandae expedita doloribus dicta cumque nostrum, autem eaque soluta atque voluptatem est et, laborum dignissimos error sequi non? Recusandae, aut alias.</p>
          </div>
         
        </a>
      </article>
    </section>
  </div>
  <div className="form-wrapper">
  <h3 className="form-heading">Sign up with <span className="zypher">Zypher</span> today</h3>
  <div className="ui form">
  <div className="three fields">
    <div class="field">
      <label>Name</label>
      <input type="text" placeholder="First Name"  value={this.props.name} onChange={() => this.props.NamechangeHandler(event)} />
    </div>
    <div className="field">
      <label>City</label>
      <input type="text" placeholder="Middle Name" value={this.props.city} onChange={()=> this.props.CitychangeHandler(event)}  />
    </div>
    <div className="field">
      <label>Number</label>
      <input type="text" placeholder="Last Name"  value={this.props.number} onChange={()=> this.props.NumberchangeHandler(event)} />
    </div>
  </div>
</div>

<Button className="button"  onClick={() => this.props.SubmitForm(this.state.name,this.state.city,this.state.number)}>Sinup </Button>
</div>
 
</main>
</Wrapper>
);
 }
}

const mapStateToProps = (state) => {
  return {
      name : state.client
  }
}


const mapDispatchToProps = dispatch => {
  return {
      SubmitForm: (name, city,number) => dispatch({type: 'UPDATE_FORM_Data', personData: {name: name, city: city,number: number}}),
      
  }
};
export default  connect(mapStateToProps,mapDispatchToProps)(Partner); 
