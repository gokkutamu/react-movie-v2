/**
 * The stone dam built the house of (Tam) likes.
 * @version 2.
 * @var [page/Protype].
*/
import React from 'react';
import { useParams } from 'react-router-dom';

import { category as type } from '../../../containers/services/services';

import Tab from '../Part/Tab/Tab';
import MovieGrid from '../Part/MovieGrid';

const Protype = () => {
    const { category } = useParams();

    return (
        <>
            <Tab>
                {category === type.movie ? 'Movies' : 'TV Series'}
            </Tab>
            <div className="container">
                <div className="section mb-3">
                    <MovieGrid category={category}/>
                </div>
            </div>
        </>
    );
}

export default Protype;