import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { ContactScreen } from '../screens/ContactScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { ProjectScreen } from '../screens/ProjectScreen';
import { ProjectsScreen } from '../screens/ProjectsScreen';
import { SkillsScreen } from '../screens/SkillsScreen';

export const MainRouter = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route path="/skills" component={SkillsScreen} />
        <Route path="/projects/:slug" component={ProjectScreen} />
        <Route path="/projects" component={ProjectsScreen} />
        <Route path="/contact" component={ContactScreen} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};
