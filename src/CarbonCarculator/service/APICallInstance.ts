import { getBearerTokenFromStorage } from "CarbonCarculator/utils/AppSessionStorage";
import Axios from "axios";

const APICallInstance = Axios.create({
    baseURL: import.meta.env.VITE_APP_API_BASE_URL_LOCAL,

});

APICallInstance.interceptors.request.use((config) => {
    const token = getBearerTokenFromStorage();

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    if (config.data instanceof FormData) {
        config.headers["Content-Type"] = "multipart/form-data";
    } else {
        config.headers["Content-Type"] = "application/json";
    }

    return config;
}, (error) => {
    return Promise.reject(error);
});

APICallInstance.interceptors.response.use((response) => {
    return response;
}, (error) => {
    return Promise.reject(error);
});

export default APICallInstance;
