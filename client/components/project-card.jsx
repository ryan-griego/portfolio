import React from 'react';
import {
  Card,
  CardBody,
  CardFooter
} from 'reactstrap';
import { Controls, PlayState, Tween, Reveal } from 'react-gsap';

function ProjectCard(props) {

  const gitHubLink = <Reveal repeat>
    <Tween
      from={{ opacity: 0, y: '50px' }} duration={1}
      to={{ opacity: 1, y: '0px' }} duration={1}
    ><a className="btn btn-share default-nav decoration-none ml-3"
        target="_blank"
        rel="noopener noreferrer"
        href={props.project.github}>
        <i className="fab fa-github mr-2" />GitHub</a></Tween>
  </Reveal>;
  console.log('log the props', props);
  const img = <img src={props.project.image}
    className="img-fluid border rounded"
    alt={props.project.alt} />;

  console.log('log the img', img);

  const checkGithub = props.project.github === 'none' ? '' : gitHubLink;
  console.log('log the props', props);
  const isBlog = props.blog === true ? '' : img;
  return (

    <Card className="h-100 item rounded border">
      <CardBody
        className="p-3">
        <Reveal repeat>
          <Tween
            from={{ opacity: 0, y: '50px' }} duration={1}
            to={{ opacity: 1, y: '0px' }} duration={1}
          >
            <a href={props.project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="pointer decoration-none position-relative">

              {isBlog}
              {/* <img src={props.project.image}
                className="img-fluid border rounded"
                alt={props.project.alt} /> */}
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
          </Tween>
        </Reveal>

      </CardBody>
      <CardFooter className="bg-white p-3">
        <Reveal repeat>
          <Tween
            from={{ opacity: 0, y: '50px' }} duration={1}
            to={{ opacity: 1, y: '0px' }} duration={1}
          >
            <a className="btn btn-share default-nav decoration-none"
              target="_blank"
              rel="noopener noreferrer"
              href={props.project.live}>
              <i className="far fa-window-restore mr-2" />Live</a>
          </Tween>
        </Reveal>
        {checkGithub}

      </CardFooter>
    </Card>

  );
}

export default ProjectCard;
