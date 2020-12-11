import './style2.css';
import React, { Component } from 'react';
import {connect} from 'react-redux';

class SignUp extends Component{
    render(){
        console.log(this.props);
        return(
            <div className="signup">
                <h2 className='head'>Sign Up</h2>
                <div>
                <input type="text" name="user" id=""/>
                <input type="text" name="pass" id=""/>
                <button className="button">Guardar usuario</button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state: any) => {
    return {
      user: state.user
    }
} 
export default connect(mapStateToProps)(SignUp);
