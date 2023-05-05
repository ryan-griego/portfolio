import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import Carousel from '../applications-carousel';
import Grid from './blog-grid';
import ToggleSwitch from '../toggle-switch';
import { Controls, PlayState, Tween, Reveal } from 'react-gsap';
import Header from '../header';

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
// gsap.registerPlugin(ScrollTrigger);

class Applications extends React.Component {
  constructor() {
    super();
    this.state = {
      view: 'grid',
      iconView: null,
      blog_articles: [
        {
          id: 1,
          image: '/images/franchisesnearme.png',
          alt: 'Franchisesnearme.com Website Thumbnail',
          name: 'Franchisesnearme.com - DID IT',
          technologies: ['Wordpress', 'HTML', 'CSS'],
          description: 'Website for Spectrum Franchise Group.',
          github: 'none',
          live: 'https://www.franchisesnearme.com/'
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
  }

  setView(view) {
    this.setState({ view });
  }

  // toggleView() {
  //   if (this.state.view === 'carousel') {
  //     this.setView('grid');
  //   } else {
  //     this.setView('carousel');
  //   }
  // }

  render() {
    return (
      <>
        <Header />
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
                    <h3>Blog</h3>
                  </Tween>
                </Reveal>

                <Grid blog_articles={this.state.blog_articles} blog={false} />
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default Applications;
