import React, { Component, Fragment } from 'react';
//import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//import store from '@redux/sagaStore';
import Records from '@components/records/Records';
import Home from '@components/records/Home';
import AddAlbum from '@components/records/AddAlbum';
import AllRecords from '@components/records/AllRecords';
import Details from '@components/records/Details';
import Nav from '@components/records/Shared/Nav';
import MainHeader from '@components/records/Shared/MainHeader';


class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<MainHeader />

				<Nav />


				<div className="main-wrapper">

					<Route exact path='/' component={Home} />
					<Route path='/addalbum' component={AddAlbum} />
					<Route path='/all' component={AllRecords} />
					<Route path='/details/:id' component={Details} />
				</div>

			</BrowserRouter>

		);
	}
}

export default App;




