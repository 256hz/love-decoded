import axios from 'axios';

export const BASE_API_URL = 'http://localhost:8080';
// export const BASE_API_URL = 'https://lovedb.azurewebsites.net';

export const loveDb = axios.create({
	baseURL: BASE_API_URL,
	headers: {
		'Accept': 'application/json',
		'Accept-Language': 'en_US',
		'Content-Type': 'application/json',
	},
});

export const addAuthHeader = (token: string) => {
	loveDb.defaults.headers.Authorization = `Bearer ${token}`;
};
