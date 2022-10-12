import client from "./client";

/**
 * Application category
 * */
export const category = { movie: 'movie', tv: 'tv' }
export const movieTypes = { 
    upcoming: 'upcoming', 
    popular: 'popular', 
    top_rated: 'top_rated', 
    now_playing: 'now_playing', 
    latest: 'latest'
}
export const watchingTVTypes = { 
    popular: 'popular', 
    top_rated: 'top_rated', 
    on_the_air: 'on_the_air', 
    airing_today: 'airing_today', 
    latest: 'latest' 
}

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
        return client.get(url, {params: {}});
    },
    detail: (type, id, params) => {
        const url = category[type] + '/' + id;
        return client.get(url, params);
    },
    search: (type, params) => {
        const url = 'search/' + category[type];
        return client.get(url, params);
    },
    similar: (type, id) => {
        const url = category[type] + '/' + id + '/similar';
        return client.get(url, {params: {}});
    },
    recommendations: (type, id) => {
        const url = category[type] + '/' + id + '/recommendations';
        return client.get(url, {params: {}});
    },
    credits: (type, id) => {
        const url = category[type] + '/' + id + '/credits';
        return client.get(url, {params: {}});
    },
}

export default services;