import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import LazyLoad from 'react-lazy-load';

function Contact(props) {
  return (
    <div className="content-div footer bg-white d-flex" id="contact">
      <Container className="m-auto">
        <Row>
          <Col sm="4" className="d-none d-sm-block">
            <div className="h-100 d-flex">
              <hr className="m-auto w-100" />
            </div>
          </Col>
          <Col sm="4">
            <LazyLoad
              debounce={false}
              offsetVertical={350}>
              <img src="./images/Kevin-Akahoshi-Horizontal-Logo-(No-Border).png"
                className="img-fluid footer-logo fade-in"
                alt="Kevin Akahoshi" />
            </LazyLoad>
          </Col>
          <Col sm="4" className="d-none d-sm-block">
            <div className="h-100 d-flex">
              <hr className="m-auto w-100" />
            </div>
          </Col>
        </Row>
        <div className="my-5">
          <Row className="justify-content-center">
            <p className="text-center mb-md-0 mx-4">
              <a href="https://www.google.com/maps/place/Orange+County,+CA/@33.6410077,-118.0496294,10z/data=!3m1!4b1!4m5!3m4!1s0x80dc925c54d5f7cf:0xdea6c3618ff0d607!8m2!3d33.7174708!4d-117.8311428"
                className="pointer pb-2 default-nav p-0"
                target="_blank"
                rel="noopener noreferrer">
                <i className="fas fa-map-marker-alt mr-2" />Orange County
              </a>
            </p>
            <p className="text-center mb-md-0 mx-4">
              <a href="tel:+19492027141"
                className="pointer pb-2 default-nav p-0">
                <i className="fas fa-phone-alt mr-2" />949-202-7141
              </a>
            </p>
            <p className="text-center mb-0 mx-4">
              <a href="mailto:kevin.akahoshi@gmail.com"
                className="pointer pb-2 default-nav p-0">
                <i className="fas fa-envelope mr-2" />kevin.akahoshi@gmail.com
              </a>
            </p>
          </Row>
          <Row className="justify-content-center">
            <div className="mt-5 d-flex">
              <a href="https://github.com/kevinakahoshi/"
                target="_blank"
                rel="noopener noreferrer"
                className="decoration-none default-color contact-general pointer m-auto"
                aria-label="Github">
                <div className="border-div d-flex">
                  <i className="fab fa-github medium-font m-auto" />
                </div>
              </a>
              <a href="https://www.linkedin.com/in/kevin-akahoshi/"
                target="_blank"
                rel="noopener noreferrer"
                className="decoration-none default-color contact-general pointer mx-4 my-auto"
                aria-label="LinkedIn">
                <div className="border-div d-flex">
                  <i className="fab fa-linkedin medium-font m-auto" />
                </div>
              </a>
              <a href="/assets/Kevin_Akahoshi.pdf"
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
          </Row>
        </div>
        <p className="mb-0 text-center h6">&copy; Kevin Akahoshi {props.year}</p>
      </Container>
    </div>
  );
}

export default Contact;
