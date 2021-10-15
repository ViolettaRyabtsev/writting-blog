import "./App.css";
import Footer from "./Footer.js";
// import Home from "./navBarLinks/Home.js";
import MainPage from "./mainPage.js";
import Articles from "./articles.js";
import About from "./navBarLinks/About.js";
import React from "react";
import {
  NavLink,
  Switch,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import NavText from "./text.json";
import logo from "./beyond.png";
import Navigation from "./navBarLinks/navigation";
import Fantasy from "./categories/fantasy";
import Writing from "./navBarLinks/Writing";
import Categories from "./navBarLinks/categories";
import Romance from "./categories/romance";
import Realism from "./categories/realism";
import Historic from "./categories/historic";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(NavText[0].url);
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
                    <NavLink to="/" activeClassName="selected">
                      <button>Home </button>
                    </NavLink>
                  </li>
                  <li onClick={this.handleClickAbout}>
                    <NavLink to="/about" activeClassName="selected">
                      <button>About</button>
                    </NavLink>
                  </li>
                  <li onClick={this.handleClick}>
                    <NavLink to="/categories">
                      <Navigation />
                    </NavLink>
                  </li>
                  <li onClick={this.handleClickWriting}>
                    <NavLink to="/writeYourStory" activeClassName="selected">
                      <button>Writing</button>
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </header>

          <Switch>
            <Route exact path="/" component={MainPage}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/writeYourStory" component={Writing}></Route>
            <Route exact path="/categories" component={Categories}></Route>
            <Route exact path="/fiction" component={Fantasy}></Route>
            <Route exact path="/romance" component={Romance}></Route>
            <Route exact path="/nonfiction" component={Realism}></Route>
            <Route exact path="/historic" component={Historic}></Route>
          </Switch>
        </Router>

        <Articles />
        <Footer />
      </div>
    );
  }
}

export default App;
