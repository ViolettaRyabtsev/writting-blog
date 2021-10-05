import React from "react";
import "./navigation.css";
import NavText from "../text.json";
import "../App.css";
class About extends React.Component {
  render() {
    return (
      <div className="main-page">
        <div className="main-line"></div>

        <img
          //props.url from app.js
          src={NavText[1].url}
          width="300px"
          height="200px"
          margin-top="20px"
          alt="book"
          className="book"
        ></img>

        <h4>{NavText[1].text}</h4>
      </div>
    );
  }
}

export default About;
