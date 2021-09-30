import React from "react";
import "./App.css";
class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        {" "}
        <h2>Articles</h2>
        <div className="articles">
          <div className="oneArticle"></div>
          <div className="twoArticle"></div>
          <div className="threeArticle"></div>
        </div>
      </>
    );
  }
}

export default Articles;
