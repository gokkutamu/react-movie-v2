import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../Account/Login/Login.css";
import { useHistory } from "react-router-dom";
import axios from "axios";

import {
    userById

} from "../../server";

export function EditUser({ match }) {
    let params = match.params;
    const [arrayUserByID, setUserById] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        const fetchAPI = async () => {
            setUserById(await userById(params.id));
        };
        fetchAPI();
    }, []);

    // Validatete form
    let history = useHistory();
    function handleSubmit(event) {
        event.preventDefault();
        console.log(name, email, password);
        axios.post(`http://localhost/Passport/public/api/auth/updateUser/${params.id}`, { name, email, password },
            {
                headers: {
                    'Content-Type': 'application/json',
                    "X-Requested-With": "XMLHttpRequest",
                    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZTAxM2Y5YmEzYmI3MTViMWJlNmMzNzUwNjA3NTc0M2E1MmI3OTVhN2FjNWQwYmI3NjcwZDUxNTAxY2FjZDc0ZGY4ZDZmODc5MzJmYmUyY2EiLCJpYXQiOjE2MzU5NDc3NzUsIm5iZiI6MTYzNTk0Nzc3NSwiZXhwIjoxNjY3NDgzNzc1LCJzdWIiOiIxMyIsInNjb3BlcyI6W119.TCruQ-wO7DUvfykNYzo1rhG4xqFtEyGtPTbN4EIfNr2kknsvTjmWHZRW1GvzrCytG5u3EoBcgt5aAYoKAJfnV0Sfft43qAejpKdt_2L3zecECOtogVcoN8GffgoT_OMP3jLV5qUnf9GqnMxTAhCiVuhIc0AGcH4zvPrJALTYn9d-FEs5jLF4DaB76sQvPAidGJfJ5AR9i_W_2OoA8kAzWBSUBZkd9C1MclMM-gAHWsKRkAJtEuieNvDv8hKwPAv9VtaaSpWDd543hhzbF1gkTS5605wzYTq-gfIMwHhHr8tVjlPqFhVrR0F_rAiGfMOSxPfa-Lr9UKnJPBEg3JpSruNG9p_-o5SQfJgj24lgugx-tS030k0iRAlybisfVbuihYKJPvkfGOqi4e6CX3PmIIaeeodeoU2Q0U3yhJoObhXWzyIFY2GEdPQMNLlbqQx6XLlwDQiXLNve-sDaAwLnGoDkLDwdEU4pA65GJRw5QSB7bBRs4Ng9JpixWzFJ4ZLL5dObY0G4HwO_nHGlHhqEmNOFzf-B4H8i9ROOL_e7PfwkT2A_5MOQdY8UIVBt8N024pHKP_FY_sPGXCkmV9QQBTo2ICcIKNUHh0cVOmxOH8lp_pPw6CEW3jUL0elvSHKlq6LjKFlpae_1viFUa33DdNU4c-oRWL1t_Qpp05YmpR4"
                }
            })
            .then(res => {
                if (res.status == 200) {
                    history.push('/dashboard');
                }
            })
            .catch(error => {
                alert("Email Already Exist");
            });
    }
    return (

        <div className="main-container">
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <nav>
                                <ul className="menu">
                                    <li className="nav-hover">
                                        <div className="login-templeta">
                                            <a href="/">Home</a>
                                        </div>
                                    </li>
                                    <li className="nav-hover">
                                        <div className="login-templeta">
                                            <a href="/discover/tv">TV</a>
                                        </div>
                                    </li>
                                    <li className="nav-hover">
                                        <div className="login-templeta">
                                            <a href="/treding">Treding</a>
                                        </div>
                                    </li>
                                    <li className="nav-hover">
                                        <div className="login-templeta">
                                            <a href="/search">Search</a>
                                        </div>
                                    </li>
                                    <li className="nav-hover">
                                        <div className="login-templeta">
                                            <a href="/profile">Profile</a>
                                        </div>
                                    </li>
                                    <li className="nav-hover">
                                        <div className="login-templeta">
                                            <a href="/login">Login</a>
                                        </div>
                                    </li>
                                    <li className="nav-hover">
                                        <div className="login-templeta">
                                            <a href="/logout">Logout</a>
                                        </div>
                                    </li>
                                    <li className="nav-hover">
                                        <div className="login-templeta">
                                            <a href="/dashboard">Dashboard</a>
                                        </div>
                                    </li>
                                    <li className="nav-hover">
                                        <div className="login-templeta">
                                            <a href="/register">Register</a>
                                        </div>
                                    </li>
                                </ul>

                            </nav>
                        </div>
                    </div>
                </div>

            </div>
            <div className="Login">
                <h2 className="name-login">Edit User</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group size="lg" controlId="email">
                        <Form.Label >Name: &nbsp;</Form.Label>
                        <Form.Label> &nbsp; {arrayUserByID.name}</Form.Label>
                        <Form.Control
                            autoFocus
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="email">
                        <Form.Label >Email: &nbsp;</Form.Label>
                        <Form.Label> &nbsp; {arrayUserByID.email}</Form.Label>
                        <Form.Control
                            autoFocus
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="password">
                        <Form.Label>Password: </Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Button block size="lg" type="submit" >
                        Edit
                    </Button>
                </Form>
            </div>
        </div>

    );
}
