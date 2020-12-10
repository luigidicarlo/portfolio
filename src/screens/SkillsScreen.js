import React from 'react';
import { skillsList } from '../assets/data/skills';
import { MainContainer } from '../components/layout/MainContainer';
import { Page, PageTitle } from '../components/layout/Page';

export const Skill = ({ name, description, icon }) => (
	<div className="Skill">
		<h2>
			<i className={icon}></i> {name}
		</h2>
		<p>{description}</p>
	</div>
);

export const SkillsScreen = () => {
	return (
		<Page className="SkillsScreen">
			<MainContainer>
				<PageTitle>My Skills</PageTitle>
				<div className="skills-list">
					{skillsList.map(skill => (
						<Skill key={skill.name} {...skill} />
					))}
				</div>
			</MainContainer>
		</Page>
	);
};
