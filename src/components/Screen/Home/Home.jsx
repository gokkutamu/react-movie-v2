/**
 * The stone dam built the house of (Tam) likes.
 * @version 2 ( change 26/09/2022 ).
*/
import React, { useState, useEffect } from "react";
import { ReactBootstrap_Carousel } from "react-bootstrap-carousel";
import { Link } from "react-router-dom";

import '../../UI/Home/System.css';
import { Heading } from "../../Master/Heading";
import { TheEnd } from "../../Master/TheEnd";

export function Home() {
    return (
        <div>
            <Heading></Heading>
            <main>
                <div className="main__movie">
                    <div className="carousel">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <TheEnd></TheEnd>
        </div>
    );
}