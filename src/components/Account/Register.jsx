import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login/Login.css";


import {


} from "../../server";

export function Register() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    useEffect(() => {
        const fetchAPI = async () => {

        };
        fetchAPI();
    }, []);

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        const form = new FormData();
        form.append("name",name);
        console.log(form);
    }



    return (

        <div className="main-container">
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <nav>
                                <ul className="menu">
                                    <li className="nav-hover"><a href="/">Home</a></li>
                                    <li className="nav-hover">
                                        <div className="login-templeta">
                                            <a href="/login">Login</a>
                                        </div>
                                    </li>
                                    <li className="nav-hover">
                                        <div className="login-templeta">
                                            <a href="#">Register</a>
                                        </div>
                                    </li>
                                </ul>

                            </nav>
                        </div>
                    </div>
                </div>

            </div>
            <div className="Login">
                <h2 className="name-login">Movie Login</h2>
                <Form onSubmit={handleSubmit}>
                <RegisterForm id="name" lable="Name" type="text" value={name} change = {(event) => setName(event.target.value)}/>
                <RegisterForm id="email" lable="Email" type="email" value={email} change = {(event) => setEmail(event.target.value)}/>
                <RegisterForm id="password" lable="Password" type="password" value={password} change = {(event) => setPassword(event.target.value)}/>
                <RegisterForm id="confirmpassword" lable="Confirm Password" type="password" value={confirmPassword} change = {(event) => setConfirmPassword(event.target.value)}/>
                    <Button block size="lg" type="submit" disabled={!validateForm()}>
                        Register
                    </Button>
                </Form>
            </div>
        </div>

    );
}
function RegisterForm(props) {
    return (
        <Form.Group size="lg" controlId={props.id}>
            <Form.Label>{props.lable}</Form.Label>
            <Form.Control
                type={props.type}
                value={props.name}
                onChange={props.change}
            />
        </Form.Group>

    );
}