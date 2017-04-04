import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';
export const FETCH_ANALYTICS_DATA = 'FETCH_ANALYTICS_DATA';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=apapunlah';

export function fetchPosts(){
	const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

	return{
		type: FETCH_POSTS,
		payload: request
	};
}

export function createPost(props) {
	const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);

	return {
		type: CREATE_POST,
		payload:request
	};
}

export function fetchPost(id) {
	const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

	return {
		type: FETCH_POST,
		payload: request
	};
}

export function deletePost (id) {
	const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);

	return {
		type: DELETE_POST,
		payload: request
	};
}


export function fetchAnalyticsData(name,callback = null){
	return (dispatch) => {
		fetch(`http://localhost:8080/${name}`,
			{method: 'GET', headers: {'Content-Type': 'application/json'}, credentials: 'include'})
			.then(checkStatus)
			.then(parseJSON)
			.then(function(data) {
				dispatch(receiveResponse(data));
				if (callback != null){
					callback();
				}
				
			})
	}
}

function checkStatus(response) {
	if (response.status >= 200 && response.status < 300) {
		return response;
	} else {
		var error = new Error(response.statusText);
		error.response = response;
		throw error
	}
}

function parseJSON(response){
	return response.json();
}

function receiveResponse(response){
	return{
		type: FETCH_ANALYTICS_DATA,
		payload: response
	};
}