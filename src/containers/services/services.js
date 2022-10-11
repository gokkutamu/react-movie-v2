import axios from "axios";
import client from "./client";

/**
 * Application category
 * */
export const category = { movie: 'movie', tv: 'tv' }
export const movieTypes = { upcoming: 'upcoming', popular: 'popular', top_rated: 'top_rated' }
export const watchingTVTypes = { popular: 'popular', top_rated: 'top_rated', on_the_air: 'on_the_air' }

/**
 * Data access
 * */ 
const services = {
    getMovies: (type, params) => {
        const url = 'movie' + '/' + movieTypes[type];
        return client.get(url, params);
    },
    getWatchingTV: (type, params) => {
        const url = 'tv' + '/' + watchingTVTypes[type];
        return client.get(url, params);
    },
    getVideos: (type, id) => {
        const url = category[type] + '/' + id + '/videos';
        console.log(url);
        return client.get(url, {params: {}});
    },
    detail: (type, id, params) => {
        const url = category[type] + '/' + id;
        return client.get(url, params);
    },
    credits: (type, id) => {
        const url = category[type] + '/' + id + '/credits';
        return client.get(url, {params: {}});
    },
}

export default services;

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
        });
        const modifiedData = data['results'].map((val) => ({
            title: val['title'],
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
        });
        const modifiedData = data['genres'].map((g) => ({
            id: g['id'],
            name: g['name']
        }));
        return modifiedData;
    } catch (error) { }
}

/**
 * The latest movie pictures (1)
 * @method GET
 */
export const getImageOne = async () => {
    try {
        const { data } = await axios.get(`${process.env.REACT_APP_URL}/trending/movie/day`, {
            params: {
                api_key: process.env.REACT_APP_API_KEY,
                language: 'en-US',
            }
        });
        const modifiedData = data['results'].map((val) => ({
            poster_path: process.env.REACT_APP_URL_IMAGE + val['poster_path'],
            backdrop_path: process.env.REACT_APP_URL_IMAGE + val['backdrop_path']
        }));
        return modifiedData;
    } catch (error) { }
}

/**
 * Top rated movies.
 * @method GET
*/
export const getTopRating = async (genre_ids) => {
    try {
        const { data } = await axios.get(`${process.env.REACT_APP_URL}/movie/top_rated`, {
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
 * This query looks for any TV show that has an episode with an air date in the next 7 days.
 * @method GET
*/
export const getWatchingTV = async () => {
    try {
        const { data } = await axios.get(`${process.env.REACT_APP_URL}/tv/on_the_air`, {
            params: {
                api_key: process.env.REACT_APP_API_KEY,
                language: 'en-US',
                page: 1,
            }
        });
        const modifiedData = data['results'].map((val) => ({
            uid: val['id'] ? val['id'] : val['tv_id'],
            title: val['title'] ? val['title'] : val['name'],
            adult: val['adult'] == true ? 'HD' : '3D',
            popularity: val['popularity'],
            first_air_date: val['first_air_date'],
            vote_average: val['vote_average'],
            vote_count: val['vote_count'],
            poster_path: process.env.REACT_APP_URL_IMAGE + val['poster_path'],
            backdrop_path: process.env.REACT_APP_URL_IMAGE + val['backdrop_path']
        }));
        return modifiedData;
    } catch (error) { }
}