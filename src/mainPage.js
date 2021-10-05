import React from "react";
import "./App.css";
import NavText from "./text.json";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="main-page">
        <div className="main-line"></div>

        <img
          //props.url from app.js
          src={NavText[0].url}
          width="300px"
          height="200px%"
          margin-top="20px"
          alt="book"
          className="book"
        ></img>

        <h4>{NavText[0].text}</h4>
      </div>
    );
  }
}

export default MainPage;
