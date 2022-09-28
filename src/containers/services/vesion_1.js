import axios from 'axios';

console.log(process.env.API_KEY)
// Connect
const apiKey = 'a4999a28333d1147dbac0d104526337a';
const url = 'https://api.themoviedb.org/3';

/**
 * Movie list
 * @method GET
 * @returns void
 */ 
export const getMovie = async () => {
    const urlImage = 'https://image.tmdb.org/t/p/original/';
    try {
        const { data } = await axios.get(`${url}/movie/now_playing`, {
            params: {
                api_key: apiKey,
                language: 'vi-VN',
                page: 1
            }
        })
        const modifiedData = data['results'].map((val) => ({
            id: val['id'],
            backPoster: urlImage + val['backdrop_path'],
            popularity: val['popularith'],
            title: val['title'],
            poster: urlImage + val['poster_path'],
            overview: val['overview'],
            rating: val['vote_average'],
        }))
        return modifiedData;
    } catch (error) { }
}