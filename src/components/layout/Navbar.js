import React from 'react';
import { links } from '../../assets/data/navbarLinks';
import { NavbarLink } from './NavbarLink';

export const Navbar = () => (
	<nav className="Navbar">
		<ul className="nav">
			{links.map(link => (
				<NavbarLink key={link.text} {...link} />
			))}
		</ul>
	</nav>
);
