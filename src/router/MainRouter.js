import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { HomeScreen } from '../screens/HomeScreen';

export const MainRouter = () => {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path="/" component={HomeScreen} />
				<Redirect to="/" />
			</Switch>
		</Router>
	);
};
