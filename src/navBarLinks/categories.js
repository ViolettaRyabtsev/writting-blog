import React from "react";
import "./navigation.css";

import "../App.css";
import CategoriesUrl from "./categoriesPicture.json";
import Fantasy from "../categories/fantasy";
import Romance from "../categories/romance";
import Realism from "../categories/realism";
import Historic from "../categories/historic";
import {
  NavLink,
  Switch,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";

class Categories extends React.Component {
  state = {
    persons: [],
    query: "",
  };

  render() {
    return (
      <Router>
        <div>
          <div className="wrapper">
            <div className="category-box">
              <NavLink to="/fantasy">
                <img
                  src={CategoriesUrl[0].Fantasy}
                  width="300px"
                  height="200px"
                  margin-top="20px"
                  alt="book"
                  className="book"
                ></img>
                <button> Fantasy</button>
              </NavLink>
            </div>
            <div className="category-box">
              <NavLink path to="/romance">
                <img
                  src={CategoriesUrl[1].Romance}
                  width="300px"
                  height="200px"
                  margin-top="20px"
                  alt="book"
                  className="book"
                ></img>
                <button>Romance</button>
              </NavLink>
            </div>
            <div className="category-box">
              <NavLink path to="/nonfiction">
                <img
                  src={CategoriesUrl[2].Nonfiction}
                  width="300px"
                  height="200px"
                  margin-top="20px"
                  alt="book"
                  className="book"
                ></img>
                <button>Nonfiction</button>
              </NavLink>
            </div>
            <div className="category-box">
              <NavLink path to="/historic">
                <img
                  src={CategoriesUrl[3].Historical}
                  width="300px"
                  height="200px"
                  margin-top="20px"
                  alt="book"
                  className="book"
                ></img>
                <button>Historical</button>
              </NavLink>
            </div>
            <div className="category-box">
              <NavLink to="/erotica">
                <img
                  src={CategoriesUrl[4].Erotic}
                  width="300px"
                  height="200px"
                  margin-top="20px"
                  alt="book"
                  className="book"
                ></img>

                <button> Erotic</button>
              </NavLink>
            </div>
            <div className="category-box">
              <NavLink path to="/horror">
                <img
                  src={CategoriesUrl[5].Horror}
                  width="300px"
                  height="200px"
                  margin-top="20px"
                  alt="book"
                  className="book"
                ></img>
                <button>Horror</button>
              </NavLink>
            </div>
          </div>

          <Switch>
            <Route exact path="/fiction" component={Fantasy}></Route>
            <Route exact path="/romance" component={Romance}></Route>
            <Route exact path="/nonfiction" component={Realism}></Route>
            <Route exact path="/historic" component={Historic}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Categories;
