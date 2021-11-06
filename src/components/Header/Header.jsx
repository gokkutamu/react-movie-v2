import React, { } from "react";

export function Header() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <nav>
                        <ul className="menu">
                            <li className="nav-hover"><a href="/">Home</a></li>
                            <li className="nav-hover"><a href="/tredding">Trending</a></li>
                            <li className="nav-hover"><a href="/search">Search</a></li>
                            <li className="nav-hover"><a href="/discover/tv">TV Show</a></li>
                            <li className="nav-hover">
                                <div className="login-templeta">
                                    <a href="/profile">Profile</a>
                                </div>
                            </li>
                            <li className="nav-hover">
                                <div className="login-templeta">
                                    <a href="/dashboard">Dashbroad</a>
                                </div>
                            </li>
                            <li className="nav-hover">
                                <div className="login-templeta">
                                    <a href="/login">Login</a>
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
    )
}