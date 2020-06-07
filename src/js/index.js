
import '../scss/style.scss';
import React from 'react';

import { render } from 'react-dom';

import App from '@components/App';
import Test from '@components/Test';





render(
	<Test />,
	document.getElementById('app')
);


//------------------------------------


if (module && module.hot) {
	module.hot.accept();
}


