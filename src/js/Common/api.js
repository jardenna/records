

const api = function (method, url, data, headers = { 'Content-Type': 'application/json' }) {
	return fetch(url, {
		method: method.toUpperCase(),
		body: JSON.stringify(data),  // send it as stringified json
		credentials: 'same-origin',  // to keep the session on the request,
		headers: Object.assign({}, api.headers, headers)  // extend the headers
	}).then(res => res.ok ? res.json() : Promise.reject(res));
};




export default api;
