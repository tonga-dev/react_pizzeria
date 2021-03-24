import React from 'react';
import { hot } from 'react-hot-loader';
import Home from './components/Home'

const App = () => {
	return (
		<div className="App">
			<Home />
		</div>
	);
}

export default hot(module)(App);