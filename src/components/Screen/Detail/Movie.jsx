/**
 * The stone dam built the house of (Tam) likes.
 * @version 2 ( change 29/09/2022 ).
 * @var string Movie details
*/
import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import dateFormat from 'dateformat';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { Heading } from "../../Master/Heading";
import { TheEnd } from "../../Master/TheEnd";
import { getMovieById, getVideo } from "../../../containers/services/vesion_1";

export function Movie({ match }) {

    let params = match.params;
    const [movie, setMovieById] = useState([]);
    const [video, setVideo] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    useEffect(() => {
        const mAPI = async () => {
            setMovieById(await getMovieById(params.id));
            setVideo(await getVideo(params.id));
        };
        mAPI();
    }, [params.id]);

    // Css background
    const backdrop_path = {
        background: 'black', //`url(http://image.tmdb.org/t/p/original/${movie.backdrop_path}) no-repeat`
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };

    // Category detail
    let category_lists = [];
    if (movie.genres) {
        category_lists = movie.genres.map((g, i) => {
            return (
                <a href="#" key={i}>{g.name}</a>
            );
        });
    }

    // Modal player movie.
    const ModalPlayer = (props) => {
        const youtubeUrl = "https://www.youtube.com/watch?v=";
        return (
            <Modal {...props} show={show} onHide={handleClose} backdrop="static" keyboard={false} size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter" style={{ color: "#ffff", fontFamily: "fantasy" }}>{movie.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ReactPlayer className="container-fluid" url={youtubeUrl + video.key} playing width="100%" />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    };

    return (
        <div>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
                integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous" />
            <link rel="stylesheet" href="/System.css" />
            <Heading></Heading>
            <main>
                <article>
                    <section className="movie-detail" style={backdrop_path}>
                        <div className="container">
                            <figure className="movie-detail-banner">
                                <img src={`http://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.name} />
                                <button className="play-btn" onClick={() => setShow(true)}>
                                    <ion-icon name="play-circle-outline"></ion-icon>
                                </button>
                                <ModalPlayer show={show} onHide={() => { setShow(false); }} />
                            </figure>
                            <div className="movie-detail-content">
                                <p className="detail-subtitle">{movie.title ? movie.title : movie.name}</p>
                                <h1 className="h1 detail-title">
                                    {movie.original_title}
                                </h1>
                                <div className="meta-wrapper">
                                    <div className="badge-wrapper">
                                        <div className="badge badge-fill">{movie.tagline ? movie.tagline : 'TP01'}</div>
                                        <div className="badge badge-outline">{movie.adult ? 'HD' : '3D'}</div>
                                    </div>
                                    <div className="ganre-wrapper">
                                        {category_lists}
                                    </div>
                                    <div className="date-time">
                                        <div>
                                            <ion-icon name="calendar-outline"></ion-icon>
                                            <time datetime={dateFormat(movie.release_date, "yyyy")}>{dateFormat(movie.release_date, "yyyy")}</time>
                                        </div>
                                        <div>
                                            <ion-icon name="eye-outline"></ion-icon>
                                            <time datetime="PT115M">{movie.vote_count}</time>
                                        </div>
                                    </div>
                                </div>
                                <p className="storyline">
                                    {movie.overview}
                                </p>
                                <div className="details-actions">
                                    <button className="share">
                                        <ion-icon name="share-social"></ion-icon>
                                        <span>Share</span>
                                    </button>
                                    <div className="title-wrapper">
                                        <p className="title">Prime Video</p>
                                        <p className="text">Streaming Channels</p>
                                    </div>
                                    <button className="btn btn-primary" onClick={() => setShow(true)}>
                                        <ion-icon name="play"></ion-icon>
                                        <span>Watch Now</span>
                                    </button>
                                </div>
                                <a href={`http://image.tmdb.org/t/p/original/${movie.poster_path}`} download className="download-btn">
                                    <span>Download</span>
                                    <ion-icon name="download-outline"></ion-icon>
                                </a>
                            </div>
                        </div>
                    </section>
                </article>
            </main>
            <TheEnd></TheEnd>
        </div>
    );
}