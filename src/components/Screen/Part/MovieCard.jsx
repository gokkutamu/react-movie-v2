/**
 * The stone dam built the house of (Tam) likes.
 * @version 2.
 * @package parts/MovieCard
*/
import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button/Button';

import { category } from '../../../containers/services/services';
import config from '../../../containers/services/config';

import '../../UI/movie-card.scss';

const MovieCard = props => {
    const item = props.item;
    const link = '/' + category[props.category] + '/' + item.id;
    const bg = config.w500Image(item.poster_path || item.backdrop_path);

    return (
        <Link to={link}>
            <div className="movie-card" style={{ backgroundImage: `url(${bg})` }}>
                <Button>
                    <i className="bx bx-play"></i>
                </Button>
            </div>
            <h3>{item.title || item.name}</h3>
        </Link>
    );
}

export default MovieCard;