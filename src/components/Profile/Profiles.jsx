import React, { useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import "./Profile.css";
export function Profile() {
    const logo = require('./img/caheo.png');
    const [profile, setProfile] = useState([]);
    let history = useHistory();
    function handleSubmit(event) {
        event.preventDefault();
        axios.get('http://localhost/Passport/Passport/public/api/auth/user', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('myData')
            }
        })
            .then(res => {
                if (res.status == 200) {
                    console.log(res.data);
                    setProfile(res.data);
                }
            })
            .catch(error => {
                console.log(error.status);
            });

    }
    return (

        <div className="container">
            <div className="header">
                <div className="main-container">
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
            <div className="profile">
                <div className="row">
                    <div className="col-md-4">
                        <div className="img-title">
                            <img src={logo} alt="" />
                        </div>
                        <div className="img-name">{profile.name}</div>
                    </div>
                    <div className="col-md-8 col-content">
                        <div className="content">
                            <div className="title">
                                <span>Thông tin tài khoản</span>
                            </div>
                            <ul className="change-title">
                                <form id="frmProfile">
                                    <li>
                                        <span className="Profile-name">Name</span>
                                        <div className="profile-title">{profile.name}</div>
                                    </li>
                                    <li>
                                        <span className="Profile-name">Email</span>
                                        <span className="profile-title">{profile.email}</span>
                                    </li>
                                </form>
                            </ul>
                            <button className="profile-button" onClick={handleSubmit}>Thông tin</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
