import React from 'react';
import Header from './header';
import Hero from './hero';
import AboutMe from './about-me';
import Skills from './skills';
import Tools from './tools';
import Applications from './blog/home';
import Contact from './contact';
import { Route, Routes, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import Applications_route from './blog/home.jsx';

console.log('log the Contact', Contact);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      year: null
    };

    this.getYear = this.getYear.bind(this);
  }

  getYear() {
    const date = new Date();
    const year = date.getFullYear();
    this.setState({ year });
  }

  componentDidMount() {
    this.getYear();
  }

  render() {
    console.log('process.env.PUBLIC_URL', process.env);
    return (

      <>
        <Header />
        <Hero />
        <AboutMe />
        <Skills />
        <Tools />
        <Applications />
        <Contact year={this.state.year} />

      </>
    );
  }
}

export default App;
