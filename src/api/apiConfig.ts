import axios from 'axios';

export const BASE_API_URL = 'https://love-decoded-dev-be.azurewebsites.net';
export const apiClient = axios.create({
	baseURL: BASE_API_URL,
	headers: {
		'accept': 'application/json',
		'accept-language': 'en_US',
		'content-type': 'application/json',
	},
});
