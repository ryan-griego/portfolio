import React from 'react';
import {
  Card,
  CardBody,
  CardFooter
} from 'reactstrap';

function BlankCard(props) {
  return (
    <Card className="h-100 rounded border slide-in-10 d-none d-lg-flex"
      style={{ animationDelay: props.delay + 'ms' }}>
      <CardBody
        className="p-3">
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
      </CardBody>
      <CardFooter className="bg-white p-3">
        <a className="btn btn-share default-nav decoration-none fade-in slide-in disabled disabled-opacity mr-3">
          <i className="fab fa-github mr-2" />GitHub</a>
        <a className="btn btn-share default-nav decoration-none fade-in slide-in disabled disabled-opacity">
          <i className="far fa-window-restore mr-2" />Live</a>
      </CardFooter>
    </Card>
  );
}

export default BlankCard;
