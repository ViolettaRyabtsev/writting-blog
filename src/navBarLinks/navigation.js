import React from "react";
import "./navigation.css";
import { NavLink } from "react-router-dom";
class Navigation extends React.Component {
  render() {
    return (
      <div className="dropdown">
        <button class="btn">Categories</button>
        <div class="dropdown-content">
          <NavLink to="/fiction" onClick={this.handleClick}>
            {" "}
            Fantasy
          </NavLink>
          <NavLink to="/romance">Romance</NavLink>
          <NavLink to="/nonfiction"> Realism</NavLink>
          <NavLink to="/historic">Historic</NavLink>
          <NavLink to="/erotica">Erotica</NavLink>
        </div>
      </div>
    );
  }
}

export default Navigation;
