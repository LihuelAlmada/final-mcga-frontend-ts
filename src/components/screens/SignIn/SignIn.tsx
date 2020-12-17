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
    return(
        <Form
            onSubmit={onSubmit}
            //initialValues={}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
                <form onSubmit={handleSubmit}>
                    <h2 className="text-center">SignIn</h2>
                    <hr/>
                    <div className="mt-5">
                        <div className="row justify-content-center">
                            <div className="col-12 col-sm-8 col-md-6 col-xl-4">
                                <Field name="userName" component="input" placeholder="userName" className="form-control mb-2"/>
                                <Field name="email" component="input" placeholder="email" className="form-control mb-2"/>
                                <Field name="password" component="input" placeholder="password" className="form-control mb-2"/>
                                <button className="btn btn-success ms mt-2" type="submit">Login</button>
                            </div>
                            <hr/>
                            <div className="d-flex justify-content-around">
                                <Link to = "/home">
                                    <button className="btn btn-danger ms mt-2">Home</button>
                                </Link>
                                <Link to = "/notes">
                                    <button className="btn btn-primary ms mt-2">Home</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <hr/>
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
