import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import Carousel from './applications-carousel';
import Grid from './applications-grid';
import ToggleSwitch from './toggle-switch';

class Applications extends React.Component {
  constructor() {
    super();
    this.state = {
      view: 'grid',
      iconView: null,
      projects: [
        {
          id: 1,
          image: '/images/saferacks.jpg',
          alt: 'SafeRacks Thumbnail',
          name: 'SafeRacks',
          technologies: ['Wordpress', 'Bootstrap', 'HTML', 'CSS'],
          description: 'Redesigned online store selling various garage storage products.',
          github: 'none',
          live: 'https://www.saferacks.com/'
        },
        {
          id: 2,
          image: '/images/monsterrax.jpg',
          alt: 'Monsterrax Thumbnail',
          name: 'Monsterrax',
          technologies: ['Wordpress', 'Bootstrap', 'HTML', 'CSS'],
          description: 'A Redesigned online store selling various garage storage products.',
          github: 'none',
          live: 'https://www.Monsterrax.com/'
        },
        {
          id: 1,
          image: '/images/booksforyourprofession.jpg',
          alt: 'Books For Your Profession Project Thumbnail',
          name: 'Books For Your Professsion',
          technologies: ['React.js', 'PostgreSQL', 'Express', 'Google Books API', 'Bootstrap', 'HTML', 'CSS'],
          description: 'An app for professionals who want to find out the most recommended books for their profession.',
          github: 'https://github.com/ryan-griego/books-for-your-profession',
          live: 'https://booksforyourprofession.ryangriego.com/'
        },
        {
          id: 2,
          image: '/images/gameknight.jpg',
          alt: 'GameKnight Project Thumbnail',
          name: 'GameKnight',
          technologies: ['React.js', 'Node.js', 'Express', 'PostgreSQL', 'HTML', 'CSS'],
          description: 'A full-stack React shopping cart app developed for board game lovers to buy their games.',
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
              <h3 className="text-center heading mb-4 spread slide-in-10">Websites</h3>
              <ToggleSwitch setView={this.setView}
                toggleView={this.toggleView}
                toggleTooltip={this.toggleTooltip}
                tooltipOpen={this.state.tooltipOpen}
                iconView={this.state.iconView}
                view={this.state.view} />
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
