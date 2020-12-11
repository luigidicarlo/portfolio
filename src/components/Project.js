import React from 'react';
import { Link } from 'react-router-dom';

export const Project = ({ name, slug, image }) => {
  return (
    <Link className="Project" to={`/projects/${slug}`}>
      <img src={image} alt={name} />
      <h2>{name}</h2>
    </Link>
  );
};
