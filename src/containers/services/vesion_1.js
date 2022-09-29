import axios from 'axios';

/**
 * Movie list
 * @method GET
 * @returns void
 */ 
export const getMovie = async () => {
    
    try {
        const { data } = await axios.get(`${process.env.REACT_APP_URL}/movie/now_playing`, {
            params: {
                api_key: process.env.REACT_APP_API_KEY,
                language: 'en-US',
                page: 1
            }
        })
        const modifiedData = data['results'].map((val) => ({
            title: val['title'],
            adult: val['adult'] == true ? 'HD' : '3D',
            popularity: val['popularity'],
            release_date: val['release_date'],
            vote_average: val['vote_average'],
            vote_count: val['vote_count'],
            poster_path: process.env.REACT_APP_URL_IMAGE + val['poster_path'],
            backdrop_path: process.env.REACT_APP_URL_IMAGE + val['backdrop_path']
        }))
        return modifiedData;
    } catch (error) { }
}

/**
 * Movie detail
 * @method GET 
 * @var integer id
 */ 
export const getMovieById = async (id) => {
    try {
        const { data } = await axios.get(`${process.env.REACT_APP_URL}/movie/${id}`, {
            params: {
                api_key: process.env.REACT_APP_API_KEY,
                language: 'en-US'
            }
        });
        return data;
    } catch (error) { }
}

/**
 * Movie video
 * @method GET
 * */ 
export const getVideo = async (id) => {
    try {
        const { data } = await axios.get(`${process.env.REACT_APP_URL}/movie/${id}/videos`, {
            params: {
                api_key: process.env.REACT_APP_API_KEY,
            }
        });
        return data['results'][0];
    } catch (error) { }
}

/**
 * Upcoming lists
 * @method GET
 */ 
export const getUpcoming = async (genre_ids) => {
    try {
        const { data } = await axios.get(`${process.env.REACT_APP_URL}/movie/upcoming`, {
            params: {
                api_key: process.env.REACT_APP_API_KEY,
                language: 'en-US',
                page: 1,
                with_genres: genre_ids
            }
        });
        const modifiedData = data['results'].map((val) => ({
            uid: val['id'] ? val['id'] : val['tv_id'],
            title: val['title'] ? val['title'] : val['name'],
            adult: val['adult'] == true ? 'HD' : '3D',
            popularity: val['popularity'],
            release_date: val['release_date'],
            vote_average: val['vote_average'],
            vote_count: val['vote_count'],
            poster_path: process.env.REACT_APP_URL_IMAGE + val['poster_path'],
            backdrop_path: process.env.REACT_APP_URL_IMAGE + val['backdrop_path']
        }));
        return modifiedData;
    } catch (error) { }
}

/**
 * Genre lists
 * @method GET
 */ 
export const getGenre = async () => {
    try {
        const { data } = await axios.get(`${process.env.REACT_APP_URL}/genre/movie/list`, {
            params: {
                api_key: process.env.REACT_APP_API_KEY,
                language: 'en-US',
            }
        })
        const modifiedData = data['genres'].map((g) => ({
            id: g['id'],
            name: g['name']
        }))
        return modifiedData;
    } catch (error) { }
}