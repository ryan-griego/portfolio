import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import InfoCard from './info-card';
import { Controls, PlayState, Tween, Reveal } from 'react-gsap';

function Tools() {
  const tools = [
    {
      name: 'GitHub',
      logo: '/assets/icons/github.svg',
      tooltip: 'GitHub'
    },
    {
      name: 'AWS',
      logo: '/assets/icons/aws.svg',
      tooltip: 'AWS'
    },
    {
      name: 'npm',
      logo: '/assets/icons/npm.svg',
      tooltip: 'npm'
    },
    {
      name: 'Webpack',
      logo: '/assets/icons/webpack.svg',
      tooltip: 'Webpack'
    },
    {
      name: 'Babel',
      logo: '/assets/icons/babel.svg',
      tooltip: 'Babel'
    },
    {
      name: 'Apache',
      logo: '/assets/icons/apache.svg',
      tooltip: 'Apache'
    },
    {
      name: 'Chrome Dev Tools',
      logo: '/assets/icons/chrome-dev-tools.svg',
      tooltip: 'Chrome Dev Tools'
    },
    {
      name: 'Trello',
      logo: '/assets/icons/trello.svg',
      tooltip: 'Trello'
    },
    {
      name: 'VS Code',
      logo: '/assets/icons/vs-code.svg',
      tooltip: 'VS Code'
    },
    {
      name: 'Figma',
      logo: '/assets/icons/figma.svg',
      tooltip: 'Figma'
    },
    {
      name: 'Photoshop',
      logo: '/assets/icons/photoshop.svg',
      tooltip: 'Photoshop'
    },
    {
      name: 'Slack',
      logo: '/assets/icons/slack.svg',
      tooltip: 'Slack'
    }
  ];

  const toolCards = tools.map((tool, index) => {
    return (
      <InfoCard key={index}
        skill={''}
        logo={tool.logo}
        name={tool.name}
        tooltip={tool.tooltip}
        classes={'shadow-none bg-transparent text-white'} />
    );
  });

  return (
    <div className="tools-section nihon-background content-div topographic-2" id="tools">
      <Container>
        <Row className="mobile-six-row">
          <Col xs="12">
            <div className="heading-div position-relative m-auto">
              <Reveal repeat>
                <Tween
                  from={{ opacity: 0, x: '-50px' }} duration={1}
                  to={{ opacity: 1, x: '0px' }} duration={1}
                >
                  <h3 className="text-center heading mb-4 text-white spread">Tools</h3>
                </Tween>
              </Reveal>
            </div>
          </Col>
          {toolCards}
        </Row>
      </Container>
    </div>
  );
}

export default Tools;
