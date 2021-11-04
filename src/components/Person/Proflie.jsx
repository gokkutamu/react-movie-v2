import React, { useState, useEffect } from "react";
import {
    fetchPersonDetail,
    fetchProfile,
} from "../../server";

import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import { Link } from "react-router-dom";
import "../Home/Aminition/Home.css";
import '../Person/Style.css';


export function Profile({ match }) {
    let params = match.params;
    const [detail, setDetail] = useState([]);
    const [profile, setProfile] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            setDetail(await fetchPersonDetail(params.id));
            setProfile(await fetchProfile(params.id));
        };
        fetchAPI();
    }, [params.id]);

    //Nhận danh sách profile của preson
    const listProfile = profile.slice(0, 10).map((item, input) => {
        return (

            <div className="col-md-3 col-sm-6 padding-profile" key={input}>
                <div className="border-profile">
                    <div className="top-profile">
                        <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${item.file_path}`} />
                    </div>
                    <div className="over-profile">
                        {item.vote_count}
                    </div>
                    <div className="average-profile">
                        {item.vote_average}
                    </div>
                    <label>Size</label>
                    <div className="profile-height-with">
                        {item.width} x {item.height}
                    </div>
                </div>
            </div>

        );
    });
    return (
        <div className="top-header">
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
            <div className="main-profile">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="top-profile">
                                <div className="row">
                                    {listProfile}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );



}
