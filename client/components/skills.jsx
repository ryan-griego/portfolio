import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import InfoCard from './info-card';
import { Controls, PlayState, Tween, Reveal } from 'react-gsap';

function Skills() {
  const skills = [
    {
      name: 'JavaScript',
      logo: '/assets/icons/javascript.svg',
      tooltip: 'JavaScript'
    },
    {
      name: 'React',
      logo: '/assets/icons/react.svg',
      tooltip: 'React'
    },
    {
      name: 'Vue',
      logo: '/assets/icons/vue.svg',
      tooltip: 'Vue'
    },
    {
      name: 'PHP',
      logo: '/assets/icons/php-logo.png',
      tooltip: 'PHP'
    },
    {
      name: 'Node.js',
      logo: '/assets/icons/node-js.svg',
      tooltip: 'Node.js'
    },
    {
      name: 'Express',
      logo: '/assets/icons/express.svg',
      tooltip: 'Express'
    },
    {
      name: 'Wordpress',
      logo: '/assets/icons/wordpress.svg',
      tooltip: 'Wordpress'
    },
    {
      name: 'PostgreSQL',
      logo: '/assets/icons/postgresql.svg',
      tooltip: 'PostgreSQL'
    },
    {
      name: 'MySQL',
      logo: '/assets/icons/mysql.svg',
      tooltip: 'MySQL'
    },
    {
      name: 'HTML5',
      logo: '/assets/icons/html5.svg',
      tooltip: 'HTML5'
    },
    {
      name: 'CSS3',
      logo: '/assets/icons/css3.svg',
      tooltip: 'CSS3'
    },
    {
      name: 'Bootstrap',
      logo: '/assets/icons/bootstrap.svg',
      tooltip: 'Bootstrap'
    }
  ];

  const skillCards = skills.map((skill, index) => {
    return (

      <InfoCard key={index}
        logo={skill.logo}
        name={skill.name}
        tooltip={skill.tooltip}
      />

    );
  });

  return (

    <div className="skills-section topographic content-div position-relative"
      id="skills">
      <Container>
        <Row className="mobile-six-row">
          <Col xs="12">
            <Reveal repeat>
              <Tween
                from={{ opacity: 0, y: '50px' }} duration={1}
                to={{ opacity: 1, y: '0px' }} duration={1}
              >
                <div className="heading-div position-relative m-auto">
                  <h3 className="text-center heading mb-4 spread">Technical Skills</h3>
                </div>
              </Tween>
            </Reveal>
          </Col>
          {skillCards}
        </Row>
      </Container>
    </div>

  );
}

export default Skills;
