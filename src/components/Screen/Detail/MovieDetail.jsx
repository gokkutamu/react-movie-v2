/**
 * The stone dam built the house of (Tam) likes.
 * @version 2.
 * @var string page detail movie and watchingTV.
*/
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

import services from '../../../containers/services/services';
import config from '../../../containers/services/config';

// Package (sass, Cards)
import '../../UI/detail.scss';
import CastList from '../Part/CastList';
import VideoList from '../Part/VideoList';
import MovieList from '../Part/MovieList';

const MovieDetail = () => {
    const { category, id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        const getDetail = async () => {
            const response = await services.detail(category, id, { params: {} });
            setItem(response);
            window.scrollTo(0, 0);
        }
        getDetail();
    }, [category, id]);

    return (
        <>
            {
                item && (
                    <>
                        <div className="banner"></div>
                        <div className="movie-detail_content">
                            <div className="mb-3 movie-content container" style={{ backgroundImage: `url(${config.originalImage(item.backdrop_path || item.poster_path)})` }}>
                                <div className="movie-content__poster">
                                    <div className="movie-content__poster__img" style={{ backgroundImage: `url(${config.originalImage(item.poster_path || item.backdrop_path)})` }}></div>
                                </div>
                                <div className="movie-content__info">
                                    <h1 className="title">
                                        {item.title || item.name}
                                    </h1>
                                    <div className="genres">
                                        {
                                            item.genres && item.genres.slice(0, 5).map((genre, i) => (
                                                <span key={i} className="genres__item">{genre.name}</span>
                                            ))
                                        }
                                    </div>
                                    <p className="overview">{item.overview}</p>
                                    <div className="cast">
                                        <div className="section__header">
                                            <h2>Casts</h2>
                                        </div>
                                        <CastList id={item.id} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="section mb-3">
                                <VideoList id={item.id} />
                            </div>
                            <div className="section mb-3">
                                <div className="section__header mb-2">
                                    <h2>Similar</h2>
                                </div>
                                <MovieList category={category} type="similar" id={item.id} />
                            </div>
                        </div>
                    </>
                )
            }
        </>
    );
}

export default MovieDetail;