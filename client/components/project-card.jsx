import React from 'react';
import {
  Card,
  CardBody,
  CardFooter
} from 'reactstrap';

function ProjectCard(props) {
  return (
    <Card className="h-100 rounded border slide-in-10"
      style={{ animationDelay: props.delay + 'ms' }}>
      <CardBody
        className="p-3">
        <a href={props.project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer decoration-none position-relative">
          <img src={props.project.image}
            className="img-fluid border rounded"
            alt={props.project.alt} />
        </a>
        <h5 className="text-center my-3">
          {props.project.name}
        </h5>
        <p className="mb-3">
          {props.truncateDescription(props.project.description, props.project.name)}
        </p>
        <h6 className="text-center mb-3">Developed Using</h6>
        <div className="d-flex align-content-start flex-wrap w-100">
          {props.getTechnologies(props.project.technologies)}
        </div>
      </CardBody>
      <CardFooter className="bg-white p-3">
        <a className="btn btn-share default-nav decoration-none fade-in slide-in mr-3"
          target="_blank"
          rel="noopener noreferrer"
          href={props.project.github}>
          <i className="fab fa-github mr-2" />GitHub</a>
        <a className="btn btn-share default-nav decoration-none fade-in slide-in"
          target="_blank"
          rel="noopener noreferrer"
          href={props.project.live}>
          <i className="far fa-window-restore mr-2" />Live</a>
      </CardFooter>
    </Card>
  );
}

export default ProjectCard;
