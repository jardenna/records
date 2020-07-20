import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import store from '@redux/store';

import Nav from '@components/records/Shared/Nav';
import { routes } from '@common/constants/nav';
import MainHeader from '@components/records/Shared/MainHeader';

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<MainHeader />
				<Nav />
				<div className="main-wrapper">
					<Switch>
						{routes.map(route =>
							<Route key={route.path} exact={route.exact} path={route.path} component={route.main} />
						)}
					</Switch>
				</div>
			</BrowserRouter>

		</Provider>

	);
}


export default App;