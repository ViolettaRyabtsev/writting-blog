import React from "react";
import "./Comments.css";

class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="List-group">
          {this.props.totalPosts.map((message) => (
            <div className="List-group-item">
              <div className="user-photo"></div>
              <h5>{message.name}</h5>
              <p>{message.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default CommentList;
