import axios from "axios";
import queryString from "query-string";

const client = axios.create({
    baseURL: process.env.REACT_APP_URL,
    headers: { 
        'Content-Type': 'application/json'
    },
    paramsSerializer: params => queryString.stringify({...params, api_key: process.env.REACT_APP_API_KEY })
});

client.interceptors.request.use(async (config) => config);

client.interceptors.response.use((response) => {
    if(response && response.data) {
        return response.data;
    }
    return response;
}, (error) => {
    throw error;
});

export default client;