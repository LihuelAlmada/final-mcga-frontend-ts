import './signup.css';
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {IAuthReduxProps, ISignUp} from '../../../interfaces';
import { Form, Field } from 'react-final-form';
import {register} from '../../../store/user/actions';
import {clearErrors} from '../../../store/error/action'
const SignUp = ({
    register,
    //isAuthenticated,
    //error,
  }: ISignUp) => {
    const onSubmit =(e: any) => {
        const userName = e.userName
        const email = e.email
        const password = e.password
        const user = {
            userName: userName,
            email: email,
            password: password
        };
        console.log("paso a user")
        register(user);
        //<Link to="/login"/>
    }
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
                            <button className="add" type="submit">Register</button>
                        </div>
                    </div>
                    <Link to = "/home">
                        <button className="button Home">Home</button>
                    </Link>
                    <Link to = "/notes">
                        <button className="button Home">Notas</button>
                    </Link>
                </form>
                
            )}
        />
    )
}

const mapStateToProps = (state: IAuthReduxProps) => ({
   /* isAuthenticated: state.auth.isAuthenticated,
    error: state.error*/
});
export default connect(mapStateToProps, { register, clearErrors })(SignUp);
