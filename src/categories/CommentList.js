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
          {this.props.postsPerPage.map((text) => (
            <div className="List-group-item">
              <div className="user-photo"></div>
              <h5>user</h5>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default CommentList;
