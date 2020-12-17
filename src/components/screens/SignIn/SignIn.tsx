import './style.css';
import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {IAuthReduxProps, ISignIn} from '../../../interfaces';
import { Form, Field } from 'react-final-form';
import {login} from '../../../store/user/actions';
const SignIn = ({
    login,
    //isAuthenticated,
    //error
  }: ISignIn) => {
    const onSubmit =(e: any) => {
        const userName = e.userName
        const email = e.email
        const password = e.password
        const user = {
            userName: userName,
            email: email,
            password: password
        };
        console.log("paso el login")
        login(user);
        //<Link to="/login"/>
    }
    /*useEffect(() => {
        // Check for register error
        if (error.id === 'LOGIN_FAIL') {
        } else {
            isAuthenticated
        }
    }, [error,isAuthenticated]);*/
    
    return(
        <Form
            onSubmit={onSubmit}
            //initialValues={}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
                <form onSubmit={handleSubmit}>
                    <h2 className="default">Simple Default Input</h2>
                    <div className="container">
                        <div>
                            <label>userName</label>
                            <Field name="userName" component="input" placeholder="userName" />
                        </div>
                        <div>
                            <label>email</label>
                            <Field name="email" component="input" placeholder="email" />
                        </div>
                        <div>
                        <div>
                        <label>password</label>
                            <Field name="password" component="input" placeholder="password" />
                        </div>
                            <button className="add" type="submit">Add</button>
                        </div>
                    </div>
                    <Link to = "/home">
                        <button className="button Home">Home</button>
                    </Link>
                </form>
                
            )}
        />
    )
}
const mapStateToProps = (state: IAuthReduxProps) => ({
    /*isAuthenticated: state.auth.isAuthenticated,
    error: state.error*/
})
export default connect(mapStateToProps, { login})(SignIn);
