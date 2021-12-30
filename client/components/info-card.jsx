import React from 'react';
import {
  Col,
  Card,
  CardBody
} from 'reactstrap';
import LazyLoad from 'react-lazy-load';
import { Controls, PlayState, Tween, Reveal } from 'react-gsap';

function InfoCard(props) {
  return (
    <Col lg="3"
      md="4"
      sm="6"
      className="p-sm-3 mobile-six-card">

      <Card className={`h-100 skills-card ${props.classes}`}>
        <CardBody>
          <Reveal repeat>
            <Tween
              from={{ opacity: 0, y: '50px' }} duration={0.5}
              to={{ opacity: 1, y: '0px' }} duration={0.5}
            >

              <img alt="JavaScript Icon"
                src={props.logo}
                className="icon-svg d-block m-auto" />

              <div className="my-3">
                <h4 className="text-center h5">{props.name}</h4>
              </div>
            </Tween>
          </Reveal>
        </CardBody>
      </Card>

    </Col>
  );
}

export default InfoCard;
