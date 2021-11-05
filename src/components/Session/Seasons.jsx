import React, { useState, useEffect } from "react";
import {
    fetchTVDetail,
    fetchSessionTV,
} from "../../server";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import { Link } from "react-router-dom";
import dateFormat from 'dateformat';
import "./Seasons.css";
import { Footer } from "../Footer/Footer";
export function Seasons({ match }) {

    let params = match.params;
    const [Seasions, setSession] = useState([]);
    const [detail, setDetail] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            setDetail(await fetchTVDetail(params.id));
            setSession(await fetchSessionTV(params.id));
        };
        fetchAPI();
    }, []);


    // Danh sách phát sóng mới nhất
    const listSession = Seasions.slice(0, 20).map((c, i) => {
        return (
            <div className="session" key={i}>
                <div className="row">
                    <div className="col-md-2">
                        <div className="text-season" >
                            <Link to={`/tv/${detail.id}/season/${c.number_count}`}>
                                <img
                                    className="img-session"
                                    src={c.img}
                                    alt={c.name}
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="title-session-2">
                            <h5>{c.name}</h5>
                            Năm {c.date} | Tập {c.episode_count}
                            <p>
                                {c.name} của {detail.name} được công chiếu ngày {dateFormat(c.date, "dddd mmmm d yyyy")}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    });
    return (
        <div className="container">
            {/* Hearder */}
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
            <div className="baner-seasons">
                <div className="row">
                    <div className="col-md-2">
                        <div className="baner-center-images">
                            <img src={`https://image.tmdb.org/t/p/w200/${detail.poster_path}`} className="img-seasons" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="title-name-tv">
                            <h3 >{detail.name}</h3>
                        </div>
                        <div className="back-icon">
                            <a href={`/tv/${detail.id}/`} style={{ color: "black", fontSize: 15 }}>
                                <i className="fa fa-backward" aria-hidden="true" style={{ fontSize: 10 }}></i>
                                <span style={{ margin: 10 }}>Quay lại</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="seasons-list">
                <div className="container">
                    {listSession}
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}
