
import '../scss/style.scss';
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

import App from '@components/App';
import store from '@redux/store';



render(
	<App />,
	document.getElementById('app')
);


//------------------------------------


if (module && module.hot) {
	module.hot.accept();
}


