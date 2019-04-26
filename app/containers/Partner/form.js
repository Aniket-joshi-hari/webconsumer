import React,{Component} from 'react';



class Form extends Component {
state={
  name:'',
  city:'',
  number:''
};



nameChangeHandler =(e) => {
  this.setState({
    name:e.target.value
  });


  }

  cityChangeHandler =(e) => {
    this.setState({
      city:e.target.value
    });


    }


    numberChangeHandler =(e) => {
      this.setState({
        number:e.target.value
      });
  
  
      }
  render(){

    console.log(this.state);

    return(
        <div className="ui form">
        <div className="three fields">
          <div class="field">
            <label>Name</label>
            <input type="text" placeholder="First Name" value={this.props.name}  onChange={ (e) => this.props.nameChangeHandler(e)}/>
          </div>
          <div className="field">
            <label>City</label>
            <input type="text" placeholder="Middle Name"  value={this.props.city} onChange={ (e) => this.props.cityChangeHandler(e)}/>
          </div>
          <div className="field">
            <label>Number</label>
            <input type="text" placeholder="Last Name" value={this.props.number} onChange={ (e) => this.props.numberChangeHandler(e)}/>
          </div>
        </div>
        <button className="button"  onClick={() => this.props.SubmitForm(this.state.name,this.state.city,this.state.number)}>Sinup </button>
      </div>
      


    );
  }
}

export default Form;