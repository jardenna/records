
import '../scss/style.scss';
import React from 'react';

import { render } from 'react-dom';

import App from '@components/App';
import Pagina from '@components/Pagina';





render(
	<App />,
	document.getElementById('app')
);


//------------------------------------


if (module && module.hot) {
	module.hot.accept();
}


