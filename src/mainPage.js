import React from "react";
import "./App.css";
class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="main-page">
        <div className="main-line"></div>
        <h1>4 Essential Elements to Writing a Great Blog Post</h1>
        <h4>{this.props.text}</h4>
      </div>
    );
  }
}

export default MainPage;
