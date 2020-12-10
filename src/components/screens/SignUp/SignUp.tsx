import React, { Component } from 'react';
import {connect} from 'react-redux';

class SignUp extends Component{
    render(){
        console.log(this.props);
        return(
            <div className="singup">
                <input type="text" name="user" id=""/>
                <input type="text" name="pass" id=""/>
                <button className="button">Guardar usuario</button>
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
