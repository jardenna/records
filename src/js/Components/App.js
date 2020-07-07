import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import store from '@redux/store';

import Home from '@components/records/Home';
import Login from '@components/Login';
import Selectbox from '@components/Selectbox';
import Table from '@components/Table/Table';
import RecordTable from '@components/records/RecordTable';
import Details from '@components/records/Details';
import Update from '@components/records/Update';
import Nav from '@components/records/Shared/Nav';
import MainHeader from '@components/records/Shared/MainHeader';


function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<MainHeader />

				<Nav />
				<div className="main-wrapper">

					<Switch>
						<Route exact path='/' component={Home} />
						<Route path='/create' component={Update} />
						<Route path='/all' component={RecordTable} />
						<Route path='/login' component={Login} />
						<Route path='/table' component={Table} />
						<Route path='/select' component={Selectbox} />
						<Route path='/details/:id' component={Details} />
						<Route path='/update/:id' component={Update} />

					</Switch>
				</div>

			</BrowserRouter>

		</Provider>


	);
}


export default App;




