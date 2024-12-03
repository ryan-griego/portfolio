import React, { useState, useEffect } from 'react';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';
import { HashLink as Link } from 'react-router-hash-link';
import { Tween } from 'react-gsap';
import { useLocation } from 'react-router-dom';

function Header({ isDark }) {
  const [navbar, setNavbar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  const toggle = () => {
    if (window.innerWidth < 768) {
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    if (location.pathname === '/') {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 600) {
          setNavbar(true);
        } else {
          setNavbar(false);
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    } else {
      setNavbar(true);
    }
  }, [location.pathname]);

  // Remove because it's breaking the nav bg change on scroll

  // useEffect(() => {
  //   if (!isDark) {
  //     setNavbar(true);
  //   } else {
  //     if (location.pathname === '/') {
  //       setNavbar(false);
  //     } else {
  //       setNavbar(true);
  //     }
  //   }
  // }, [isDark, location.pathname]);

  return (
    <Container
      fluid
      className={
        navbar
          ? 'py-3 shadow-lg sticky-top bg-white'
          : 'py-3 sticky-top bg-transparent'
      }
    >
      <Navbar color="faded" light expand="md" className="row py-0 navbar">
        <NavbarBrand className="pointer decoration-none">
          <Tween from={{ x: '-300px', delay: 2 }} duration={1}>
            <h1
              className={
                navbar
                  ? 'header-logo pl-4'
                  : 'header-logo pl-4 header-logo-dark'
              }
            >
              Ryan Griego
            </h1>
          </Tween>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse navbar isOpen={isOpen}>
          <Tween from={{ y: '-200px', delay: 3 }} duration={0.4}>
            <div style={{ marginLeft: 'auto' }}>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link
                    smooth
                    to="/#about"
                    className={
                      navbar
                        ? 'pointer px-0 nav-link'
                        : 'pointer px-0 nav-link-white'
                    }
                  >
                    About Me
                  </Link>
                </NavItem>
                <NavItem className="ml-md-5">
                  <Link
                    smooth
                    to="/#skills"
                    className={
                      navbar
                        ? 'pointer px-0 nav-link'
                        : 'pointer px-0 nav-link-white'
                    }
                  >
                    Skills
                  </Link>
                </NavItem>
                <NavItem className="ml-md-5">
                  <Link
                    smooth
                    to="/#tools"
                    className={
                      navbar
                        ? 'pointer px-0 nav-link'
                        : 'pointer px-0 nav-link-white'
                    }
                  >
                    Tools
                  </Link>
                </NavItem>
                <NavItem className="ml-md-5">
                  <Link
                    smooth
                    to="/#applications"
                    className={
                      navbar
                        ? 'pointer px-0 nav-link'
                        : 'pointer px-0 nav-link-white'
                    }
                  >
                    Work
                  </Link>
                </NavItem>
                <NavItem className="ml-md-5">
                  <a
                    href={`${window.location.origin}/blog`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={
                      navbar
                        ? 'pointer px-0 nav-link'
                        : 'pointer px-0 nav-link-white'
                    }
                  >
                    Blog
                  </a>
                </NavItem>
                <NavItem className="ml-md-5">
                  <Link
                    smooth
                    to="/#contact"
                    className={
                      navbar
                        ? 'pointer px-0 nav-link pr-4'
                        : 'pointer px-0 nav-link-white pr-4'
                    }
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
  );
}

export default Header;
