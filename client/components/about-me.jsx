import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import LazyLoad from 'react-lazy-load';
import { Controls, PlayState, Tween, Reveal, Timeline } from 'react-gsap';

function AboutMe() {
  return (
    <div className="bg-light about-section content-div" id="about">
      <Container className="container-md">
        <Row>
          <Col md="5">

            <h3 className="heading mb-4 spread d-block d-sm-none text-center">About Me</h3>

            <Reveal repeat>
              <Tween
                from={{ opacity: 0, x: '-100px' }} duration={1}
                to={{ opacity: 1, x: '0px' }} duration={1}
              >
                <img src="images/ryan-hero.jpg"
                  className="img-fluid"
                  alt="Portrait photo of Ryan Griego with red/orange gradient of topographic pattern in the background" />

              </Tween>
            </Reveal>

            <Reveal repeat>
              <div className="my-3 d-flex justify-content-center">
                <Tween from={{ opacity: 0, y: '0px' }} to={{ opacity: 1, y: '-50px' }} stagger={0.2} ease="elastic.out(0.2, 0.1)" delay={0.5}>
                  <a href="https://github.com/ryan-griego/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="decoration-none default-nav contact-github pointer mr-2"
                    aria-label="Github">
                    <div className="border-div-small d-flex">
                      <i className="fab fa-github small-font m-auto" />
                    </div>
                  </a>
                  <a href="https://www.linkedin.com/in/ryan-griego-2134a340/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="decoration-none default-nav contact-linkedin pointer mr-2"
                    aria-label="LinkedIn">
                    <div className="border-div-small d-flex">
                      <i className="fab fa-linkedin small-font m-auto" />
                    </div>
                  </a>
                  <a href="tel:+19493108534"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="decoration-none default-nav contact-general pointer mr-2"
                    aria-label="Phone">
                    <div className="border-div-small d-flex">
                      <i className="fas fa-phone-alt small-font m-auto" />
                    </div>
                  </a>
                  <a href="mailto:ryangriego@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="decoration-none default-nav contact-general pointer mr-2"
                    aria-label="Email">
                    <div className="border-div-small d-flex">
                      <i className="far fa-envelope small-font m-auto" />
                    </div>
                  </a>
                  <a href="/assets/ryan_griego_resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="decoration-none default-nav contact-general pointer"
                    aria-label="Resume Download"
                    download>
                    <div className="border-div-small d-flex">
                      <i className="far fa-file-alt small-font m-auto" />
                    </div>
                  </a>
                </Tween>
              </div>

            </Reveal>

          </Col>
          <Col md="6 ml-4">
            <div className="d-flex h-100">
              <div className="m-auto">
                <div className="position-relative d-none d-sm-block slide-in-10">
                  <Reveal repeat>
                    <Tween
                      from={{ opacity: 0, x: '100px' }} duration={1}
                      to={{ opacity: 1, x: '0px' }} duration={1}
                    >
                      <h3 className="heading mb-4 spread fade-in">About Me</h3>
                    </Tween>
                  </Reveal>
                </div>
                <div>
                  <Reveal repeat>
                    <Tween
                      from={{ opacity: 0, y: '100px' }} duration={1}
                      to={{ opacity: 1, y: '0px' }} duration={1}
                    >
                      <p>Hi! I&#39;m Ryan and I’m a web developer who loves solving problems and instructing computers to do things that make a tremendous impact. My philosophy is simple: “details, details, details… Take the time to attend to every detail.”</p>
                      <p>I’ve been working professionally in the industry since 2014 and have skills in the following languages JavaScript (ES5 + ES6), React, Vue, PHP, Node.js, Express, HTML, and CSS. I also make use of tools such as Git/GitHub, Postman, npm, and Webpack.</p>
                      <p>This website is built with React and was coded with Visual Studio Code, my editor of choice.</p>
                      <br></br>
                    </Tween>
                  </Reveal>

                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutMe;
