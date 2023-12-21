import React from 'react';
import Header from './header';
import Hero from './hero';
import AboutMe from './about-me';
import Skills from './skills';
import Tools from './tools';
import Applications from './applications';
import Contact from './contact';

// import ToggleDark from './toggleDark';

import ToggleSwitchFun from './toggle-switch-fun';

import { ThemeContext, themes } from '../contexts/ThemeContext';

import { useLocation } from 'react-router-dom';

// const MyComponent = () => {
//   const myParam = useLocation().search;
//   const productId = new URLSearchParams(search).get("id");
//   console.log(productId); // 159
// }

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      year: null,
      view: 'grid',
      iconView: null
    };

    this.getYear = this.getYear.bind(this);

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

  getYear() {
    const date = new Date();
    const year = date.getFullYear();
    this.setState({ year });
  }

  componentDidMount() {
    this.getYear();
  }

  render() {

    // const [darkMode, setDarkMode] = React.useState(true);

    return (
      <>
        <Header />
        {/* <ThemeContext.Consumer>
          {({ changeTheme }) => (
            <ToggleDark
              toggleDark={() => {
                setDarkMode(!darkMode);
                changeTheme(darkMode ? themes.light : themes.dark);
              }}
            />
          )}
        </ThemeContext.Consumer> */}
        <ToggleSwitchFun setView={this.setView}
          toggleView={this.toggleView}
          toggleTooltip={this.toggleTooltip}
          tooltipOpen={this.state.tooltipOpen}
          iconView={this.state.iconView}
          view={this.state.view}
        />

        {this.state.view === 'carousel'
          ? <Hero isFun='true'/>
          : <Hero isFun='false' />}

        {/* <Hero /> */}
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
