import React, { useState, useEffect } from "react";
import {
    fetchDiscover,
    fetchOnTV,
    fetchTVPopular,
    fetchTVTopRate,
    fetchTVGenre,
} from "../../server";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import { Link } from "react-router-dom";
import "./Style.css";


export function Discover() {
    const [discover, setDiscover] = useState([]);
    const [onTV, setOnTV] = useState([]);
    const [popular, setTVPopular] = useState([]);
    const [topRate, setTVTopRate] = useState([]);
    const [gerenes, setGerenes] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDiscover(await fetchDiscover(28));
            setOnTV(await fetchOnTV(28));
            setTVPopular(await fetchTVPopular(28));
            setTVTopRate(await fetchTVTopRate(28));
            setGerenes(await fetchTVGenre());
        };
        fetchAPI();
    }, []);


    const handleGenreClick = async (genre_ids) => {

        setDiscover(await fetchDiscover(genre_ids));


    };

    const genreList = gerenes.map((item, index) => {
        return (

            <li className="yellows" key={index} onClick={() => {
                handleGenreClick(item.id);
            }}>
                {item.name}
            </li>
        );
    });

    const lisrOnTV = onTV.slice(1, 10).map((i, index) => {
        return (
            <div className="carousel__face" key={index}>
                <Link to={`/tv/${i.id}`}>
                    <img className="poster" src={i.poster} alt={i.title}></img>
                </Link>
                <span>{i.title}</span>
            </div>
        );
    });
    // khám phá chương trình truyền hình
    const discoverList = discover.slice(0, 18).map((value, i) => {
        return (
            <div className="col-md-2 col-sm-6" key={i}>
                <div className="card-img">
                    <Link to={`/tv/${value.id}`}>
                        <img className="img-fluidss" src={value.poster} alt={value.title}></img>
                    </Link>
                    <a class="info" href={`/tv/${value.id}`}>Xem</a>
                </div>
                <div className="title-movie">
                    {value.title}

                </div>

            </div>
        );
    });

    // Danh sách chương trình nổi tiếng hiện nay :
    const listTVPopular = popular.slice(0, 30).map((value, i) => {
        return (
            <div className="col-md-2 col-sm-6" key={i}>
                <div className="card-img">
                    <Link to={`/tv/${value.id}`}>
                        <img className="img-fluids" src={value.poster} alt={value.title}></img>
                    </Link>
                    <a class="info" href={`/tv/${value.id}`}>Xem</a>
                </div>
                <div className="title-movie">
                    {value.title}
                </div>

            </div>
        );
    });
    // Danh sách chương trình đứng top
    const listTVTopRate = topRate.slice(0, 30).map((value, i) => {
        return (
            <div className="col-md-2 col-sm-6" key={i}>
                <div className="card-img">
                    <Link to={`/tv/${value.id}`}>
                        <img className="img-fluids" src={value.poster} alt={value.title}></img>
                    </Link>
                    <a class="info" href={`/tv/${value.id}`}>Xem</a>
                </div>
                <div className="title-movie">
                    {value.title}
                </div>

            </div>
        );
    });


    return (

        <div className="main-container">
            {/* Hearder */}
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <nav>
                            <ul className="menu">
                                <li className="nav-hover"><a href="/">Home</a></li>
                                <li className="nav-hover"><a href="/discover/tv">TV</a></li>
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
            <div className="trailer-movie">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 style={{ textAlign: "center", paddingTop: 10, textShadow: " 5px 2px 4px grey" }}>
                                TRUYỀN HÌNH TRỰC TIẾP
                            </h2>
                        </div>
                    </div>
                </div>
            </div>


            <div className="play-carousel">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="carousels">
                                {lisrOnTV}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="tv">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10">
                            <h5>KHÁM PHÁ CHƯƠNG TRÌNH TRUYỀN HÌNH</h5>
                            <div className="list-tv">
                                <div className="row">
                                    {discoverList}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="btn-gerene">
                                <ul className="btn-yellow">
                                    {genreList}
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="popular">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h5 style={{ marginBottom: 40, borderBottom: "1px solid wheat" }}>CÁC CHƯƠNG TRÌNH NỔI TIẾNG HIỆN NAY</h5>
                            <div className="knowwn">
                                <div className="row">
                                    <div className="list">
                                        {listTVPopular}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="top-rate">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h5 style={{ marginBottom: 40, borderBottom: "1px solid wheat" }}>TOP CÁC CHƯƠNG TRÌNH CÓ ĐÁNH GIÁ CAO</h5>
                            <div className="knowwn">
                                <div className="row">
                                    <div className="list">
                                        {listTVTopRate}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div><div className="footer-main">
                <hr className="mt-5" style={{ borderTop: "10px solid #5a606b" }}></hr>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-6" style={{ color: "#5a606b" }}>
                            <h3>ABOUT ME</h3>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
                                error earum perspiciatis praesentium sint ipsum provident blanditiis
                                pariatur necessitatibus voluptas, cum, atque iste eligendi autem,
                                culpa cupiditate placeat facilis repellat.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
                                perspiciatis? Numquam, enim illo voluptatum neque facere aut sed ut
                                dolore nihil? Nulla sit, recusandae ea tenetur rerum deserunt sequi
                                earum?
                            </p>
                            <div className="button">
                                <div className="icon">
                                    <i className="fab fa-facebook"></i>
                                </div>
                                <span>Facebook</span>
                            </div>
                            <div className="button">
                                <div className="icon">

                                    <i className="fab fa-instagram"></i>

                                </div>
                                <span>Instagram</span>
                            </div>
                            <div className="button">
                                <div className="icon">

                                    <i className="fab fa-twitter"></i>
                                </div>
                                <span>Twitter</span>
                            </div>

                            <div className="button">
                                <div className="icon">
                                    <i className="fab fa-youtube"></i>
                                </div>
                                <span>Youtube</span>
                            </div>
                        </div>


                        <div className="col-md-4 col-sm-6" style={{ color: "#5a606b" }}>
                            <h3>KEEP IN TOUCH</h3>
                            <ul className="list-unstyled">
                                <li>
                                    <p>
                                        <strong>
                                            <i className="fas fa-map-marker-alt"></i> Address:
                                        </strong>{" "}
                                        HoChiMinh city
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <strong>
                                            <i className="fas fa-map-marker-alt"></i> Phone:
                                        </strong>{" "}
                                        +84939461842
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <strong>
                                            <i className="fas fa-envelope"></i> Email:
                                        </strong>{" "}
                                        ngoctam2303001@gmail.com
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    );
}
