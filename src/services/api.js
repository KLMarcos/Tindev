import axios from 'axios'

const api = axios.create({
    baseURL: 'https://tindev-omnistack8.herokuapp.com'
});

export default api;