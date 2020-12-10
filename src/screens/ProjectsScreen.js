import React from 'react';
import { projects } from '../assets/data/projects';
import { MainContainer } from '../components/layout/MainContainer';
import { Page, PageTitle } from '../components/layout/Page';
import { Project } from '../components/Project';

export const ProjectsScreen = () => {
	return (
		<Page className="ProjectsScreen">
			<MainContainer>
				<PageTitle>Projects</PageTitle>
				<div className="projects-list">
					{projects.map(project => (
						<Project key={project.name} {...project} />
					))}
				</div>
			</MainContainer>
		</Page>
	);
};
