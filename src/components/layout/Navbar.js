import React from 'react';
import { NavbarLink } from './NavbarLink';

const links = [{ to: '/', text: 'Home', icon: 'fas fa-home' }];

export const Navbar = () => (
	<nav className="Navbar">
		<ul className="nav">
			{links.map(link => (
				<NavbarLink key={link.text} {...link} />
			))}
		</ul>
	</nav>
);
