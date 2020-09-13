import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://public-api.wordpress.com/rest'
})

export default instance;