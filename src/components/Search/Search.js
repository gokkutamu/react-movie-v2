import React from 'react';
import {
    Button,
    createMuiTheme,
    Tab,
    Tabs,
    TextField,
    ThemeProvider,
} from "@material-ui/core";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import { useEffect, useState } from "react";
import axios from "axios";
import "../Home/Aminition/Home.css";

const Search = () => {
    const [type, setType] = useState(0);
    const [searchText, setSearchText] = useState("");
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);


    const darkTheme = createMuiTheme({
        palette: {
            type: "dark",
            primary: {
                main: "#fff",
            },
        },
    });
    const fetchSearch = async () => {
        try {
            const { data } = await axios.get(
                `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=a4999a28333d1147dbac0d104526337a&language=en-US&query=${searchText}&page=1&include_adult=false`
            );
            setContent(data.results);
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        window.scroll(0, 0);
        fetchSearch();
        // eslint-disable-next-line
    }, [type, 1]);

    return (

        <div>
            <div className="hearder">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <nav>
                                <ul className="menu">
                                    <li className="nav-hover"><a href="/">Home</a></li>
                                    <li className="nav-hover"><a href="/search">Search</a></li>
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
            <ThemeProvider theme={darkTheme}>
                <div className="search">
                    <TextField
                        style={{ flex: 1 }}
                        className="searchBox"
                        label="Search"
                        variant="filled"
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <Button
                        onClick={fetchSearch}
                        variant="contained"
                        style={{ marginLeft: 10 }}
                    >
                        <SearchIcon fontSize="large" />
                    </Button>
                </div>
                <Tabs
                    value={type}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={(event, newValue) => {
                        setType(newValue);
                        setPage(1);
                    }}
                    style={{ paddingBottom: 5 }}
                    aria-label="disabled tabs example"
                >
                    <Tab style={{ width: "50%", marginLeft: "175px" }} label="Tìm kiếm phim" />
                    <Tab style={{ width: "50%", marginLeft: "175px" }} label="Phim truyền hình" />
                </Tabs>
            </ThemeProvider>
            <div className="trending">
                <div className="container">
                    <div className="list-search">
                        <div className="row">

                            {content &&
                                content.map((c) => (
                                    <div className="col-md-2">
                                        <div className="card-img">
                                            <img src={`https://image.tmdb.org/t/p/original/${c.poster_path}`} className="img-search"></img>
                                            <a class="info" href={`/movie/${c.id}` || `/tv/${c.id}`}>Xem</a>
                                        </div>
                                        <div className="title-movie">
                                            {c.title || c.name}
                                        </div>
                                    </div>
                                ))}
                            {searchText &&
                                !content &&
                                (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)}
                        </div>
                    </div>
                </div>
            </div>

            <hr className="mt-5" style={{ borderTop: "1px solid #5a606b" }}></hr>
            <div className="container">
                <div className="row mt-3 mb-5">
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
    );
};

export default Search;
