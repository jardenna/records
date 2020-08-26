import React from 'react';



function useFetchData(url, clickEvent) {

	const [isLoading, setIsLoading] = React.useState(true);
	const [hasError, setHasError] = React.useState('');
	const [posts, setPosts] = React.useState([]);


	React.useEffect(()=>{
		setIsLoading(true);

		fetch(url, {
			method: 'GET',
			credentials: 'same-origin'

		})
			.then(res => res.ok ? res.json() : Promise.reject(res))
			.then(
				posts=>{
					setPosts(posts),
					setIsLoading(false);
					setHasError('');
				}
			).catch(() => {
				setPosts([]);
				setIsLoading(false);
				setHasError('Sorry, We have an error!!');

			});


	},[clickEvent]);

	return { isLoading, hasError,  posts };
}

export default useFetchData;
