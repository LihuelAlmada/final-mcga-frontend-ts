import './signin.css';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Form, Field} from 'react-final-form'
import {Link} from 'react-router-dom';

/*interface Props{
  onSubmit: string,
  validate: string
}*/
const validate= (undefined)
const onSubmit= (onS: string) =>{}
const SignIn = () => (
    <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit }) => (
        <form className='frm' onSubmit={handleSubmit}>
        <h2 className='head'>Sign In</h2>
        <div className="containForm">
        <div>
            <label>First Name</label>
            <Field name="firstName" component="input" placeholder="First Name" />
        </div>
        <h2>Render Function as Children</h2>
        <div>
            <label>Phone</label>
        <Field name="phone" component="input" type="text" placeholder="Phone" />
        </div>
        <button className='submit' type="submit">Submit</button>
        <Link to = "/home">
            <button className="button Home">Home</button>
        </Link>
        <Link to = "/register">
                <button className="button">Register</button>
        </Link>
        </div>
        </form>
    )}
    />
   
)
export default SignIn;