import React from "react";
import "./Comments.css";
import "../App.css";
import CommentList from "./CommentList";

class Realism extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: {
        photo: "",
        name: "",
        body: "",
        time: new Date(),
      },
      comments: [],
      postPerPage: [],
      numberPerPage: 4,
      numbers: [],
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      text: {
        body: e.target.value,
        name: "",
        photo: "",
        time: new Date(),
      },
    });
  };

  handleClick = () => {
    let arr = this.state.comments.slice();
    arr.push(this.state.text.body);

    let currentPost = this.state.comments.slice(0, 5);

    this.setState({
      comments: arr,
      postPerPage: currentPost,
    });

    let arr2 = [];
    for (var i = 1; i < Math.ceil(this.state.comments.length / 5); i++) {
      arr2.push(i);
    }
    this.setState({
      numbers: arr2,
    });
  };
  // get next page
  paginate = (pageNumber) => {};

  render() {
    return (
      <div className="main-page">
        <div className="main-line"></div>
        <div className="storyText"></div>
        <div className="comments-box">
          <div className="post-comment">
            {" "}
            <div className="user-photo"></div>
            <input
              value={this.state.text.body}
              id="text-comment"
              type="text"
              placeholder="add a public comment"
              onChange={this.handleChange}
            />{" "}
            <button className="submit-comment">CANCEL</button>
            <button onClick={this.handleClick} className="submit-comment">
              SUBMIT
            </button>
          </div>
          <CommentList
            postsPerPage={this.state.postPerPage}
            totalPosts={this.state.comments}
          />
          <nav className="pagination">
            {this.state.numbers.map((number) => (
              <div className="eachNumberPage">
                <a onClick={() => this.paginate(number)} href="!#">
                  {number}
                </a>
              </div>
            ))}
          </nav>
        </div>
      </div>
    );
  }
}

export default Realism;
