import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import LazyLoad from 'react-lazy-load';

function Hero() {
  return (
    <div className="main-hero d-flex bg-white">
      <Container
        className="m-auto"
        fluid>
        <Row>
          <Col md="6"
            className="d-flex order-2 order-sm-1">
            <div className="m-auto">
              <h1 className="spread fade-in slide-in-10">Ryan Griego</h1>
              <h2 className="text-muted h3 fade-in slide-in-10">Web Developer</h2>
            </div>
          </Col>
          <Col md="6"
            className="p-0 order-1 order-sm-2">
            <LazyLoad
              debounce={false}
              offsetVertical={350}>
              <img
                src="/images/ryan-phones-j.jpg"
                className="hero-image fade-in slide-in-10"
                alt="Mocks of the different apps made on mobile phones." />
            </LazyLoad>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;
