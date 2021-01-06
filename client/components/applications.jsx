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
          image: '/images/hi-tech-auto-carousel.jpg',
          alt: 'Man working on car with text that says Hi-Tech Auto',
          name: 'Hi-Tech Auto',
          technologies: ['Gatsby.js', 'React.js', 'React Hooks', 'GraphQL', 'Reactstrap', 'Bootstrap', 'HTML', 'CSS'],
          description: 'Hi-Tech Auto is a static informational website that I created for a small independent mechanic shop.  This site provides users with general information about the shop, the best ways to contact the shop, services offered, and operating hours.',
          github: 'https://github.com/kevinakahoshi/hi-tech-auto',
          live: 'https://hitechauto.us/'
        },
        {
          id: 2,
          image: '/images/beacon-daily-carousel.jpg',
          alt: 'Topographic map pattern with text that says Beacon Daily',
          name: 'Beacon Daily',
          technologies: ['React.js', 'React Hooks', 'React Router', 'Node.js', 'Express', 'PostgreSQL', 'Material UI', 'HTML', 'CSS'],
          description: 'Beacon Daily is a simple and modern looking full-stack CRUD app for task tracking.  Users can create new checklist items, view completed or incomplete checklist items, update tasks with new information, and delete both completed or incomplete checklist items.',
          github: 'https://github.com/kevinakahoshi/beacon-daily',
          live: 'https://beacon-daily.kevinakahoshi.com/'
        },
        {
          id: 3,
          image: '/images/spontaneously-carousel.jpg',
          alt: 'Man on skateboard with colorful powder going everywhere and text overlay that says Spontaneous.ly',
          name: 'Spontaneous.ly',
          description: 'Spontaneous.ly is a full-stack application for users that want to embark on a spontaneous adventure.  Users can enter their zipcode, add filtering for results, and choose activities based on the returned results.  By attending activities, users will gain points, as well as see the other users attending the activity.  If users don\'t like the activities they are presented, they have the option to spend their points to go back to the filtering screen, or cancel their reservation for a given activity.',
          technologies: ['React.js', 'React Router', 'JavaScript', 'PHP', 'MySQL', 'Bootstrap', 'HTML', 'CSS'],
          github: 'https://github.com/kevinakahoshi/spontaneous.ly',
          live: 'https://spontaneouslyapp.com/'
        },
        {
          id: 4,
          image: '/images/coffeine-carousel.jpg',
          alt: 'Coffee bean roasting machine filled with fresh coffee beans with a text overlay that says Coffeine Supply Co.',
          name: 'Coffeine Supply Co',
          description: 'Coffeine Supply Co is a full-stack application developed for coffee lovers interested in coffee supplies.  Users can add coffee related products to their cart, view or edit their cart, and go through the checkout process like a real e-commerce webstore.',
          technologies: ['React.js', 'JavaScript', 'PHP', 'MySQL', 'Bootstrap', 'HTML', 'CSS'],
          github: 'https://github.com/kevinakahoshi/coffeine-supply-co',
          live: 'https://coffeine.kevinakahoshi.com/'
        },
        {
          id: 5,
          image: '/images/cyberpunk-carousel.jpg',
          alt: 'Slightly blurred background of a digital interface with a text overlay that says Cyberpunk Logo Match',
          name: 'Cyberpunk Logo Match',
          technologies: ['jQuery', 'JavaScript', 'HTML', 'CSS'],
          description: 'Cyberpunk Logo Match is a memory matching game based on the dystopian future.  Users need to match corporate sponsor logos in under 60 seconds with above 50% accuracy to avoid being infected with malicious software.',
          github: 'https://github.com/kevinakahoshi/cyberpunk-logo-match',
          live: 'https://cyberpunk.kevinakahoshi.com/'
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
              <h3 className="text-center heading mb-4 spread slide-in-10">Applications</h3>
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
