import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import InfoCard from './info-card';

function Skills() {
  const skills = [
    {
      name: 'JavaScript',
      logo: '/assets/icons/javascript.svg'
    },
    {
      name: 'React.js',
      logo: '/assets/icons/react.svg'
    },
    {
      name: 'jQuery',
      logo: '/assets/icons/jquery.svg'
    },
    {
      name: 'Node.js',
      logo: '/assets/icons/node-js.svg'
    },
    {
      name: 'Express',
      logo: '/assets/icons/express.svg'
    },
    {
      name: 'PHP',
      logo: '/assets/icons/php.svg'
    },
    {
      name: 'PostgreSQL',
      logo: '/assets/icons/postgresql.svg'
    },
    {
      name: 'MySQL',
      logo: '/assets/icons/mysql.svg'
    },
    {
      name: 'HTML5',
      logo: '/assets/icons/html5.svg'
    },
    {
      name: 'CSS3',
      logo: '/assets/icons/css3.svg'
    },
    {
      name: 'Bootstrap',
      logo: '/assets/icons/bootstrap.svg'
    },
    {
      name: 'Material UI',
      logo: '/assets/icons/material-ui.svg'
    }
  ];

  const skillCards = skills.map((skill, index) => {
    return (
      <InfoCard key={index}
        logo={skill.logo}
        name={skill.name} />
    );
  });

  return (
    <div className="skills-section topographic content-div position-relative"
      id="skills">
      <Container>
        <Row className="mobile-six-row">
          <Col xs="12">
            <div className="heading-div position-relative m-auto">
              <h3 className="text-center heading mb-4 spread slide-in">Technical Skills</h3>
            </div>
          </Col>
          {skillCards}
        </Row>
      </Container>
    </div>
  );
}

export default Skills;
