import axios from 'axios';

const FOURALL_ENDPOINT = 'http://dev.4all.com:3050';

export const getApplicationResponse = (url_param) => {
	return axios.get(`${FOURALL_ENDPOINT}/${url_param}`);
}

export const postMessages = (url_param, message) => {
	console.log(url_param);
	return axios.post(`${FOURALL_ENDPOINT}/${url_param}`, { message });
}