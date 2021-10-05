import React from "react";

class Fantasy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carousel: [],
    };
  }

  //get random api picture

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

export default Fantasy;
