import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { HomeScreen } from '../screens/HomeScreen';
import { SkillsScreen } from '../screens/SkillsScreen';

export const MainRouter = () => {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path="/" component={HomeScreen} />
        <Route path="/skills" component={SkillsScreen} />
				<Redirect to="/" />
			</Switch>
		</Router>
	);
};
