import React from 'react';
import {
  Card,
  CardBody,
  CardFooter
} from 'reactstrap';
import { Controls, PlayState, Tween, Reveal } from 'react-gsap';


function BlankCard(props) {
  return (
    <Card className="h-100 rounded border d-none d-lg-flex"
      style={{ animationDelay: props.delay + 'ms' }}>
      <CardBody
        className="p-3">
        <Reveal repeat>
          <Tween
            from={{ opacity: 0, y: '100px' }} duration={1}
            to={{ opacity: 1, y: '0px' }} duration={1}
          >
            <div className="border rounded shimmer-background overflow-hidden">
              <div className="shimmer">
                <img src={props.project.image}
                  className="img-fluid"
                  alt={props.project.alt} />
              </div>
            </div>
            <h5 className="text-center my-3 text-black-50">
              {props.project.name}
            </h5>
            <div className="rounded mb-1 shimmer-background w-100 overflow-hidden">
              <p className="shimmer w-100">
                &nbsp;
              </p>
            </div>
            <div className="rounded mb-1 shimmer-background w-100 overflow-hidden">
              <p className="shimmer w-100">
                &nbsp;
              </p>
            </div>
            <div className="rounded mb-1 shimmer-background w-100 overflow-hidden">
              <p className="shimmer rounded w-100">
                &nbsp;
              </p>
            </div>

          </Tween>
        </Reveal>

      </CardBody>
      <CardFooter className="bg-white p-3">
        <Reveal repeat>
          <Tween
            from={{ y: '100px' }} duration={1}
            to={{y: '0px' }} duration={1}
          >
        <a className="btn btn-share default-nav decoration-none disabled disabled-opacity mr-3">
          <i className="fab fa-github mr-2" />GitHub</a>
        <a className="btn btn-share default-nav decoration-none disabled disabled-opacity">
          <i className="far fa-window-restore mr-2" />Live</a>
          </Tween>
        </Reveal>
      </CardFooter>
    </Card>
  );
}

export default BlankCard;
