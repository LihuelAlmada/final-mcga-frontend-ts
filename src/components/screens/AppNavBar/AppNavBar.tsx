import './app.css';
import React, { Component, Fragment, useState } from 'react';
//import { Form, Field } from 'react-final-form';
import {Link} from 'react-router-dom';

const AppNavbar = () => {
    return(
        <div className="wrapper">
            <div className="header">
                <h1>Altas Notas</h1>
            </div>
            <div className="navbar">
                <Link to = "/login">
                    <button className="button">Login</button>
                </Link>
                <Link to = "/register">
                    <button className="button">Register</button>
                </Link>
                <Link to = "/home">
                    <button className="button">Home</button>
                </Link>
            </div>
        </div>    
    );
}


export default AppNavbar;

 