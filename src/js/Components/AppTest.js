import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from '@redux/store';
import Posts from './Posts';
import PostForm from './PostForm';


class AppTest extends Component {
	render() {
		return (
			<Provider store={store}>
				<PostForm />
				<Posts />

			</Provider>


		);
	}
}

export default AppTest;




