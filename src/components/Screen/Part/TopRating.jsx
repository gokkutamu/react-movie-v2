/**
 * The stone dam built the house of (Tam) likes.
 * @version 2 ( change 06/10/2022 ).
*/
import React, { useState, useEffect } from "react";
import dateFormat from "dateformat";

import { getTopRating, getGenre } from "../../../containers/services/vesion_1";

export function TopRating() {
    const [ratings, setTopRating] = useState([]);
    const [categories, setCategory] = useState([]);

    useEffect(() => {
        const parseApi = async () => {
            setCategory(await getGenre());
            setTopRating(await getTopRating());
        };
        parseApi();
    }, []);

    // Click function load page
    const handleGenreClick = async (genre_ids) => {
        setTopRating(await getTopRating(genre_ids));
    };

    const Categories = categories.slice(0, 5).map((item, index) => {
        return (
            <li key={index}>
                <button className="filter-btn" onClick={() => handleGenreClick(item.id)}>{item.name}</button>
            </li>
        );
    });

    /**
     * Top rating
    * @map review movie
    */
    const TopRating = ratings.slice(0, 4).map((val, key) => {
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
        <section className="top-rated">
            <div className="container">
                <p className="section-subtitle">Online Streaming</p>
                <h2 className="h2 section-title">Top Rated Movies</h2>
                <ul className="filter-list">
                    { Categories }
                </ul>
                <ul className="movies-list">
                    { TopRating }
                </ul>
            </div>
        </section>
    );
}