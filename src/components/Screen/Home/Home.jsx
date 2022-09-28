/**
 * The stone dam built the house of (Tam) likes.
 * @version 2 ( change 26/09/2022 ).
*/
import React, { useState, useEffect } from "react";
import { ReactBootstrap_Carousel } from "react-bootstrap-carousel";
import { Link } from "react-router-dom";

import { Heading } from "../../Master/Heading";
import { TheEnd } from "../../Master/TheEnd";
import { getMovie } from "../../../containers/services/vesion_1";
export function Home() {
    const [heroPlaying, setHeroPlaying] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setHeroPlaying(await getMovie());
        };
        fetchAPI();
    }, []);

    /**
     * List movie
     * @map heroPlaying.
    */
    const HeroPlaying = heroPlaying.slice(0, 1).map((key, val) => {
        return (
            <div></div>
        );
    });
    return (
        <div>
            <Heading></Heading>
            <main>
                <article>
                    <section className="hero">
                        <div className="container">
                            <div className="hero-content">
                                <p className="hero-subtitle">Filmlane</p>
                                <h1 className="h1 hero-title">
                                    Unlimited <strong>Movie</strong>, TVs Shows, & More.
                                </h1>
                                <div className="meta-wrapper">
                                    <div className="badge-wrapper">
                                        <div className="badge badge-fill">PG 18</div>
                                        <div className="badge badge-outline">HD</div>
                                    </div>
                                    <div className="ganre-wrapper">
                                        <a href="#">Romance,</a>
                                        <a href="#">Drama</a>
                                    </div>
                                    <div className="date-time">
                                        <div>
                                            <ion-icon name="calendar-outline"></ion-icon>
                                            <time datetime="2022">2022</time>
                                        </div>
                                        <div>
                                            <ion-icon name="time-outline"></ion-icon>
                                            <time datetime="PT128M">128 min</time>
                                        </div>
                                    </div>
                                </div>
                                <button className="btn btn-primary">
                                    <ion-icon name="play"></ion-icon>
                                    <span>Watch now</span>
                                </button>
                            </div>
                        </div>
                    </section>
                    <section className="cta">
                        <div className="container">
                            <div className="title-wrapper">
                                <h2 className="cta-title">Trial start first 30 days.</h2>
                                <p className="cta-text">
                                    Enter your email to create or restart your membership.
                                </p>
                            </div>
                            <form action="" className="cta-form">
                                <input type="email" name="email" required placeholder="Enter your email" className="email-field" />
                                <button type="submit" className="cta-form-btn">Get started</button>
                            </form>
                        </div>
                    </section>
                </article>
            </main>
            <TheEnd></TheEnd>
            <a href="#top" className="go-top" data-go-top>
                <ion-icon name="chevron-up"></ion-icon>
            </a>
        </div>
    );
}