import React from 'react';

export const Project = ({
	name,
	image,
	description,
	position,
	responsibilities,
	skills = []
}) => {
	return (
		<div className="Project">
			<img src={image} alt={name} />
			<h2>{name}</h2>
			<p className="position">{position}</p>
			<hr />
			<p className="description">
				<strong>Description: </strong>
				{description}
			</p>
			<p className="responsibilities">
				<strong>Responsibilities: </strong>
				{responsibilities}
			</p>
			<p className="skills-used-title">
				<strong>Skills used</strong>
			</p>
			<div className="skills-used">
				{skills.map(skill => (
					<p key={skill}>
						<i className="fas fa-check"></i>
						{skill}
					</p>
				))}
			</div>
		</div>
	);
};
