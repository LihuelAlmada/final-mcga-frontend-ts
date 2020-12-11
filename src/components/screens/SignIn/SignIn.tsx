import './style.css';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Form, Field} from 'react-final-form'

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
      <h2 className='header'>Sign In</h2>
      <div>
        <label>First Name</label>
        <Field name="firstName" component="input" placeholder="First Name" />
      </div>
      <h2>Render Function as Children</h2>
      <Field name="phone">
        {({ input, meta }) => (
          <div>
            <label>Phone</label>
            <input type="text" {...input} placeholder="Phone" />
            {meta.touched && meta.error && <span>{meta.error}</span>}
          </div>
        )}
      </Field>
      <button className='submit' type="submit">Submit</button>
    </form>
  )}
  />
)
export default SignIn;