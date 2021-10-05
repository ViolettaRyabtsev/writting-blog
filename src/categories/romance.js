import React from "react";

class Romance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };
  }
  
  render() {
    return (
      <div className="main-page">
        <div className="main-line"></div>
        <div className="storyText"></div>
        <div className="comments-box">comments</div>
      </div>
    );
  }
}

export default Romance;
