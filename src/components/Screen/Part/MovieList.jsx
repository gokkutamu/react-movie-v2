/**
 * The stone dam built the house of (Tam) likes.
 * @version 2.
 * @package parts/MovieList.
*/
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import PropTypes from 'prop-types';

import services, { category } from '../../../containers/services/services';
import MovieCard from './MovieCard';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import '../../UI/similar.scss';

const MovieList = props => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getList = async () => {
            let response = null;
            const params = {};

            if (props.type !== 'similar') {
                switch (props.category) {
                    case category.movie:
                        response = await services.getMovies(props.type, { params });
                        break;
                    default:
                        response = await services.getWatchingTV(props.type, { params });
                }
            } else {
                response = await services.similar(props.category, props.id);
            }
            setItems(response.results);
        }
        getList();
    }, []);

    return (
        <div className="movie-list">
            <Swiper grabCursor={true} spaceBetween={10} slidesPerView={'auto'} >
                {
                    items.map((item, i) => (
                        <SwiperSlide key={i}>
                            <MovieCard item={item} category={props.category} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
}

MovieList.propTypes = {
    category: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}

export default MovieList;