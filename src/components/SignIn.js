import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import logo from './logo.PNG';
import './SignIn.css'
function SignIn() {
    return (
        
        
        <Form>
            <div className = "imageLogo">
            <img src={logo} />
            </div>
            <Form.Group className="mb-8 w-1/3 focus:border-[#004e36]">
                <Form.Control placeHolder="Email"></Form.Control>
            </Form.Group>
            <Form.Group className="w-1/3">
                <Form.Control placeHolder="Password"></Form.Control>
            </Form.Group>
        </Form>
    );
}

export default SignIn;