

const api = function (method, url, data, headers = {}) {
	return fetch(url, {
		method: method.toUpperCase(),
		body: JSON.stringify(data),  // send it as stringified json
		credentials: 'same-origin',  // to keep the session on the request,
		headers: Object.assign({}, api.headers, headers)  // extend the headers
	}).then(res => res.ok ? res.json() : Promise.reject(res));
};

api.credentials = 'include';
api.headers = {
	//'csrf-token': window.csrf || '',    // only if globally set, otherwise ignored
	'Accept': 'application/json'      // receive json
	//'Content-Type': 'application/json'  // send json
};

export default api;
