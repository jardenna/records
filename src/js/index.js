
import '../scss/style.scss';
import React from 'react';

import { render } from 'react-dom';

import App from '@components/App';

render(
	<App />,
	document.getElementById('app')
);


//------------------------------------


if (module && module.hot) {
	module.hot.accept();
}


