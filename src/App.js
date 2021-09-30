import "./App.css";

import MainPage from "./mainPage.js";
import Articles from "./articles.js";
import React from "react";
import { NavLink, BrowserRouter as Router } from "react-router-dom";
import NavText from "./text.json";
import logo from "./beyond.png";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: NavText.home,
      clickedHome: false,
      clickedAbout: false,
    };
  }

  handleClickAbout = () => {
    this.setState({
      clickedAbout: !this.state.clicked,
      text: NavText.about,
    });
  };

  handleClickHome = () => {
    this.setState({
      clickedHome: !this.state.clickedHome,
      text: NavText.home,
    });
  };
  render() {
    console.log(NavText, "here");
    return (
      <div className="container">
        <Router>
          <header>
            <div className="logo">
              <img src={logo} width="250px" height="250px" alt="logo" />
            </div>
            <div className="navigation">
              <nav>
                <ul>
                  <li onClick={this.handleClickHome}>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li onClick={this.handleClickAbout}>
                    <NavLink to="/about">About</NavLink>
                  </li>
                  <li onClick={this.handleClick}>
                    <NavLink to="/navigation">Navigation</NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
        </Router>

        <MainPage text={this.state.text} />
        <Articles />
      </div>
    );
  }
}

export default App;
