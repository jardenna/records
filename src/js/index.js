
import '../scss/style.scss';
import React from 'react';

import { render } from 'react-dom';

import App from '@components/App';
import Pagin from '@components/Pagin';





render(
	<Pagin />,
	document.getElementById('app')
);


//------------------------------------


if (module && module.hot) {
	module.hot.accept();
}


