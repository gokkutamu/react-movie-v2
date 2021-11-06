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
    let [version, setVersion] = useState("");
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
        console.log(version);
        version = arrayUserByID.version;
        axios.post(`http://localhost/Passport/Passport/public/api/auth/updateUser/${params.id}`, { name, email, password, version },
            {
                headers: {
                    'Content-Type': 'application/json',
                    "X-Requested-With": "XMLHttpRequest",
                    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMzY2NjBjYTM4NzUzYWFmNWM4Y2JkNDhhZjUwMTNlOWNhMjVlN2RhODExODQzZjgyMTIxZDRkNjZhOGU1ZTU3OTQ4ODJkYzYyMmUxYTI2NjciLCJpYXQiOjE2MzYxMDYxNDcsIm5iZiI6MTYzNjEwNjE0NywiZXhwIjoxNjY3NjQyMTQ3LCJzdWIiOiIxNCIsInNjb3BlcyI6W119.L5Na64AyU4mYEJQuYa2C3TL8UvqrWkZibn3I6eCae8lSLUitehdpEko9KVm7rDtfAQvafIl5EflVg4fwc3ExmK5HYkdreF-toy-RhitoIyCBkQKF59cX6Vm93EIGMrt1xGwy-3IDaMlPtdZFt_gEYPKF0Ea7kp119QyMYw5efv9HgokWJ5n6YmclsCn7EGF3v6x_cWClFCkx9p7jzHxxVK_WJiz7yuq4mA72v0AqFiZl7TM841iqSnt6RW9LcUfokg24sCD5Yksvyji-zME_Rf7ebdr9EEPJDuScgduMqKjtXy40ZoMKeZblk5uJ195wyUg_zxV9R-4YAt7IKeDYYtDjH0U_5lLdZ_q8UMPtwGBkZxvdvFpXCy5_f92_1ugvdal-ihEN9IM7neiI8c83FAFaQQoR6SSKgfzCZ4yMKBhWM5XjvMhw-5BtyGoOY17-GTyZK6omRunzKLAiIs9dG_d4TUZb9bYXUoP1RH_YzqfI2DyHMXV7AkGETCY6GyVfrquX9frkFM-JFTNhu6nRu7-hmv3RXbsl63GKf7jKITj6PY6XspPN3JP76iJ_brJPtDpviyqZjxDpBG9QaKT8zdTPmr-UUEj_FUWUxdv12UYW-RUSn0FHhtxsyenzm4H0abGfhW1IZUtBKN39IMF--fpHDcPSomln5-4-jjQv6GI"
                }
            })
            .then(res => {
                if (res.status == 200) {
                    history.push('/dashboard');
                }
            })
            .catch(error => {
                if (error.response.status == '422') {
                    alert("Error Update");
                    window.location.reload();

                }
                else {
                    console.log(error);
                    alert("Email Already Exist");
                }
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
                <Form method="GET" onSubmit={handleSubmit}>
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
                    <Form.Group size="lg" controlId="version">
                        <Form.Control
                            type="text"
                            style={{ display: "none" }}
                            value= {version}
                            onChange={(e) => setVersion(e.target.value)}
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
