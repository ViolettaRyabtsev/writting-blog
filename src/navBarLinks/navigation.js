import React from "react";
import "./navigation.css";
import { NavLink, BrowserRouter as Router } from "react-router-dom";
class Navigation extends React.Component {
  render() {
    return (
      <div className="dropdown">
        <button class="btn">Categories</button>
        <div class="dropdown-content">
          <NavLink to="/fantasy" onClick={this.handleClick}>
            {" "}
            Fantasy
          </NavLink>
          <NavLink to="/romance">Romance</NavLink>
          <NavLink to="/realism"> Realism</NavLink>
          <NavLink to="/historic">Historic</NavLink>
          <NavLink to="/erotica">Erotica</NavLink>
        </div>
      </div>
    );
  }
}

export default Navigation;
