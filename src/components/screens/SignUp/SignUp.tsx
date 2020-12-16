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
                    <input className="box" type="text" name="user" id=""/>
                    <input className="box" type="text" name="pass" id=""/>
                    <button className="save">Guardar usuario</button>
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
