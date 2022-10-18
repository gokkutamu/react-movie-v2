/**
 * The stone dam built the house of (Tam) likes.
 * @version 2 ( change 26/09/2022 ).
*/
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { OutlineButton } from '../Part/Button/Button';
import HeroSliding from '../Part/HeroSliding';
import MovieList from '../Part/MovieList';

import { category, movieTypes, watchingTVTypes } from '../../../containers/services/services';

import '../../UI/dist/output.css';

const Home = () => {

    const [currentTab, setCurrentTab] = useState(
        localStorage.setItem("currentTab", "tv") || localStorage.setItem("currentTab", "movie")
    );

    const [selector, setSelector] = useState(
        localStorage.setItem("selector", "wtv") || localStorage.setItem("selector", "film")
    );
    

    return (
        <>
            <HeroSliding />
            <div className="container">
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>What's Popular</h2>
                        <div className="flex justify-between md:items-end items-center">
                            <div className="inline-flex gap-[40px] pb-[5px] border-b border-gray-darken relative">
                                <button className={`${!currentTab && "text-white font-medium after:absolute after:bottom-0 after:left-[13%] after:bg-white after:h-[3px] after:w-10"}
                                    ${currentTab === "tv" && "text-white font-medium after:absolute after:bottom-0 after:left-[13%] after:bg-white after:h-[3px] after:w-10"
                                        } transition duration-300 hover:text-white`} onClick={() => {
                                        setCurrentTab("tv");
                                        localStorage.setItem("currentTab", "tv");
                                    }}>
                                    Watching TV
                                </button>
                                <button className={`${currentTab === "movie" && "text-white font-medium after:absolute after:bottom-0 after:right-[9%] after:bg-white after:h-[3px] after:w-10"
                                    } transition duration-300 hover:text-white`} onClick={() => {
                                        setCurrentTab("movie");
                                        localStorage.setItem("currentTab", "movie");
                                    }}>
                                    In Theaters
                                </button>
                            </div>
                        </div>
                    </div>
                    {!currentTab && (
                        <MovieList category={category.tv} type={watchingTVTypes.popular} />
                    )}
                    {currentTab === "tv" && (
                        <MovieList category={category.tv} type={watchingTVTypes.popular} />
                    )}
                    {currentTab === "movie" && (
                        <MovieList category={category.movie} type={movieTypes.popular} />
                    )}
                </div>

                <div className="section bg_image mb-3">
                    <div className="section__header mb-2">
                        <h2>Latest Trailers</h2>
                        <div className="flex justify-between md:items-end items-center">
                            <div className="inline-flex gap-[40px] pb-[5px] border-b border-gray-darken relative">
                                <button className={`${!selector && "text-white font-medium after:absolute after:bottom-0 after:left-[13%] after:bg-white after:h-[3px] after:w-10"}
                                    ${selector === "wtv" && "text-white font-medium after:absolute after:bottom-0 after:left-[13%] after:bg-white after:h-[3px] after:w-10"
                                    } transition duration-300 hover:text-white`} onClick={() => {
                                        setSelector("wtv");
                                        localStorage.setItem("selector", "wtv");
                                    }}>
                                    Watching TV
                                </button>
                                <button className={`${selector === "film" && "text-white font-medium after:absolute after:bottom-0 after:right-[9%] after:bg-white after:h-[3px] after:w-10"
                                    } transition duration-300 hover:text-white`} onClick={() => {
                                        setSelector("film");
                                        localStorage.setItem("selector", "film");
                                    }}>
                                    In Theaters
                                </button>
                            </div>
                        </div>
                    </div>
                    {!selector && (
                        <MovieList category={category.tv} type={watchingTVTypes.on_the_air} />
                    )}
                    {selector === "wtv" && (
                        <MovieList category={category.tv} type={watchingTVTypes.on_the_air} />
                    )}
                    {selector === "film" && (
                        <MovieList category={category.movie} type={movieTypes.upcoming} />
                    )}
                </div>

                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Trending</h2>
                        <div className="flex justify-between md:items-end items-center">
                            <div className="inline-flex gap-[40px] pb-[5px] border-b border-gray-darken relative">
                                <button className={`${currentTab === "tv" && "text-white font-medium after:absolute after:bottom-0 after:left-[10%] after:bg-white after:h-[3px] after:w-5"
                                    } transition duration-300 hover:text-white`} onClick={() => {
                                        setCurrentTab("tv");
                                        localStorage.setItem("currentTab", "tv");
                                    }}>
                                    Today
                                </button>
                                <button className={`${currentTab === "movie" && "text-white font-medium after:absolute after:bottom-0 after:right-[9%] after:bg-white after:h-[3px] after:w-10"
                                    } transition duration-300 hover:text-white`} onClick={() => {
                                        setCurrentTab("movie");
                                        localStorage.setItem("currentTab", "movie");
                                    }}>
                                    This Week
                                </button>
                            </div>
                        </div>
                    </div>
                    {!currentTab && (
                        <MovieList category={category.movie} type={movieTypes.popular} />
                    )}
                    {currentTab === "movie" && (
                        <MovieList category={category.movie} type={movieTypes.popular} />
                    )}
                    {currentTab === "tv" && (
                        <MovieList category={category.tv} type={watchingTVTypes.popular} />
                    )}
                </div>
            </div>
        </>
    );
}

export default Home;