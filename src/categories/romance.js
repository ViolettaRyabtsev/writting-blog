import React from "react";
import GetBooksApi from "./callBooksApi";
import CommentSection from "./CommentSection";
class Romance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: "family",
    };
  }

  render() {
    return (
      <div className="main-page">
        <div className="main-line"></div>
        <div className="storyText">
          <GetBooksApi article={this.state.article} />
        </div>
        <div className="comments-box">comments</div>
        <CommentSection articles="romance" />
      </div>
    );
  }
}

export default Romance;
