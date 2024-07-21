import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Sugar } from 'react-preloaders';
import Header from './header';
import Hero from './hero';
import AboutMe from './about-me';
import Skills from './skills';
import Tools from './tools';
import Applications from './applications';
import Contact from './contact';
import Home from './home';
import IntroVideo from './intro-video';

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
    return (
      <>
        <Router>
          <React.Fragment>
            {/* <Sugar color="#24ecd7;" background="linear-gradient(180deg, rgba(0,0,0,1) 3%, rgba(22,91,92,1) 39%, rgba(17,39,47,1) 51%, rgba(2,4,4,1) 80%)" /> */}


            <Routes>
              {/* <Route exact path="/" element={Home} />
              <Route path="/intro-video" element={IntroVideo} /> */}

              <Route path="/" element={<Home />} />
              <Route path="/intro-video" element={<IntroVideo />} />
              {/* Add more routes here as needed */}
            </Routes>
            {/* <Hero />
            <AboutMe />
            <Skills />
            <Tools />
            <Applications />
            <Contact year={this.state.year} /> */}
          </React.Fragment>
        </Router>
      </>
    );
  }
}
export default App;
