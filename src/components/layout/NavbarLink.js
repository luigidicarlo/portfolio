import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavbarLink = ({ to, text, icon }) => (
	<li className="NavbarLink">
		<NavLink to={to}>
			<i className={icon}></i> <span>{text}</span>
		</NavLink>
	</li>
);
