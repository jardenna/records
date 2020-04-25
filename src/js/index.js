
import '../scss/style.scss';
import React from 'react';

import { render } from 'react-dom';

import App from '@components/App';
import AppTest from '@components/AppTest';




render(
	<App />,
	document.getElementById('app')
);


//------------------------------------


if (module && module.hot) {
	module.hot.accept();
}


