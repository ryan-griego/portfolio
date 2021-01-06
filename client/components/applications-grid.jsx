import React from 'react';
import {
  Row,
  Col
} from 'reactstrap';
import ProjectCard from './project-card';
import BlankCard from './blank-card';

function Grid(props) {
  return (
    <Row
      className="row-cols-1 row-cols-md-2 row-cols-lg-3">
      {getProjects(props.projects)}
    </Row>
  );
}

export default Grid;

function getProjects(projectsArray) {
  let delay = 0;
  return projectsArray.map((project, index) => {
    delay += 100;
    return (
      <Col key={index}
        className="mb-4">
        {project.description
          ? <ProjectCard project={project}
            delay={delay}
            truncateDescription={truncateDescription}
            getTechnologies={getTechnologies} />
          : <BlankCard project={project}
            delay={delay} />}
      </Col>
    );
  });
}

function truncateDescription(description, name) {
  if (name !== 'Spontaneous.ly') {
    const firstPeriod = description.indexOf('.');
    return description.slice(0, firstPeriod + 1);
  } else {
    return description.split('.', 2).join('.') + '.';
  }
}

function getTechnologies(project) {
  return project.map((technology, index) => {
    return <span key={index}
      className="badge custom-badge text-white my-1 ml-0 mr-2">{technology}</span>;
  });
}
