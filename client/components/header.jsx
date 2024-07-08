import React, { useState, useEffect, useCallback } from 'react';
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

function Header() {
  const [navbar, setNavbar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    if (window.innerWidth < 768) {
      setIsOpen(!isOpen);
    }
  };

  window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 200) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }

  });

  return (
    <>
      <Container fluid={true} className={navbar ? 'py-3 shadow-lg sticky-top bg-white' : 'py-3 shadow-lg sticky-top bg-transparent'}>
        <Navbar color="faded" light
          expand="md"
          className="row py-0 navbar"
        >
          <NavbarBrand
            className="pointer decoration-none">
            <Tween from={{ x: '-300px', delay: 2 }} duration={1}>
              <h1 className={navbar ? 'header-logo pl-4' : 'header-logo pl-4 header-logo-dark'}>Ryan Griego</h1>
            </Tween>
          </NavbarBrand>
          <NavbarToggler navbar="true" onClick={toggle}/>
          <Collapse navbar isOpen={isOpen}>
            <Tween
              from={{ y: '-100%', delay: 3 }} duration={0.3}
            >
              <div style={{ marginLeft: 'auto' }}>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <Link activeClass="active"
                      to="about"
                      spy={true}
                      smooth={true}
                      duration={1000}
                      className={navbar ? 'pointer px-0 nav-link' : 'pointer px-0 nav-link-white'}
                    >
                      About Me
                    </Link>
                  </NavItem>
                  <NavItem className="ml-md-5">
                    <Link activeClass="active"
                      to="skills"
                      spy={true}
                      smooth={true}
                      duration={1000}
                      className={navbar ? 'pointer px-0 nav-link' : 'pointer px-0 nav-link-white'}
                    >
                    Skills
                    </Link>
                  </NavItem>
                  <NavItem className="ml-md-5">
                    <Link activeClass="active"
                      to="tools"
                      spy={true}
                      smooth={true}
                      duration={1000}
                      className={navbar ? 'pointer px-0 nav-link' : 'pointer px-0 nav-link-white'}
                    >
                    Tools
                    </Link>
                  </NavItem>
                  <NavItem className="ml-md-5">
                    <Link activeClass="active"
                      to="applications"
                      spy={true}
                      smooth={true}
                      duration={1000}
                      className={navbar ? 'pointer px-0 nav-link' : 'pointer px-0 nav-link-white'}
                    >
                    Websites
                    </Link>
                  </NavItem>
                  <NavItem className="ml-md-5">
                    <a href="https://ryangriego.com/blog"
                      target="_blank"
                      className={navbar ? 'pointer px-0 nav-link' : 'pointer px-0 nav-link-white'}
                    >
                      Blog
                    </a>
                  </NavItem>
                  <NavItem className="ml-md-5">
                    <Link activeClass="active"
                      to="contact"
                      spy={true}
                      smooth={true}

                      duration={1000}
                      className={navbar ? 'pointer px-0 nav-link pr-4' : 'pointer px-0 nav-link-white pr-4'}
                    >
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
  // }
}

export default Header;
