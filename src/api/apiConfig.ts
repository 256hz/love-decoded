import axios from 'axios'

export const BASE_API_URL= 'https://2ad1fc44c115.ngrok.io';
export const apiClient = axios.create({
    baseURL: BASE_API_URL,
    headers: {
        'accept': 'application/json',
        'accept-language': 'en_US',
        'content-type': 'application/json'
    },
});