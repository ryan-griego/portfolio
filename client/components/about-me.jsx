import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import LazyLoad from 'react-lazy-load';

function AboutMe() {
  return (
    <div className="bg-light about-section content-div" id="about">
      <Container className="container-md">
        <Row>
          <Col md="4">
            <h3 className="heading mb-4 spread d-block d-sm-none text-center fade-in slide-in-10">About Me</h3>
            <LazyLoad
              debounce={false}
              offsetVertical={500}>
              <img src="images/portrait-2020.png"
                className="img-fluid fade-in slide-in-10"
                alt="Portrait photo of Kevin Akahoshi with red/orange gradient of topographic pattern in the background" />
            </LazyLoad>
            <div className="my-3 d-flex justify-content-center fade-in slide-in-10">
              <a href="https://github.com/kevinakahoshi/"
                target="_blank"
                rel="noopener noreferrer"
                className="decoration-none default-nav contact-github pointer mr-2"
                aria-label="Github">
                <div className="border-div-small d-flex">
                  <i className="fab fa-github small-font m-auto" />
                </div>
              </a>
              <a href="https://www.linkedin.com/in/kevin-akahoshi/"
                target="_blank"
                rel="noopener noreferrer"
                className="decoration-none default-nav contact-linkedin pointer mr-2"
                aria-label="LinkedIn">
                <div className="border-div-small d-flex">
                  <i className="fab fa-linkedin small-font m-auto" />
                </div>
              </a>
              <a href="tel:+19492027141"
                target="_blank"
                rel="noopener noreferrer"
                className="decoration-none default-nav contact-general pointer mr-2"
                aria-label="Phone">
                <div className="border-div-small d-flex">
                  <i className="fas fa-phone-alt small-font m-auto" />
                </div>
              </a>
              <a href="mailto:kevin.akahoshi@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="decoration-none default-nav contact-general pointer mr-2"
                aria-label="Email">
                <div className="border-div-small d-flex">
                  <i className="far fa-envelope small-font m-auto" />
                </div>
              </a>
              <a href="/assets/Kevin_Akahoshi.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="decoration-none default-nav contact-general pointer"
                aria-label="Resume Download"
                download>
                <div className="border-div-small d-flex">
                  <i className="far fa-file-alt small-font m-auto" />
                </div>
              </a>
            </div>
          </Col>
          <Col md="8">
            <div className="d-flex h-100">
              <div className="m-auto">
                <div className="position-relative d-none d-sm-block slide-in-10">
                  <h3 className="heading mb-4 spread fade-in">About Me</h3>
                </div>
                <div className="slide-in-10">
                  <p>I&#39;m Kevin Akahoshi, and I&#39;m a Software Engineer that has a passion for technology, coding, and a great cup of coffee.</p>
                  <p>I&#39;m skilled in languages such as JavaScript (ES5 + ES6), React.js, jQuery, Node.js, Express, PHP, HTML, and CSS. I&#39;m intimately familiar with tools like Git/GitHub, Postman, npm, and Webpack. Lastly, I&#39;ve participated in team-based hackathons, as well as some solo projects, to build full-stack web applications.</p>
                  <p>What got me interested in coding initially was the ability to build cool things, but what keeps me going is that I can create software from nothing that solves real problems.</p>
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
