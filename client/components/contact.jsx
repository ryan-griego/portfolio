import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import LazyLoad from 'react-lazy-load';
import { Controls, PlayState, Tween, Reveal } from 'react-gsap';


function Contact(props) {
  return (
    <div className="content-div footer bg-white d-flex" id="contact">
      <Container className="m-auto">
        <Row>
          <Col sm="4" className="d-none d-sm-block">

                <div className="h-100 d-flex">
              <Reveal repeat>
                <Tween
                  from={{ opacity: 0, y: '100px' }} duration={1}
                  to={{ opacity: 1, y: '0px' }} duration={1}
                >
                  <hr className="m-auto w-100" />
                </Tween>
              </Reveal>
                </div>


          </Col>
          <Col sm="4">

              <Reveal repeat>
                <Tween
                  from={{ opacity: 0, y: '100px' }} duration={1}
                  to={{ opacity: 1, y: '0px' }} duration={1}
                >
              <img src="./images/portfolio-ryan-logo.png"
                className="img-fluid footer-logo fade-in"
                alt="Ryan Griego" />
                </Tween>
              </Reveal>

          </Col>
          <Col sm="4" className="d-none d-sm-block">
            <div className="h-100 d-flex">
              <Reveal repeat>
                <Tween
                  from={{ opacity: 0, y: '100px' }} duration={1}
                  to={{ opacity: 1, y: '0px' }} duration={1}
                >
              <hr className="m-auto w-100" />
                </Tween>
              </Reveal>
            </div>
          </Col>
        </Row>
        <div className="my-4">
          <Row className="justify-content-center">
            <Reveal repeat>
              <Tween
                from={{ opacity: 0, y: '100px' }} duration={1}
                to={{ opacity: 1, y: '0px' }} duration={1}
              >
            <p className="text-center mb-md-0 mx-4">
              <a href="https://www.google.com/maps/place/Orange+County,+CA/@33.6410077,-118.0496294,10z/data=!3m1!4b1!4m5!3m4!1s0x80dc925c54d5f7cf:0xdea6c3618ff0d607!8m2!3d33.7174708!4d-117.8311428"
                className="pointer pb-2 default-nav p-0"
                target="_blank"
                rel="noopener noreferrer">
                <i className="fas fa-map-marker-alt mr-2" />Orange County
              </a>
            </p>
            <p className="text-center mb-md-0 mx-4">
              <a href="tel:+19493108534"
                className="pointer pb-2 default-nav p-0">
                <i className="fas fa-phone-alt mr-2" />949-310-8534
              </a>
            </p>
            <p className="text-center mb-0 mx-4">
              <a href="mailto:ryangriego@gmail.com"
                className="pointer pb-2 default-nav p-0">
                <i className="fas fa-envelope mr-2" />ryangriego@gmail.com
              </a>
            </p>
              </Tween>
            </Reveal>
          </Row>
          <Row className="justify-content-center">
            <Reveal repeat>
              <Tween
                from={{ opacity: 0, y: '100px' }} duration={1}
                to={{ opacity: 1, y: '0px' }} duration={1}
              >
            <div className="mt-5 d-flex">
              <a href="https://github.com/ryan-griego/"
                target="_blank"
                rel="noopener noreferrer"
                className="decoration-none default-color contact-general pointer m-auto"
                aria-label="Github">
                <div className="border-div d-flex">
                  <i className="fab fa-github medium-font m-auto" />
                </div>
              </a>
              <a href="https://www.linkedin.com/in/ryan-griego-2134a340/"
                target="_blank"
                rel="noopener noreferrer"
                className="decoration-none default-color contact-general pointer mx-4 my-auto"
                aria-label="LinkedIn">
                <div className="border-div d-flex">
                  <i className="fab fa-linkedin medium-font m-auto" />
                </div>
              </a>
              <a href="/assets/ryan_griego_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="decoration-none default-color contact-general pointer m-auto"
                aria-label="Resume Download"
                download>
                <div className="border-div d-flex">
                  <i className="far fa-file-alt medium-font m-auto" />
                </div>
              </a>
            </div>
              </Tween>
            </Reveal>
          </Row>
        </div>
        <Reveal repeat>
          <Tween
            from={{ opacity: 0, y: '100px' }} duration={1}
            to={{ opacity: 1, y: '0px' }} duration={1}
          >
        <p className="mb-0 text-center h6">&copy; Ryan Griego {props.year}</p>
          </Tween>
        </Reveal>
      </Container>
    </div>
  );
}

export default Contact;
