import axios from "axios";

export const axiosConfig = axios.create({
    baseURL: "http://localhost:8080/"
});

axiosConfig.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if(error && error.response && (error.response.status === 401 || error.response.status === 403)){
            window.location.pathname = '/';
        }
        return Promise.reject(error);
        
});