import axios from 'axios';

export const BASE_API_URL = 'https://lovedb.azurewebsites.net';
export const loveDb = axios.create({
	baseURL: BASE_API_URL,
	headers: {
		'Accept': 'application/json',
		'Accept-Language': 'en_US',
		'Content-Type': 'application/json',
	},
});
