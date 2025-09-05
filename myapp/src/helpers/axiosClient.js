
import axios from 'axios';

const axiosClient = axios.create({
    baseURL: "https://localhost:7192",
    mode: "CORS",
    headers: {
        "Content-Type": "application/json"
    }
})

//Request interceptor
axiosClient.interceptors.request.use((config) => {
    config.headers.Authorization = "1234567";
    config.headers.Name = "pradeep shet";
    return config;
}, (error) => {
    return Promise.reject(error);
})

export default axiosClient;