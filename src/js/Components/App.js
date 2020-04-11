import React, { Component } from 'react';
//import { Provider } from 'react-redux';


//import store from '@redux/sagaStore';
import Records from '@components/records/Records';

class App extends Component {
	render() {
		return (

			<div className="main-wrapper">
				<Records />

			</div>

		);
	}
}

export default App;




