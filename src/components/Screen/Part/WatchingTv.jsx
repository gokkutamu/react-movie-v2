/**
 * The stone dam built the house of (Tam) likes.
 * @version 2 ( change 06/10/2022 ).
*/

import React, { useState, useEffect } from "react";
import dateFormat from "dateformat";

import { getWatchingTV } from "../../../containers/services/vesion_1";

export function WatchingTv() {
    const [watching, setWatchingTV] = useState([]);

    useEffect(() => {
        const parseApi = async () => {
            setWatchingTV(await getWatchingTV());
        };
        parseApi();
    }, []);

    const WatchingTV = watching.slice(0, 4).map((val, index) => {
        return (
            <li key={index}>
                <div className="movie-card">
                    <a href={`/movie/${val.uid}`}>
                        <figure className="card-banner">
                            <img src={val.poster_path} alt={val.title} />
                        </figure>
                    </a>
                    <div className="title-wrapper">
                        <a href={`/movie/${val.uid}`}>
                            <h3 className="card-title">{val.title}</h3>
                        </a>
                        <time datetime={dateFormat(val.first_air_date, "yyyy")}>{dateFormat(val.first_air_date, "yyyy")}</time>
                    </div>
                    <div className="card-meta">
                        <div className="badge badge-outline">{val.vote_count / 1000}K</div>
                        <div className="duration">
                            <ion-icon name="eye-outline"></ion-icon>
                            <time datetime="PT47M">{val.vote_count}</time>
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
        <section className="tv-series">
            <div className="container">
                <p className="section-subtitle">Best TV Series</p>
                <h2 className="h2 section-title">World Best TV Series</h2>
                <ul className="movies-list">
                    { WatchingTV }
                </ul>
            </div>
        </section>
    );
}