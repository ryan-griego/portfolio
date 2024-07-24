import React from 'react';
import { Link } from 'react-router-dom';
import Header from './header';
import Hero from './hero';
import AboutMe from './about-me';
import Skills from './skills';
import Tools from './tools';
import Applications from './applications';
// import Contact from './contact';

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
      <Tools />
      <Applications />
      <Link to="/intro-video">Watch Intro Video</Link>
      {/* <Contact /> */}
    </div>
  );
};

export default Home;
