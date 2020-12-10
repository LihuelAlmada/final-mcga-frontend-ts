import React, { Component } from 'react';
import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';

class SignIn extends Component{
  renderTextField(){
    return (
      <input type="text" name="user" id=""/>
    );
  }
  render(){
      console.log(this.props);
      return(
          <div className="signin">
            <Field name="username" component={this.renderTextField}/>
              
              <input type="text" name="pass" id=""/>
              <button className="button">ingresar</button>
          </div>
      )
  }
}
const mapStateToProps = (state: any) => {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps)(reduxForm({form: 'signIn'}))(SignIn); //el SignIn esta bien, reduxForm esta pidiento algo mas que no se que es
//https://redux-form.com/8.3.0/docs/gettingstarted.md/