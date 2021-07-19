import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import LazyLoad from 'react-lazy-load';
import { Controls, PlayState, Tween, SplitChars } from 'react-gsap';


function Hero() {
  return (
    <div className="main-hero d-flex bg-white">
      <Container
        className="m-auto"
        fluid>
        <Row>
          <Col md="6"
            className="d-flex order-2 order-sm-1">

            <Tween from={{ y: '400px' }} duration={2}>
            <div className="m-auto">

              <h1 className="spread">Ryan Griego</h1>
              <h2 className="text-muted h3">Web Developer</h2>

            </div>
            </Tween>

            <Tween from={{ x: '700px', y:'600px' }} stagger={0.1}>

              <SplitChars
                wrapper={<h1 style={{ display: 'inline-block', fontSize: '40px' }} />}
              >
                Ryan&nbsp;Griego

              </SplitChars>
            </Tween>

            <Tween from={{ x: '200px' }} stagger={0.1}>

              <SplitChars
                wrapper={<h2 style={{ display: 'block', fontSize: '40px' }} />}
              >
                Web&nbsp;Developer

              </SplitChars>
            </Tween>
          </Col>
          <Col md="6"
            className="p-0 order-1 order-sm-2">
            <Tween from={{ x: '200px' }} duration={2}>
              <img
                src="/images/ryan-phones.jpg"
                className="hero-image"
                alt="Mocks of the different apps made on mobile phones." />
            </Tween>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;
