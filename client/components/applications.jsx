import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import Carousel from './applications-carousel';
import Grid from './applications-grid';
import ToggleSwitch from './toggle-switch';
import { Controls, PlayState, Tween, Reveal } from 'react-gsap';

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
// gsap.registerPlugin(ScrollTrigger);

class Applications extends React.Component {
  constructor() {
    super();
    this.state = {
      view: 'grid',
      iconView: null,
      projects: [
        {
          id: 1,
          image: '/images/blog-ryan-griego-thumbnail.png',
          alt: 'Ryan Griego Blog Website Thumbnail',
          name: 'My Blog',
          technologies: ['Next.js', 'TypeScript', 'Javascript', 'Tailwind CSS'],
          description: 'I finally made my own blog.',
          github: 'https://github.com/ryan-griego/blog',
          live: 'https://www.franchisesnearme.com/'
        },
        {
          id: 1,
          image: '/images/franchisesnearme.png',
          alt: 'Franchisesnearme.com Website Thumbnail',
          name: 'Franchisesnearme.com',
          technologies: ['Wordpress', 'HTML', 'CSS'],
          description: 'Website for Spectrum Franchise Group.',
          github: 'none',
          live: 'https://ryangriego.com/blog'
        },
        {
          id: 1,
          image: '/images/saferacks.jpg',
          alt: 'SafeRacks Thumbnail',
          name: 'SafeRacks',
          technologies: ['Wordpress', 'Javascript', 'Bootstrap', 'HTML', 'CSS'],
          description: 'Redesigned online store selling various garage storage products.',
          github: 'none',
          live: 'https://www.saferacks.com/'
        },
        {
          id: 2,
          image: '/images/monsterrax.jpg',
          alt: 'Monsterrax Thumbnail',
          name: 'Monsterrax',
          technologies: ['Wordpress', 'Javascript', 'Bootstrap', 'HTML', 'CSS'],
          description: 'A Redesigned online store selling various garage storage products.',
          github: 'none',
          live: 'https://www.Monsterrax.com/'
        },
        {
          id: 1,
          image: '/images/booksforyourprofession.jpg',
          alt: 'Books For Your Profession Project Thumbnail',
          name: 'Books For Your Professsion',
          technologies: ['React', 'PostgreSQL', 'Express', 'Google Books API', 'Bootstrap', 'HTML', 'CSS'],
          description: 'An app for professionals who want to find out the most recommended books for their profession.',
          github: 'https://github.com/ryan-griego/books-for-your-profession',
          live: 'https://booksforyourprofession.ryangriego.com/'
        },
        {
          id: 2,
          image: '/images/gameknight.jpg',
          alt: 'GameKnight Project Thumbnail',
          name: 'GameKnight',
          technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'HTML', 'CSS'],
          description: 'A full-stack React shopping cart app developed for board gamers to buy more games.',
          github: 'https://github.com/ryan-griego/gameknight',
          live: 'https://gameknight.ryangriego.com/'
        },
        {
          id: 6,
          image: '/images/blank.png',
          alt: '',
          name: 'Coming Soon',
          technologies: [],
          description: '',
          github: '',
          live: ''
        }
      ]
    };

    this.setView = this.setView.bind(this);
    this.toggleView = this.toggleView.bind(this);
    this.toggleTooltip = this.toggleTooltip.bind(this);
  }

  setView(view) {
    this.setState({ view });
  }

  toggleView() {
    if (this.state.view === 'carousel') {
      this.setView('grid');
    } else {
      this.setView('carousel');
    }
  }

  toggleTooltip(iconView) {
    this.setState({ tooltipOpen: !this.state.tooltipOpen, iconView });
  }

  render() {
    return (
      <div className="applications-section bg-white"
        id="applications">
        <Container>
          <Row>
            <Col xs="12">

              <Reveal repeat>
                <Tween
                  from={{ opacity: 0, x: '-100px' }} duration={0.5}
                  to={{ opacity: 1, x: '0px' }} duration={0.5}
                >
                  <h3>Websites</h3>
                </Tween>
              </Reveal>

              <ToggleSwitch setView={this.setView}
                toggleView={this.toggleView}
                toggleTooltip={this.toggleTooltip}
                tooltipOpen={this.state.tooltipOpen}
                iconView={this.state.iconView}
                view={this.state.view}
              />

              {this.state.view === 'carousel'
                ? <Carousel projects={this.state.projects} />
                : <Grid projects={this.state.projects}/>}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Applications;
