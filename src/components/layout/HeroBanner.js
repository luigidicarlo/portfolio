import React from 'react';
import { heroSkills } from '../../assets/data/skills';
import { useWindowResize } from '../../hooks/useWindowResize';

export const HeroBanner = () => {
	const handleResize = React.useCallback(() => {
		const navbarHeight = document
			.querySelector('.Navbar')
			.getBoundingClientRect().height;
		const innerHeight = window.innerHeight - navbarHeight;
		const heroBanner = document.querySelector('.HeroBanner');
		heroBanner.style.height = `${innerHeight}px`;
	}, []);

	useWindowResize(handleResize);

	return (
		<header className="HeroBanner">
			<div className="content">
				<h1>Luis E. Huerta</h1>
				<hr />
				<h4>Web Developer</h4>
				<div className="skills">
					{heroSkills.map(skill => (
						<i key={skill.name} className={skill.icon}></i>
					))}
				</div>
			</div>
		</header>
	);
};
