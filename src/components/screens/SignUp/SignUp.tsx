import './signup.css';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class SignUp extends Component{
    render(){
        console.log(this.props);
        return(
            <div className="signup">
                <h2 className='head'>Sign Up</h2>
                <div className="saveUser">
                    <input className="" type="text" name="user" id="user" placeholder="user"/>
                    <input className="" type="text" name="email" id="email" placeholder="email"/>
                    <input className="" type="text" name="pass" id="pass" placeholder="pass"/>
                    <button className="save" >Guardar usuario</button>
                    <Link to = "/home">
                        <button className="button">Home</button>
                    </Link>
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
//
