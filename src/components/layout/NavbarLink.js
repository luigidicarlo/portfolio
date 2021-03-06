import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavbarLink = ({ to, text, icon }) => (
	<li className="NavbarLink">
		<NavLink exact={to === '/'} to={to} activeClassName="active">
			<i className={icon}></i> <span>{text}</span>
		</NavLink>
	</li>
);
