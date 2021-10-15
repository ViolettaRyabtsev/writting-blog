import React from "react";
import "./Comments.css";
import "../App.css";

import CommentSection from "./CommentSection";
import GetBooksApi from "./callBooksApi";

class Realism extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: "science",
    };
  }

  render() {
    return (
      <div className="main-page">
        <div className="main-line"></div>
        <div className="storyText">
          {" "}
          <GetBooksApi article={this.state.article} />
        </div>

        <div className="comments-box">comments</div>
        <CommentSection articles="realism" />
      </div>
    );
  }
}

export default Realism;
