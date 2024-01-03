import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import LazyLoad from 'react-lazy-load';
import { Controls, PlayState, Tween, SplitChars, Timeline } from 'react-gsap';

function Hero() {
  return (
    <div className="main-hero d-flex bg-main">
      <div className="overlay-intro"></div>
      <Container
        className="m-auto"
        fluid>
        <Row className="mx-auto">
          <Col md="12"
            className="d-flex order-1 order-sm-1">
            <Row className="m-auto hero-container">
              <Tween
                from={{ x: '-900px', y: '-800px', delay: 2.5, opacity: 0 }} stagger={0.1}
                to={{ x: '0px', y: '0px', delay: 2.5, opacity: 1 }} stagger={0.1}
              >
                <SplitChars
                  wrapper={<h1 className="h1 hero-name" />}
                >
                Ryan&nbsp;Griego
                </SplitChars>
              </Tween>
              <Col md="12"
                className="d-flex order-2 order-sm-2 text-center hero-subheading" style={{ padding: 0 }}>
                <Tween
                  from={{ x: '-900px', y: '-800px', delay: 3.75, opacity: 0 }} stagger={0.1}
                  to={{ x: '0px', y: '0px', delay: 3.75, opacity: 1 }} stagger={0.1}
                >
                  <SplitChars
                    wrapper={<h1 className="text-muted h3 subheading" />}
                  >
                    Software&nbsp;Engineer
                  </SplitChars>
                </Tween>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;
