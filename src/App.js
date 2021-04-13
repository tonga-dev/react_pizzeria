import React from 'react';
import { hot } from 'react-hot-loader';
import Home from './components/Home';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route path="/" component={Home} />
				
			</Switch>
		</Router>
	);
}

export default hot(module)(App);