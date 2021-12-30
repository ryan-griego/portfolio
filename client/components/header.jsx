import React, { useState } from 'react';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Card,
  Fade
} from 'reactstrap';
import {
  Link,
  animateScroll as scroll
} from 'react-scroll';
import { Controls, PlayState, Tween, SplitChars } from 'react-gsap';

const ref = React.createRef();

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    if (window.innerWidth < 768) {
      this.setState({ isOpen: !this.state.isOpen });
    }
  }

  render() {
    let offset = -86;

    if (window.innerWidth < 768) {
      offset = -286;
    }

    return (
      <>
        <Container fluid={true} className="py-3 shadow-lg bg-white sticky-top">
          <Navbar color="faded" light
            expand="md"
            className="row py-0">

            <NavbarBrand onClick={() => {
              scroll.scrollToTop();
              if (this.state.isOpen) {
                this.handleToggle();
              }
            }}
            className="pointer decoration-none">
              <Tween from={{ x: '-300px' }} duration={1}>

                <img
                  src="./images/portfolio-ryan-logo.png"
                  className="img-fluid header-logo"
                  alt="R/G - Ryan Griego" />
              </Tween>

            </NavbarBrand>

            <NavbarToggler onClick={this.handleToggle} navbar="true" />

            <Collapse isOpen={this.state.isOpen} navbar>
              <Tween
                from={{ y: '-100%', delay: 1 }} duration={0.3}
              >
                <div style={{ marginLeft: 'auto' }}>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <Link activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={offset}
                        duration={1000}
                        className="pointer px-0 nav-link"
                        onClick={this.handleToggle}>
                      About Me
                      </Link>
                    </NavItem>
                    <NavItem className="ml-md-5">
                      <Link activeClass="active"
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={offset}
                        duration={1000}
                        className="pointer px-0 nav-link"
                        onClick={this.handleToggle}>
                    Skills
                      </Link>
                    </NavItem>
                    <NavItem className="ml-md-5">
                      <Link activeClass="active"
                        to="tools"
                        spy={true}
                        smooth={true}
                        offset={offset}
                        duration={1000}
                        className="pointer px-0 nav-link"
                        onClick={this.handleToggle}>
                    Tools
                      </Link>
                    </NavItem>
                    <NavItem className="ml-md-5">
                      <Link activeClass="active"
                        to="applications"
                        spy={true}
                        smooth={true}
                        offset={offset}
                        duration={1000}
                        className="pointer px-0 nav-link"
                        onClick={this.handleToggle}>
                    Websites
                      </Link>
                    </NavItem>
                    <NavItem className="ml-md-5">
                      <Link activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={offset}
                        duration={1000}
                        className="pointer px-0 nav-link"
                        onClick={this.handleToggle}>
                    Contact
                      </Link>
                    </NavItem>
                  </Nav>
                </div>
              </Tween>
            </Collapse>

          </Navbar>

        </Container>
      </>
    );
  }
}

export default Header;
