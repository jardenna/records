import { useEffect, useState } from 'react';

function useGlobalFetch ( initialUrl, method, initialData){

	const [isLoading, setIsLoading] = useState(true);
	const [hasError, setHasError] = useState(false);
	const [result, setResult] = useState(initialData);

	useEffect(() => {
		let rendered = false;

		const handleFetchResponse = response => {
			if (rendered) {
				return initialData;
			}

			setHasError(!response.ok);
			setIsLoading(false);
			return response.ok && response.json ? response.json() : initialData;
		};

		const fetchData = () => {
			setIsLoading(true);
			return fetch(initialUrl,
				{
					method: method.toUpperCase(),
					credentials: 'same-origin'
				})
				.then(handleFetchResponse)
				.catch(handleFetchResponse);
		};

		if (initialUrl && !rendered){
			fetchData().then(result => !rendered && setResult(result));
		}


		return () => {
			rendered = true;
		};
	}, []);

	return { isLoading, hasError,  result };

}

export default useGlobalFetch;
