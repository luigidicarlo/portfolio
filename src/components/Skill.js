import React from 'react';

export const Skill = ({ name, description, icon }) => (
	<div className="Skill">
		<h2>
			<i className={icon}></i> {name}
		</h2>
		<p>{description}</p>
	</div>
);
