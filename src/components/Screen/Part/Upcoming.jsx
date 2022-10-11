/**
 * The stone dam built the house of (Tam) likes.
 * @version 2 ( change 29/09/2022 ).
*/
import React, { useState, useEffect } from "react";
import dateFormat from 'dateformat';

import { getGenre, getUpcoming } from "../../../containers/services/services";

export function Upcoming() {
    const [upComing, setUpcoming] = useState([]);
    const [categories, setGenres] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setGenres(await getGenre());
            setUpcoming(await getUpcoming());
        };
        fetchAPI();
    }, []);

    // Click function load page.
    const handleGenreClick = async (genre_ids) => {
        setUpcoming(await getUpcoming(genre_ids));
    };

    const Categories = categories.slice(0, 5).map((item, index) => {
        return (
            <li key={index}>
                <button className="filter-btn" onClick={() => handleGenreClick(item.id)}>{item.name}</button>
            </li>
        );
    });

    /**
     * List Upcoming
     * @map Upcoming
    */
    const Upcoming = upComing.slice(0, 15).map((val, key) => {
        return (
            <li key={key}>
                <div className="movie-card">
                    <a href={`/movie/${val.uid}`}>
                        <figure className="card-banner">
                            <img src={val.poster_path} alt={val.title} />
                        </figure>
                    </a>
                    <div className="title-wrapper">
                        <a href={`/movie/${val.id}`}>
                            <h3 className="card-title">{val.title}</h3>
                        </a>
                        <time datetime={dateFormat(val.release_date, "yyyy")}>{dateFormat(val.release_date, "yyyy")}</time>
                    </div>
                    <div className="card-meta">
                        <div className="badge badge-outline">{val.adult}</div>
                        <div className="duration">
                            <ion-icon name="eye-outline"></ion-icon>
                            <time datetime="PT137M">{val.vote_count}</time>
                        </div>
                        <div className="rating">
                            <ion-icon name="star"></ion-icon>
                            <data>{val.vote_average}</data>
                        </div>
                    </div>
                </div>
            </li>
        );
    });

    return (
        <section className="upcoming">
            <div className="container">
                <div className="flex-wrapper">
                    <div className="title-wrapper">
                        <p className="section-subtitle">Online Streaming</p>
                        <h2 className="h2 section-title">Upcoming Movies</h2>
                    </div>
                    <ul className="filter-list">
                        {Categories}
                    </ul>
                </div>
                <ul className="movies-list  has-scrollbar">
                    {Upcoming}
                </ul>
            </div>
        </section>
    );
}