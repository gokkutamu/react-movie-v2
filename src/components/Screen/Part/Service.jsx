/**
 * The stone dam built the house of (Tam) likes.
 * @version 2 ( change 06/10/2022 ).
*/
import React, { useState, useEffect } from "react";

import { getImageOne } from "../../../containers/services/services";

export function Service() {

    const [isPhoto, setPhoto] = useState([]);

    useEffect(() => {
        const parseApi = async () => {
            setPhoto(await getImageOne(1));
        };
        parseApi();
    }, []);

    const Photo = isPhoto.slice(0, 1).map((item, index) => {
        return (
            <div className="service-banner" key={index}>
                <figure>
                    <img src={item.poster_path} alt="HD 4k resolution! only $3.99"/>
                </figure>
                <a href={item.poster_path} download className="service-btn">
                    <span>Download</span>
                    <ion-icon name="download-outline"></ion-icon>
                </a>
            </div>
        );
    });

    return (
        <section className="service">
            <div className="container">
                { Photo }
                <div className="service-content">
                    <p className="service-subtitle">Our Services</p>
                    <h2 className="h2 service-title">Download Your Shows Watch Offline.</h2>
                    <p className="service-text">
                        Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod tempor.There are many variations of
                        passages of lorem
                        Ipsum available, but the majority have suffered alteration in some injected humour.
                    </p>
                    <ul className="service-list">
                        <li>
                            <div className="service-card">
                                <div className="card-icon">
                                    <ion-icon name="tv"></ion-icon>
                                </div>
                                <div className="card-content">
                                    <h3 className="h3 card-title">Enjoy on Your TV.</h3>
                                    <p className="card-text">
                                        Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do eiusmod tempor.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="service-card">
                                <div className="card-icon">
                                    <ion-icon name="videocam"></ion-icon>
                                </div>
                                <div className="card-content">
                                    <h3 className="h3 card-title">Watch Everywhere.</h3>
                                    <p className="card-text">
                                        Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do eiusmod tempor.
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}