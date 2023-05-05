import React from 'react';
import Header from './header';
import Hero from './hero';
import AboutMe from './about-me';
import Skills from './skills';
import Tools from './tools';
import Applications from './blog/home';
import Portfolio from './portfolio';
import Contact from './contact';
import { Route, Routes, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import Applications_route from './blog/home.jsx';

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
        <Router>
          <Routes>
            {/* <div className="contaner">
            <p>Let's add routing</p>
          </div> */}
            <Route path="/blog" element={<Applications_route />} />
            <Route exact path="/" element={<Portfolio />} >
              <Redirect to =
          </Routes>
          {/* <Header />
        <Hero />
        <AboutMe />
        <Skills />
        <Tools />
        <Applications />
        <Contact year={this.state.year} /> */}

        </Router>
      </>
    );
  }
}

export default App;
