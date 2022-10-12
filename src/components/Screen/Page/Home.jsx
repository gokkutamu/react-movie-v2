/**
 * The stone dam built the house of (Tam) likes.
 * @version 2 ( change 26/09/2022 ).
*/
import React from 'react';
import { Link } from 'react-router-dom';

import { OutlineButton } from '../Part/Button/Button';
import HeroSliding from '../Part/HeroSliding';
import MovieList from '../Part/MovieList';

import { category, movieTypes, watchingTVTypes } from '../../../containers/services/services';

const Home = () => {
    return (
        <>
            <HeroSliding />
            <div className="container">
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>What's Popular</h2>
                        <Link to="/movie">
                            <OutlineButton className="small">View more</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={movieTypes.popular} />
                </div>

                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Top Rated Movies</h2>
                        <Link to="/movie">
                            <OutlineButton className="small">View more</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={movieTypes.top_rated} />
                </div>

                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Trending TV</h2>
                        <Link to="/tv">
                            <OutlineButton className="small">View more</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.tv} type={watchingTVTypes.popular} />
                </div>

                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Top Rated TV</h2>
                        <Link to="/tv">
                            <OutlineButton className="small">View more</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.tv} type={watchingTVTypes.top_rated} />
                </div>
            </div>
        </>
    );
}

export default Home;