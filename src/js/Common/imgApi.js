

const imgApi = function (method, url, data) {
	return fetch(url, {
		method: method.toUpperCase(),
		body: data

	}).then(res => res.ok ? res.json() : Promise.reject(res));
};




export default imgApi;
