import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import LazyLoad from 'react-lazy-load';
import { Controls, PlayState, Tween, SplitChars } from 'react-gsap';

function Hero(props) {
  console.log('log the props in hero', props);
  if (props.isFun === 'true') {
    console.log('log value of isFun in true', props.isFun);
    return (
      <div className="main-hero d-flex bg-red">
        <Container
          className="m-auto"
          fluid>

          <Row className="m-auto">
            <Col md="6"
              className="d-flex order-1 order-sm-1">
              <Row className="m-auto">
                <Tween
                  from={{ x: '-900px', y: '-800px', delay: 1.5, opacity: 0 }} stagger={0.1}
                  to={{ x: '0px', y: '0px', delay: 1.5, opacity: 1 }} stagger={0.1}
                >

                  <SplitChars
                    wrapper={<h1 className="h1 hero-name" />}
                  >
                    Welcome&nbsp;to
                  </SplitChars>

                </Tween>

                <Col md="6"
                  className="d-flex order-2 order-sm-2" style={{ padding: 0 }}>
                  <Tween
                    from={{ x: '-900px', y: '-800px', delay: 2.75, opacity: 0 }} stagger={0.1}
                    to={{ x: '0px', y: '0px', delay: 2.75, opacity: 1 }} stagger={0.1}
                  >

                    <SplitChars
                      wrapper={<h1 style={{ fontSize: '40px' }} className="text-muted h3" />}
                    >
                      Fun&nbsp;Mode
                    </SplitChars>

                  </Tween>
                </Col>
              </Row>
            </Col>

            <Col md="6"
              className="p-0 pt-4 order-3 order-sm-3">
              <Tween
                from={{ x: '100%', delay: 1.5, opacity: 0 }} duration={0.5}
                to={{ opacity: 1, delay: 1.5, x: '0px' }} duration={1}
              >
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
  } else {
    console.log('log value of isFun in false', props.isFun);
    console.log('log the props in the false return statement', props);
    return (
      <div className="main-hero d-flex bg-white">
        <Container
          className="m-auto"
          fluid>

          <Row className="m-auto">
            <Col md="6"
              className="d-flex order-1 order-sm-1">
              <Row className="m-auto">
                <Tween
                  from={{ x: '-900px', y: '-800px', delay: 1.5, opacity: 0 }} stagger={0.1}
                  to={{ x: '0px', y: '0px', delay: 1.5, opacity: 1 }} stagger={0.1}
                >

                  <SplitChars
                    wrapper={<h1 className="h1 hero-name" />}
                  >
                    Ryan&nbsp;Griego
                  </SplitChars>

                </Tween>

                <Col md="6"
                  className="d-flex order-2 order-sm-2" style={{ padding: 0 }}>
                  <Tween
                    from={{ x: '-900px', y: '-800px', delay: 2.75, opacity: 0 }} stagger={0.1}
                    to={{ x: '0px', y: '0px', delay: 2.75, opacity: 1 }} stagger={0.1}
                  >

                    <SplitChars
                      wrapper={<h1 style={{ fontSize: '40px' }} className="text-muted h3" />}
                    >
                      Web&nbsp;Developer
                    </SplitChars>

                  </Tween>
                </Col>
              </Row>
            </Col>

            <Col md="6"
              className="p-0 pt-4 order-3 order-sm-3">
              <Tween
                from={{ x: '100%', delay: 1.5, opacity: 0 }} duration={0.5}
                to={{ opacity: 1, delay: 1.5, x: '0px' }} duration={1}
              >
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

}

export default Hero;
