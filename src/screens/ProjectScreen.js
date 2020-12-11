import React, { useEffect, useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { projects } from '../assets/data/projects';
import { MainContainer } from '../components/layout/MainContainer';
import { Page, PageTitle } from '../components/layout/Page';

export const ProjectScreen = () => {
  const [project, setProject] = useState(null);
  const [redirect, setRedirect] = useState(false);
  const { slug } = useParams();

  useEffect(() => {
    const matchedProject = projects.find(p => p.slug === slug);

    if (!matchedProject) setRedirect(true);

    setProject(matchedProject);
  }, [slug]);

  return (
    <React.Fragment>
      {redirect && <Redirect to="/projects" />}
      {project && (
        <Page className="ProjectScreen">
          <MainContainer>
            <PageTitle>{project.name}</PageTitle>
            <div className="container">
              <div className="image">
                <img src={project.image} alt={project.name} />
              </div>
              <div className="content">
                <hr />
                <h2>Description</h2>
                <p className="description">{project.description}</p>
                <h2>Position</h2>
                <p className="position">I worked as {project.position}.</p>
                <h2>Responsibilities</h2>
                <p className="responsibilities">{project.responsibilities}</p>
                <h2>Skills Used</h2>
                {project.skills.map(skill => (
                  <p className="skills-used" key={skill}>
                    <i className="fas fa-check"></i>
                    {skill}
                  </p>
                ))}
              </div>
            </div>
          </MainContainer>
        </Page>
      )}
    </React.Fragment>
  );
};
