import axios from 'axios';
const api = 'https://api.spotify.com/v1/browse/';

const token = window.localStorage.getItem('token');

const axiosInstance = axios.create({
    baseURL: api,
    headers: {
        Authorization: token ? `Bearer ${token}` : ''
    }
});

export default axiosInstance;
