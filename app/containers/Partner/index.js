/**
 *
 * Partner
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectPartner from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import Form from './form';


/* eslint-disable react/prefer-stateless-function */
export class Partner extends React.Component {
  
  state={
    name:'',
    city:'',    
    number:''
  }
  render() {

    
    console.log('hey');
    return (
      <div>
       <h1> <FormattedMessage {...messages.header} /></h1>
      
       <Form   SubmitForm={this.props.submit}  name={this.props.name} city={this.props.city} number={this.props.number}
       nameChangeHandler={this.props.nameChangeHandler(e)} cityChangeHandler={this.props.cityChangeHandler}  numberChangeHandler={this.props.numberChangeHandler} 
       />
        
      
       
      </div>
    );
  }
}
Partner.propTypes = {
  submit: PropTypes.func,
  name:  PropTypes.string,
  city:  PropTypes.string,
  number:  PropTypes.string,
  nameChangeHandler : PropTypes.func,
  cityChangeHandler : PropTypes.func,
  numberChangeHandler : PropTypes.func,
  
};

const mapStateToProps = createStructuredSelector({
  partner: makeSelectPartner(),
});

// function mapDispatchToProps(dispatch) {
//   return {
//     dispatch,
//   };
// }
export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
},
};
}


const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'partner', reducer });
const withSaga = injectSaga({ key: 'partner', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Partner);
