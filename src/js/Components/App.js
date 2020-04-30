import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import store from '@redux/store';

import Home from '@components/records/Home';
import AddAlbum from '@components/records/AddAlbum';
import RecordTable from '@components/records/RecordTable';
import Details from '@components/records/Details';
import Update from '@components/records/Update';
import Nav from '@components/records/Shared/Nav';
import MainHeader from '@components/records/Shared/MainHeader';


class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<BrowserRouter>
					<MainHeader />

					<Nav />


					<div className="main-wrapper">

						<Switch>
							<Route exact path='/' component={Home} />
							<Route path='/addalbum' component={AddAlbum} />
							<Route path='/all' component={RecordTable} />
							<Route path='/details/:id' component={Details} />
							<Route path='/update/:id' component={Update} />
						</Switch>
					</div>

				</BrowserRouter>

			</Provider>


		);
	}
}

export default App;




