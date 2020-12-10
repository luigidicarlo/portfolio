import React from 'react';
import { skillsList } from '../assets/data/skills';
import { MainContainer } from '../components/layout/MainContainer';
import { Page, PageTitle } from '../components/layout/Page';
import { Skill } from '../components/Skill';

export const SkillsScreen = () => {
	return (
		<Page className="SkillsScreen">
			<MainContainer>
				<PageTitle>Skills</PageTitle>
				<div className="skills-list">
					{skillsList.map(skill => (
						<Skill key={skill.name} {...skill} />
					))}
				</div>
			</MainContainer>
		</Page>
	);
};
