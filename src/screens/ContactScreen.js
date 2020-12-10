import React from 'react';
import { contact } from '../assets/data/contact';
import { MainContainer } from '../components/layout/MainContainer';
import { Page, PageTitle } from '../components/layout/Page';

export const ContactScreen = () => {
	return (
		<Page className="ContactScreen">
			<MainContainer>
				<PageTitle>Contact Me</PageTitle>
				<p className="intro">
					If you're interested in my work and would like to discuss a project,
					don't hesitate to contact me through these links:
				</p>
				<ul className="contact-list">
					{contact.map(c => (
						<li className="contact-item" key={c.text}>
							<a href={c.link} target="_blank" rel="noopener noreferrer">
								<i className={c.icon}></i>
								{c.text}
							</a>
						</li>
					))}
				</ul>
			</MainContainer>
		</Page>
	);
};
