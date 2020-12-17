//import './app.css';
import React, { Component, Fragment, useState } from 'react';
//import { Form, Field } from 'react-final-form';
import {Link} from 'react-router-dom';

const AppNavbar = () => {
    return(
        <div className="navbar navbar-dark bg-dark extra-holder">
            <div className="header">
                <h1>Altas Notas</h1>
            </div>
            <div className="navbar">
                <Link to = "/login">
                    <button className="btn btn-dark mr-2">Login</button>
                </Link>
                <Link to = "/register">
                    <button className="btn btn-dark mr-2">Register</button>
                </Link>
                <Link to = "/home">
                    <button className="btn btn-dark mr-2">Home</button>
                </Link>
            </div>
        </div>    
    );
}


export default AppNavbar;

 