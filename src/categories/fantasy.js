import React from "react";
import GetBooksApi from "./callBooksApi.js";
import CommentSection from "./CommentSection.js";

class Fantasy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: "hardcover-fiction",
    };
  }

  render() {
    return (
      <div className="main-page">
        <div className="main-line"></div>
        <div className="storyText">
          <GetBooksApi article={this.state.article} />
        </div>
        comments
        <div className="comments-box"></div>
        <CommentSection article="Fantasy" />
      </div>
    );
  }
}

export default Fantasy;
