import CommentList from "./CommentList";
import React from "react";
import axios from "axios";

class CommentSection extends React.Component {
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
        articles: this.props.articles,
      },
    });
  };

  handleClick = () => {
    const obj = this.state.text;
    console.log(obj);
    axios
      .post("http://localhost:5000/comments", {
        obj,
      })
      .then(function (response) {
        console.log(response.config.data, "send data");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  componentDidMount = async () => {
    const comments = await axios
      .get("http://localhost:5000/comments")
      .then(function (response) {
        console.log(response.data, "here get from 5000");
        // filter
        let arr = response.data.filter(
          (item) => item.articles === this.state.text.articles
        );
        return arr;
      });

    this.setState({
      comments,
    });

    // let currentPost = this.state.comments.slice(0, 5);

    // this.setState({
    //   postPerPage: currentPost,
    // });

    // let arr2 = [];
    // for (var i = 1; i < Math.ceil(this.state.comments.length / 5); i++) {
    //   arr2.push(i);
    // }

    // this.setState({
    //   numbers: arr2,
    // });
  };

  //need send data to database

  render() {
    console.log(this.state.comments, "comments");
    return (
      <div>
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
    );
  }
}

export default CommentSection;
