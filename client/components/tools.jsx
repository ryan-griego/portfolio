import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import InfoCard from './info-card';

function Tools() {
  const tools = [
    {
      name: 'GitHub',
      logo: '/assets/icons/github.svg'
    },
    {
      name: 'AWS',
      logo: '/assets/icons/aws.svg'
    },
    {
      name: 'npm',
      logo: '/assets/icons/npm.svg'
    },
    {
      name: 'Webpack',
      logo: '/assets/icons/webpack.svg'
    },
    {
      name: 'Babel',
      logo: '/assets/icons/babel.svg'
    },
    {
      name: 'Apache',
      logo: '/assets/icons/apache.svg'
    },
    {
      name: 'Chrome Dev Tools',
      logo: '/assets/icons/chrome-dev-tools.svg'
    },
    {
      name: 'JIRA',
      logo: '/assets/icons/jira.svg'
    },
    {
      name: 'VS Code',
      logo: '/assets/icons/vs-code.svg'
    },
    {
      name: 'Figma',
      logo: '/assets/icons/figma.svg'
    },
    {
      name: 'Photoshop',
      logo: '/assets/icons/photoshop.svg'
    },
    {
      name: 'Slack',
      logo: '/assets/icons/slack.svg'
    }
  ];

  const toolCards = tools.map((tool, index) => {
    return (
      <InfoCard key={index}
        logo={tool.logo}
        name={tool.name}
        classes={'shadow-none bg-transparent text-white'} />
    );
  });

  return (
    <div className="tools-section nihon-background content-div topographic-2" id="tools">
      <Container>
        <Row className="mobile-six-row">
          <Col xs="12">
            <div className="heading-div position-relative m-auto">
              <h3 className="text-center heading mb-4 text-white spread slide-in">Tools</h3>
            </div>
          </Col>
          {toolCards}
        </Row>
      </Container>
    </div>
  );
}

export default Tools;
