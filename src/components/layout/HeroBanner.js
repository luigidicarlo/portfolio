import React from 'react';
import { useWindowResize } from '../../hooks/useWindowResize';

const skills = [
	{ name: 'react', icon: 'fab fa-react' },
	{ name: 'angular', icon: 'fab fa-angular' },
	{ name: 'php', icon: 'fab fa-php' },
	{ name: 'laravel', icon: 'fab fa-laravel' },
	{ name: 'database', icon: 'fas fa-database' },
	{ name: 'github', icon: 'fab fa-git' }
];

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
					{skills.map(skill => (
						<i key={skill.name} className={skill.icon}></i>
					))}
				</div>
			</div>
		</header>
	);
};
